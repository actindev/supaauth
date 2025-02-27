#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Get the version
const version = packageJson.version;

// Create the version file content
const versionFileContent = `// This file is auto-generated. Do not edit directly.
// Generated on ${new Date().toISOString()}
export const APP_VERSION = '${version}';
`;

// Write to the version file
const versionFilePath = path.join(__dirname, '..', 'src', 'lib', 'version.ts');
fs.writeFileSync(versionFilePath, versionFileContent);

console.log(`Updated version file to version ${version}`); 