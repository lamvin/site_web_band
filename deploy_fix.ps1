# Script to fix git branch and push to GitHub (Robust Version)

# 1. Add Remote if missing
Write-Host "Configuring remote 'origin'..."
if ($(git remote get-url origin 2>$null) -eq $null) {
    git remote add origin https://github.com/lamvin/site_web_band.git
    Write-Host "Remote 'origin' added."
} else {
    Write-Host "Remote 'origin' already exists."
}

# 2. Ensure we are on main
Write-Host "Ensuring branch is 'main'..."
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    git branch -m main
    Write-Host "Renamed branch to 'main'."
}

# 3. Add and Commit any remaining changes
Write-Host "Checking for uncommitted changes..."
git add .
git commit -m "Fix layout params type for Next.js build"

# 4. Push
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done! You can verify your code at https://github.com/lamvin/site_web_band"
