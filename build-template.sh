#!/bin/bash

# Clear out any old dist folder
rm -rf dist
mkdir -p dist/template

# Copy all relevant files to dist/template
rsync -av --exclude='node_modules' --exclude='.git' --exclude='.next' \
          --exclude='dist' --exclude='.gitignore' ./ dist/template/

# Create a package.json for the npm package
cat <<EOF > dist/package.json
{
  "name": "create-next-supaauth",
  "version": "$(node -p "require('./package.json').version")",
  "description": "A Next.js template synced with my GitHub repo",
  "repository": "https://github.com/Gitmaxd/create-next-supaauth",
  "license": "MIT"
}
EOF