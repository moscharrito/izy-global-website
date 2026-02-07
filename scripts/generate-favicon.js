/**
 * Favicon Generation Script
 * This script can be used to generate favicon files from the SVG
 * 
 * To use this script:
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/generate-favicon.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('Sharp not installed. To generate favicon files, run:');
  console.log('npm install sharp');
  console.log('Then run: node scripts/generate-favicon.js');
  process.exit(0);
}

const svgPath = path.join(__dirname, '../public/favicon.svg');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 180, name: 'apple-touch-icon.png' },
    ];
    
    for (const { size, name } of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`Generated ${name}`);
    }
    
    // Generate ICO file (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('Generated favicon.ico');
    console.log('All favicon files generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

if (require.main === module) {
  generateFavicons();
}

module.exports = generateFavicons;