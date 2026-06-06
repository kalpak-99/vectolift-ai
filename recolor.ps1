$json = Get-Content -Path ".\fe807c20-1183-11ee-a7e0-738836ffd98a.json" -Raw

# Teal fills/strokes -> Purple primary
$json = $json -replace '0\.478431402468,1,0\.984313785329', '0.42,0.22,0.83'

# Dark blue fills -> Deep purple  
$json = $json -replace '0\.078431372549,0\.360784313725,0\.619607843137', '0.33,0.14,0.69'

# Light teal -> Light purple
$json = $json -replace '0\.517647058824,0\.988235353956,0\.988235353956', '0.52,0.33,0.93'

# Blue accent -> Lavender
$json = $json -replace '0\.286274509804,0\.658823529412,1', '0.81,0.74,1'

# Gradient stops (teal-to-dark) -> purple gradients
$json = $json -replace '0\.478,1,0\.984,0\.5,0\.278,0\.68,0\.802,1,0\.078,0\.361,0\.62', '0.52,0.33,0.93,0.5,0.42,0.22,0.83,1,0.33,0.14,0.69'

# Body/head gradient stops
$json = $json -replace '0\.043,0\.31,0\.424,0\.5,0\.376,0\.574,0\.69,1,0\.709,0\.838,0\.957', '0.33,0.14,0.69,0.5,0.42,0.22,0.83,1,0.52,0.33,0.93'

Set-Content -Path ".\robot-purple.json" -Value $json -NoNewline
Write-Host "Done - robot-purple.json created"
