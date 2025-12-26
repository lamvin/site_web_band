# Script to fix git branch and push to GitHub
Write-Host "Adding all files..."
git add .

Write-Host "Committing changes..."
git commit -m "Final version for deployment"

Write-Host "Renaming branch to main..."
git branch -m master main

Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done! If prompted for credentials, please enter them."
