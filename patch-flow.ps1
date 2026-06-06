$path = "D:\vectolift files\stitch_vectolift_24_7_ai_receptionist\index.html"
$lines = [System.Collections.ArrayList]@([System.IO.File]::ReadAllLines($path))
Write-Host "Loaded $($lines.Count) lines"

# ═══ VERIFY TARGETS (original indices) ═══
if ($lines[113] -notlike '*/* Flow */*') { Write-Error "Patch 1 mismatch at 113: $($lines[113])"; return }
if ($lines[132] -ne '</style>') { Write-Error "Patch 2 mismatch at 132: $($lines[132])"; return }
if ($lines[282] -notlike '*id="flowSection"*') { Write-Error "Patch 3 mismatch at 282: $($lines[282])"; return }
if ($lines[373] -notlike '*FLOW*') { Write-Error "Patch 4 mismatch at 373: $($lines[373])"; return }
Write-Host "All targets verified"

# ═══════════════════════════════════════════════════════════════════
# Process BOTTOM → TOP so indices stay valid
# ═══════════════════════════════════════════════════════════════════

# ─── PATCH 4: Replace flow JS (indices 373-377, 5 lines) ─────────
$lines.RemoveRange(373, 5)
$jsNew = @(
"    // ===== FLOW ANIMATION (matches reference script.js) ====="
"    ;(function() {"
"        const wrapper = document.getElementById('flow-wrapper');"
"        if (!wrapper) return;"
"        const nodes = wrapper.querySelectorAll('.flow-anim-node');"
"        const fills = wrapper.querySelectorAll('.flow-connector-fill');"
"        if (nodes.length === 0) return;"
"        let hasPlayed = false;"
"        const isMobile = () => window.innerWidth <= 768;"
""
"        // IntersectionObserver — triggers once on scroll"
"        const observer = new IntersectionObserver(es => {"
"            es.forEach(e => {"
"                if (e.isIntersecting && !hasPlayed) {"
"                    hasPlayed = true;"
"                    observer.disconnect();"
"                    playTimeline();"
"                }"
"            });"
"        }, { threshold: isMobile() ? 0.15 : 0.4 });"
"        observer.observe(wrapper);"
""
"        // Sequential entrance: card → connector → card → connector ..."
"        function playTimeline() {"
"            let d = 0;"
"            nodes.forEach((node, i) => {"
"                setTimeout(() => {"
"                    node.style.transition = 'opacity 600ms cubic-bezier(0.33,1,0.68,1), transform 600ms cubic-bezier(0.33,1,0.68,1)';"
"                    node.style.opacity = '1';"
"                    node.style.transform = 'scale(1) translateY(0)';"
"                }, d);"
"                d += 500; // card duration minus overlap"
"                if (fills[i]) {"
"                    setTimeout(() => {"
"                        const p = isMobile() ? 'height' : 'width';"
"                        fills[i].style.transition = p + ' 400ms cubic-bezier(0.45,0,0.55,1)';"
"                        fills[i].style[p] = '100%';"
"                    }, d);"
"                    d += 300; // connector duration minus overlap"
"                }"
"            });"
"            // After entrance finishes, start the active-state loop"
"            setTimeout(() => startLoop(), d + 800);"
"        }"
""
"        // Infinite active-state cycling with hover-pause + click-to-jump"
"        function startLoop() {"
"            let active = 0, paused = false, timer;"
"            const duration = 3500; // ms per card"
"            const setActive = idx => {"
"                nodes.forEach((n, j) => n.classList.toggle('flow-node-active', j === idx));"
"            };"
"            const advance = () => {"
"                if (paused) return;"
"                active = (active + 1) % nodes.length;"
"                setActive(active);"
"                timer = setTimeout(advance, duration);"
"            };"
"            setActive(0);"
"            timer = setTimeout(advance, duration);"
"            // Hover pauses the loop"
"            wrapper.addEventListener('mouseenter', () => { paused = true; clearTimeout(timer); });"
"            wrapper.addEventListener('mouseleave', () => { paused = false; timer = setTimeout(advance, duration); });"
"            // Click jumps to that card"
"            nodes.forEach((n, i) => {"
"                n.style.cursor = 'pointer';"
"                n.addEventListener('click', () => {"
"                    clearTimeout(timer);"
"                    active = i;"
"                    setActive(i);"
"                    if (!paused) timer = setTimeout(advance, duration);"
"                });"
"            });"
"        }"
"    })();"
)
$lines.InsertRange(373, $jsNew)
Write-Host "Patch 4 (JS): replaced 5 lines with $($jsNew.Count) lines"

