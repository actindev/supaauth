#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify the project name:');
  console.error('  npx create-next-supaauth my-app');
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

// Create project directory
if (fs.existsSync(projectDir)) {
  console.error(`Error: Directory ${projectName} already exists. Please choose a different name or delete the existing directory.`);
  process.exit(1);
}

// Create the project
console.log(`Creating a new Next.js app with Supabase authentication in ${projectName}...`);

try {
  // Create project directory
  fs.mkdirSync(projectDir, { recursive: true });
  
  // Change to project directory
  process.chdir(projectDir);
  
  // Copy template files from the package
  console.log('Setting up Supabase authentication...');
  const templateDir = path.join(__dirname, '..', 'template');
  if (fs.existsSync(templateDir)) {
    fs.cpSync(templateDir, projectDir, { recursive: true, force: true });
  } else {
    throw new Error('Template directory not found. This is likely an issue with the package installation.');
  }

  // Note about environment setup
  console.log('Environment setup...');
  if (fs.existsSync(path.join(projectDir, '.env.example'))) {
    console.log('An .env.example file is available in your project. You will need to create your own .env.local file based on this example.');
  } else {
    console.warn('Warning: .env.example file not found. You will need to create your own .env.local file.');
  }

  // Install dependencies from the template package.json
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('');
  console.log('🎉 Success! Your Next.js app with Supabase authentication is ready.');
  console.log('');
  console.log('Next steps:');
  console.log(`1. cd ${projectName}`);
  console.log('2. Create a .env.local file based on .env.example and add your Supabase credentials');
  console.log('3. npm run dev');
  console.log('');
  console.log('Happy coding! 🚀');
} catch (error) {
  console.error('An error occurred:', error);
  process.exit(1);
} 