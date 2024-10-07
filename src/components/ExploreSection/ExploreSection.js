import React from 'react';
import './ExploreSection.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function ExploreSection() {
  const containerStyle = {
    width: '600px',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <div className="explore-section">
      <h2>Let's explore!!</h2>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY_HERE" // Replace with your API key
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Child components like markers go here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default ExploreSection;