# ─── PATCH 3: Replace flow HTML (indices 282-296, 15 lines) ──────
$lines.RemoveRange(282, 15)
$htmlNew = @(
'<div class="flow-wrapper" id="flow-wrapper">'
'<div class="flow-sequence">'
'<div class="flow-node flow-anim-node"><div class="flow-node-icon"><span class="material-symbols-outlined">phone_in_talk</span></div><h4 class="flow-node-title">Inbound Call</h4><p class="flow-node-desc">Customer rings your dedicated or forwarded number.</p></div>'
'<div class="flow-connector"><div class="flow-connector-fill"></div></div>'
'<div class="flow-node flow-anim-node"><div class="flow-node-icon"><span class="material-symbols-outlined">graphic_eq</span></div><h4 class="flow-node-title">Vectolift AI</h4><p class="flow-node-desc">Answers instantly, processes intent via natural dialogue.</p></div>'
'<div class="flow-connector"><div class="flow-connector-fill"></div></div>'
'<div class="flow-node flow-anim-node"><div class="flow-node-icon"><span class="material-symbols-outlined">bolt</span></div><h4 class="flow-node-title">Action Taken</h4><p class="flow-node-desc">Books meeting, qualifies lead, or routes emergency.</p></div>'
'<div class="flow-connector"><div class="flow-connector-fill"></div></div>'
'<div class="flow-node flow-anim-node"><div class="flow-node-icon"><span class="material-symbols-outlined">database</span></div><h4 class="flow-node-title">CRM Sync</h4><p class="flow-node-desc">Structured data logged instantly to your platform.</p></div>'
'</div>'
'</div>'
)
$lines.InsertRange(282, $htmlNew)
Write-Host "Patch 3 (HTML): replaced 15 lines with $($htmlNew.Count) lines"

# ─── PATCH 2: Insert responsive flow CSS before </style> (index 132) ─
$responsive = @(
'    @media (max-width:768px) {'
'        .flow-sequence { flex-direction:column; }'
'        .flow-connector { flex:0 0 32px; width:2px; height:32px; }'
'        .flow-connector-fill { width:100% !important; height:0%; }'
'        .flow-node { flex:0 0 auto; width:100%; max-width:320px; }'
'    }'
)
$lines.InsertRange(132, $responsive)
Write-Host "Patch 2 (responsive CSS): inserted $($responsive.Count) lines"

# ─── PATCH 1: Replace flow CSS (indices 113-117, 5 lines) ────────
$lines.RemoveRange(113, 5)
$cssNew = @(
'    /* Flow — matches reference style.css */'
'    .flow-wrapper { position:relative; max-width:1100px; margin:0 auto; padding:48px 0; }'
'    .flow-sequence { display:flex; align-items:center; justify-content:center; gap:0; }'
'    .flow-connector { flex:0 0 48px; height:2px; background:#e2e0e9; position:relative; overflow:hidden; }'
'    .flow-connector-fill { position:absolute; top:0; left:0; width:0%; height:100%; background:#6b38d4; }'
'    .flow-node { flex:0 0 200px; background:#ffffff; border:1.5px solid #d2d2d7; border-radius:12px; padding:24px; text-align:center; transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); }'
'    .flow-anim-node { opacity:0; transform:scale(0.85) translateY(16px); }'
'    .flow-node-active { border-color:#6b38d4; box-shadow:0 0 20px rgba(107,56,212,0.08); }'
'    .flow-node-icon { width:56px; height:56px; background:#f5f5f7; border:1.5px solid #d2d2d7; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; transition:all 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }'
'    .flow-node-icon .material-symbols-outlined { color:#86868b; font-size:22px; transition:color 0.5s ease; }'
'    .flow-node-active .flow-node-icon { background:#e9ddff; border-color:#6b38d4; }'
'    .flow-node-active .flow-node-icon .material-symbols-outlined { color:#6b38d4; }'
('    .flow-node-title { font-family:' + "'" + 'Geist' + "'" + ',sans-serif; font-size:14px; font-weight:500; letter-spacing:0.05em; color:#1d1d1f; margin-bottom:8px; }')
'    .flow-node-desc { font-size:13px; line-height:1.5; color:#86868b; }'
)
$lines.InsertRange(113, $cssNew)
Write-Host "Patch 1 (CSS): replaced 5 lines with $($cssNew.Count) lines"

# ═══ WRITE RESULT ═══
[System.IO.File]::WriteAllLines($path, $lines.ToArray())
Write-Host "SUCCESS — wrote $($lines.Count) lines to index.html"
