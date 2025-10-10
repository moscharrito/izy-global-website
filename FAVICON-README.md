# Favicon Setup for Izy Global Services

This document explains the favicon implementation for the Izy Global Services website.

## Files Created

### 1. SVG Favicon (`/public/favicon.svg`)
- Modern SVG favicon with the "IZY" logo
- Uses company brand colors (Navy Blue #1e3a5f, Red #c41230, Gold #ffc107)
- Scalable and crisp on all devices
- Includes gradient background and accent elements

### 2. Favicon Generation Script (`/scripts/generate-favicon.js`)
- Node.js script to generate PNG and ICO files from the SVG
- Requires `sharp` package for image processing
- Generates multiple sizes: 16x16, 32x32, 180x180, and ICO format

### 3. Web App Manifest (`/public/site.webmanifest`)
- PWA manifest file for mobile app-like experience
- Defines app name, colors, and icon references
- Enables "Add to Home Screen" functionality

### 4. Layout Integration (`/src/app/layout.tsx`)
- Added favicon metadata to Next.js layout
- Includes all favicon formats and sizes
- Sets theme color for mobile browsers

## How to Generate Favicon Files

Since binary files cannot be created directly, follow these steps:

### Option 1: Use the Generation Script
```bash
# Install dependencies
npm install sharp

# Run the generation script
node scripts/generate-favicon.js
```

### Option 2: Manual Generation
1. Open `/public/favicon.svg` in a graphics editor or online converter
2. Export/convert to the following formats:
   - `favicon-16x16.png` (16x16 pixels)
   - `favicon-32x32.png` (32x32 pixels)
   - `apple-touch-icon.png` (180x180 pixels)
   - `favicon.ico` (32x32 pixels, ICO format)

### Option 3: Online Favicon Generators
1. Use the SVG content from `/public/favicon.svg`
2. Upload to online favicon generators like:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - https://www.favicon-generator.org/
3. Download and place the generated files in `/public/`

## Browser Support

The current implementation supports:
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge) - SVG favicon
- ✅ Older browsers - PNG fallbacks
- ✅ Apple devices - Apple Touch Icon
- ✅ PWA/Mobile - Web App Manifest
- ✅ Windows tiles - Theme color metadata

## Favicon Design

The favicon features:
- **Background**: Gradient from Navy Blue to Red (company colors)
- **Text**: "IZY" in bold white letters
- **Accent**: Small gold circle for brand recognition
- **Border**: Subtle gold gradient border
- **Shape**: Rounded rectangle (8px border radius)

## Testing

To test the favicon implementation:
1. Build and run the website
2. Check browser tab for the favicon
3. Test on mobile devices
4. Verify "Add to Home Screen" functionality
5. Check different browser zoom levels

## Maintenance

- The SVG favicon is the master file
- Update the SVG when brand colors or logo change
- Regenerate PNG/ICO files after SVG updates
- Test across different devices and browsers after changes