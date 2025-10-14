'use client';

/**
 * Interactive Map Component
 * Google Maps integration for office location
 */
import React, { useEffect, useRef } from 'react';

interface MapProps {
  address: string;
  className?: string;
  height?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const Map: React.FC<MapProps> = ({ 
  address, 
  className = '', 
  height = '400px' 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if API key is configured
      if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === 'your_google_maps_api_key_here') {
        console.warn('Google Maps API key not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local');
        return;
      }

      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      // Set up callback
      window.initMap = initializeMap;
      script.onload = initializeMap;
      
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // Geocode the address
      const geocoder = new window.google.maps.Geocoder();
      
      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          
          // Create map
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 15,
            center: location,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
              },
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#c9b2a6' }, { lightness: 17 }, { weight: 1.2 }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [{ color: '#ffffff' }, { lightness: 17 }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }, { lightness: 18 }]
              },
              {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }, { lightness: 16 }]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
              }
            ],
            mapTypeControl: false,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
          });

          // Create custom marker
          const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'IZY Global Services LLC',
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: '#1e40af', // primary-700
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
            }
          });

          // Create info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #1e40af; font-size: 16px; font-weight: 600;">
                  IZY Global Services LLC
                </h3>
                <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">
                  ${address}
                </p>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  Strategic Business Consulting & Transformation
                </p>
              </div>
            `
          });

          // Show info window on marker click
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          mapInstanceRef.current = map;
        } else {
          console.error('Geocoding failed:', status);
          // Fallback to default Houston coordinates
          const defaultLocation = { lat: 29.7604, lng: -95.3698 };
          
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 10,
            center: defaultLocation,
            mapTypeControl: false,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
          });

          mapInstanceRef.current = map;
        }
      });
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, [address]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div 
        ref={mapRef} 
        style={{ height, width: '100%' }}
        className="bg-gradient-to-br from-neutral-100 to-neutral-200"
      />
      
      {/* Loading/Fallback overlay */}
      {!mapInstanceRef.current && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
          <div className="text-center max-w-md px-6">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Interactive Map</h3>
            {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === 'your_google_maps_api_key_here' ? (
              <div className="bg-white rounded-lg p-4 border border-neutral-300">
                <p className="text-sm text-neutral-700 mb-2 font-medium">Office Location:</p>
                <p className="text-sm text-neutral-600">{address}</p>
                <p className="text-xs text-neutral-500 mt-2">
                  See GOOGLE_MAPS_SETUP.md for configuration instructions
                </p>
              </div>
            ) : (
              <p className="text-neutral-600">Loading map...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;