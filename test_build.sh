#!/bin/bash

echo "Testing Jekyll build..."
echo "========================"

# Install dependencies
echo "Installing Ruby dependencies..."
bundle install

# Build the site
echo "Building the site..."
JEKYLL_ENV=production bundle exec jekyll build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "Your site is ready to be deployed to GitHub Pages."
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Optional: serve the site locally
read -p "Do you want to serve the site locally? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Serving site at http://localhost:4000"
    bundle exec jekyll serve
fi 