# Google Maps API Setup

To enable the interactive map on the contact page, you need to set up a Google Maps API key.

## Steps to Setup Google Maps API

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Create a new project or select an existing one

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Enable the following APIs:
     - Maps JavaScript API
     - Geocoding API

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

5. **Restrict API Key (Recommended)**
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain(s):
     - `localhost:3000/*` (for development)
     - `yourdomain.com/*` (for production)
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API" and "Geocoding API"

6. **Update Environment Variable**
   - Open `.env.local` file
   - Replace `your_google_maps_api_key_here` with your actual API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

7. **Restart Development Server**
   - Stop your development server (Ctrl+C)
   - Run `npm run dev` again

## Current Map Configuration

The map is configured to show:
- **Address**: 12411 King Olaf Dr, Houston, TX 77044
- **Zoom Level**: 15 (street level)
- **Custom Styling**: Professional business theme
- **Interactive Features**: 
  - Zoom controls
  - Street view
  - Fullscreen mode
  - Custom marker with company info

## Troubleshooting

- **Map not loading**: Check that your API key is correct and the APIs are enabled
- **"For development purposes only" watermark**: Your API key needs billing enabled in Google Cloud Console
- **Geocoding errors**: Ensure the Geocoding API is enabled and your key has access to it

## Cost Considerations

- Google Maps offers a generous free tier
- Monitor usage in Google Cloud Console
- Set up billing alerts to avoid unexpected charges