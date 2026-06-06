/* ============================================
   VECTOLIFT — Orb + GSAP
   ============================================ */
(function () {
    'use strict';

    // ─── VOICE ORB VISUALIZATION ────────────────────────────────
    // A living, breathing orb made of concentric rings that pulse
    // like a voice — the visual identity of an AI caller.
    function initOrb() {
        const canvas = document.getElementById('orb-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        function resize() {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        }
        resize();
        window.addEventListener('resize', resize);

        let time = 0;
        let mouseX = 0.5;
        let mouseY = 0.5;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
        });

        const ringCount = 6;
        const baseRadius = 0.18; // fraction of canvas

        function draw() {
            const w = canvas.width;
            const h = canvas.height;
            const cx = w / 2;
            const cy = h / 2;
            const maxR = Math.min(w, h) * 0.45;

            ctx.clearRect(0, 0, w, h);
            time += 0.008;

            // Mouse influence — subtle offset
            const mx = (mouseX - 0.5) * 12;
            const my = (mouseY - 0.5) * 12;

            for (let ring = 0; ring < ringCount; ring++) {
                const t = ring / ringCount;
                const baseR = maxR * (baseRadius + t * 0.72);

                // Each ring undulates independently
                const points = 120;
                const breathe = Math.sin(time * 1.2 + ring * 0.7) * 0.06;
                const pulse = Math.sin(time * 2.5 + ring * 1.1) * 0.03;

                // Color: from solid blue center to faint outer
                const alpha = (1 - t * 0.85) * 0.12;
                const lineAlpha = (1 - t * 0.8) * 0.25;

                // Fill
                ctx.beginPath();
                for (let i = 0; i <= points; i++) {
                    const angle = (i / points) * Math.PI * 2;
                    const noise1 = Math.sin(angle * 3 + time * 1.5 + ring) * (0.02 + ring * 0.008);
                    const noise2 = Math.cos(angle * 5 - time * 2 + ring * 0.5) * 0.015;
                    const noise3 = Math.sin(angle * 7 + time * 3.2) * 0.008;
                    const r = baseR * (1 + breathe + pulse + noise1 + noise2 + noise3);

                    const x = cx + Math.cos(angle) * r + mx * (ring + 1);
                    const y = cy + Math.sin(angle) * r + my * (ring + 1);

                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
                ctx.fill();

                // Stroke
                ctx.beginPath();
                for (let i = 0; i <= points; i++) {
                    const angle = (i / points) * Math.PI * 2;
                    const noise1 = Math.sin(angle * 3 + time * 1.5 + ring) * (0.02 + ring * 0.008);
                    const noise2 = Math.cos(angle * 5 - time * 2 + ring * 0.5) * 0.015;
                    const noise3 = Math.sin(angle * 7 + time * 3.2) * 0.008;
                    const r = baseR * (1 + breathe + pulse + noise1 + noise2 + noise3);

                    const x = cx + Math.cos(angle) * r + mx * (ring + 1);
                    const y = cy + Math.sin(angle) * r + my * (ring + 1);

                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
                ctx.lineWidth = dpr * 0.8;
                ctx.stroke();
            }

            // Center glow
            const grad = ctx.createRadialGradient(cx + mx, cy + my, 0, cx + mx, cy + my, maxR * 0.3);
            grad.addColorStop(0, 'rgba(37, 99, 235, 0.08)');
            grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
            ctx.beginPath();
            ctx.arc(cx + mx, cy + my, maxR * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            requestAnimationFrame(draw);
        }

        draw();
    }

    // ─── GSAP ENTRANCE ──────────────────────────────────────────
    function initAnimations() {
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            delay: 0.3
        });

        // Orb fades in first
        tl.fromTo('#orb-canvas',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' },
            0
        );

        // Top Live Badge
        tl.fromTo('.hero-top-badge',
            { opacity: 0, y: -16 },
            { opacity: 1, y: 0, duration: 0.8 },
            0.5
        );

        // Kicker
        tl.fromTo('.hero-kicker',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8 },
            0.6
        );

        // Heading lines
        tl.fromTo('.h-line-1',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1 },
            0.75
        );

        tl.fromTo('.h-line-2',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1 },
            0.9
        );

        // Bottom CTA
        tl.fromTo('.hero-bottom',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9 },
            1.3
        );
    }

    // ─── CALCULATOR LOGIC ───────────────────────────────────────
    function initCalculator() {
        const slider = document.getElementById('calc-slider');
        const currentValue = document.getElementById('calc-current');
        const monthlyOut = document.getElementById('calc-monthly');
        const yearlyOut = document.getElementById('calc-yearly');
        const afterhoursOut = document.getElementById('calc-afterhours');

        if (!slider) return;

        const callValue = 150;
        const conversionRate = 0.30;
        const daysPerMonth = 30;
        const afterHoursRatio = 0.35; // 35% of missed calls are after hours

        function updateCalculator() {
            const calls = parseInt(slider.value, 10);
            currentValue.textContent = calls + (calls === 1 ? ' call/day' : ' calls/day');

            // Calculate losses
            const monthlyLoss = calls * daysPerMonth * conversionRate * callValue;
            const yearlyLoss = monthlyLoss * 12;
            const afterHoursLoss = monthlyLoss * afterHoursRatio;

            // Formatters
            const noDecimals = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            });
            
            const oneDecimal = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            });

            monthlyOut.textContent = noDecimals.format(monthlyLoss);
            yearlyOut.textContent = noDecimals.format(yearlyLoss);
            
            // Format after-hours with 1 decimal if needed, matching the $2,362.5 in reference
            if (afterHoursLoss % 1 !== 0) {
                afterhoursOut.textContent = oneDecimal.format(afterHoursLoss);
            } else {
                afterhoursOut.textContent = noDecimals.format(afterHoursLoss);
            }

            // Update slider fill track
            const percentage = ((calls - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.background = `linear-gradient(to right, #ffffff ${percentage}%, rgba(255, 255, 255, 0.3) ${percentage}%)`;
        }

        slider.addEventListener('input', updateCalculator);
        updateCalculator(); // Initialize on load
    }

    // ─── SCROLL PROGRESS LOGIC ──────────────────────────────────
    function initScrollProgress() {
        const fill = document.querySelector('.scroll-progress-fill');
        if (!fill) return;

        function updateProgress() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight <= 0) {
                fill.style.height = '0%';
                return;
            }
            const percent = (scrollTop / scrollHeight) * 100;
            fill.style.height = `${percent}%`;
        }

        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);
        updateProgress();
    }

    // ─── FLOW INTERCONNECT ANIMATION ───────────────────────────
    function initFlowAnimation() {
        const wrapper = document.getElementById('flow-wrapper');
        if (!wrapper) return;

        const nodes = wrapper.querySelectorAll('.flow-anim-node');
        const connectors = wrapper.querySelectorAll('.flow-connector-fill');

        if (nodes.length === 0) return;

        let hasPlayed = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasPlayed) {
                    hasPlayed = true;
                    observer.disconnect();
                    playFlowTimeline(nodes, connectors);
                }
            });
        }, {
            threshold: 0.4
        });

        observer.observe(wrapper);
    }

    function playFlowTimeline(nodes, connectors) {
        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' }
        });

        // Card 1 appears
        tl.to(nodes[0], {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6
        });

        // Connector 1 draws
        if (connectors[0]) {
            tl.to(connectors[0], {
                width: '100%',
                duration: 0.4,
                ease: 'power1.inOut'
            }, '-=0.1');
        }

        // Card 2 appears
        if (nodes[1]) {
            tl.to(nodes[1], {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6
            }, '-=0.1');
        }

        // Connector 2 draws
        if (connectors[1]) {
            tl.to(connectors[1], {
                width: '100%',
                duration: 0.4,
                ease: 'power1.inOut'
            }, '-=0.1');
        }

        // Card 3 appears
        if (nodes[2]) {
            tl.to(nodes[2], {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6
            }, '-=0.1');
        }

        // Connector 3 draws
        if (connectors[2]) {
            tl.to(connectors[2], {
                width: '100%',
                duration: 0.4,
                ease: 'power1.inOut'
            }, '-=0.1');
        }

        // Card 4 appears
        if (nodes[3]) {
            tl.to(nodes[3], {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6
            }, '-=0.1');
        }
    }

    // ─── INIT ───────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        initOrb();
        initAnimations();
        initCalculator();
        initScrollProgress();
        initFlowAnimation();
    });

})();
