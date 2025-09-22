#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const isDev = process.argv.includes('--dev');
const isProd = process.argv.includes('--prod');

const HTML_FILE = 'index.html';

function updateHTML(useMinified) {
  const htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
  
  let updatedContent;
  if (useMinified) {
    // Switch to minified versions for production
    updatedContent = htmlContent
      .replace(/css\/custom\.css/g, 'css/custom.min.css');
  } else {
    // Switch to non-minified versions for development
    updatedContent = htmlContent
      .replace(/css\/custom\.min\.css/g, 'css/custom.css');
  }
  
  fs.writeFileSync(HTML_FILE, updatedContent);
  console.log(`✅ HTML updated to use ${useMinified ? 'minified' : 'development'} CSS`);
}

function buildCSS(minified = false) {
  const command = minified 
    ? 'npx sass scss/custom.scss css/custom.min.css --style=compressed'
    : 'npx sass scss/custom.scss css/custom.css';
  
  execSync(command, { stdio: 'inherit' });
  console.log(`✅ CSS compiled (${minified ? 'minified' : 'development'})`);
}

function buildJS() {
  execSync('npx terser js/grayscale.js -o js/grayscale.min.js', { stdio: 'inherit' });
  console.log('✅ JS minified');
}

// Main build logic
if (isDev) {
  console.log('🚀 Building for DEVELOPMENT...');
  buildCSS(false);
  updateHTML(false);
  console.log('✨ Development build complete!');
} else if (isProd) {
  console.log('🚀 Building for PRODUCTION...');
  buildCSS(true);
  buildJS();
  updateHTML(true);
  console.log('✨ Production build complete!');
} else {
  console.log('Usage: node build.js --dev OR node build.js --prod');
  process.exit(1);
}
