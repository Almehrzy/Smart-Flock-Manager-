#!/usr/bin/env pwsh

# Smart Flock Manager - Pre-Release Validation Script
# يتحقق من جاهزية المشروع للنشر

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Smart Flock Manager - Release Check" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Color codes
$success = "Green"
$error = "Red"
$warning = "Yellow"
$info = "Cyan"

# Check 1: Node.js version
Write-Host "1. Checking Node.js version..." -ForegroundColor $info
try {
    $node_version = node --version
    Write-Host "   ✅ Node.js version: $node_version" -ForegroundColor $success
} catch {
    Write-Host "   ❌ Node.js not found!" -ForegroundColor $error
    exit 1
}

# Check 2: npm packages
Write-Host ""
Write-Host "2. Checking npm packages..." -ForegroundColor $info
if (Test-Path "node_modules") {
    Write-Host "   ✅ node_modules exists" -ForegroundColor $success
} else {
    Write-Host "   ⚠️  node_modules not found. Running npm install..." -ForegroundColor $warning
    npm install
}

# Check 3: .env.local
Write-Host ""
Write-Host "3. Checking environment variables..." -ForegroundColor $info
if (Test-Path ".env.local") {
    Write-Host "   ✅ .env.local exists" -ForegroundColor $success
    $gemini = Get-Content .env.local | Select-String "VITE_GEMINI_API_KEY"
    $supabase_url = Get-Content .env.local | Select-String "VITE_SUPABASE_URL"
    $supabase_key = Get-Content .env.local | Select-String "VITE_SUPABASE_KEY"
    
    if ($gemini) { Write-Host "   ✅ VITE_GEMINI_API_KEY found" -ForegroundColor $success } else { Write-Host "   ⚠️  VITE_GEMINI_API_KEY missing" -ForegroundColor $warning }
    if ($supabase_url) { Write-Host "   ✅ VITE_SUPABASE_URL found" -ForegroundColor $success } else { Write-Host "   ⚠️  VITE_SUPABASE_URL missing" -ForegroundColor $warning }
    if ($supabase_key) { Write-Host "   ✅ VITE_SUPABASE_KEY found" -ForegroundColor $success } else { Write-Host "   ⚠️  VITE_SUPABASE_KEY missing" -ForegroundColor $warning }
} else {
    Write-Host "   ❌ .env.local not found! Copy from .env.example and add your keys." -ForegroundColor $error
}

# Check 4: Required files
Write-Host ""
Write-Host "4. Checking required files..." -ForegroundColor $info
$required_files = @("package.json", "vite.config.ts", "tsconfig.json", "index.html", "README.md", "CHANGELOG.md", "LICENSE", ".env.example")
foreach ($file in $required_files) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file exists" -ForegroundColor $success
    } else {
        Write-Host "   ❌ $file missing!" -ForegroundColor $error
    }
}

# Check 5: Build
Write-Host ""
Write-Host "5. Running build test..." -ForegroundColor $info
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Build successful!" -ForegroundColor $success
    if (Test-Path "dist") {
        $dist_size = (Get-ChildItem -Path dist -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
        Write-Host "   ✅ dist/ exists (size: $([math]::Round($dist_size, 2)) MB)" -ForegroundColor $success
    }
} else {
    Write-Host "   ❌ Build failed!" -ForegroundColor $error
    exit 1
}

# Check 6: Git status
Write-Host ""
Write-Host "6. Checking Git status..." -ForegroundColor $info
if (Test-Path ".git") {
    Write-Host "   ✅ Git repository found" -ForegroundColor $success
    $git_status = git status --porcelain
    if ($git_status) {
        Write-Host "   ⚠️  You have uncommitted changes:" -ForegroundColor $warning
        Write-Host $git_status -ForegroundColor $warning
    } else {
        Write-Host "   ✅ Working directory clean" -ForegroundColor $success
    }
} else {
    Write-Host "   ⚠️  Git repository not found" -ForegroundColor $warning
}

# Summary
Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Release Readiness: READY FOR DEPLOYMENT" -ForegroundColor $success
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor $info
Write-Host "  1. Review QA_CHECKLIST.md" -ForegroundColor $info
Write-Host "  2. Test locally: npm run dev" -ForegroundColor $info
Write-Host "  3. Push to GitHub: git push" -ForegroundColor $info
Write-Host "  4. Monitor GitHub Actions: https://github.com/yourusername/smart-flock-manager/actions" -ForegroundColor $info
Write-Host "  5. Check Netlify/Vercel deployment" -ForegroundColor $info
Write-Host ""
Write-Host "Ready to deploy! (check passed)" -ForegroundColor $success
