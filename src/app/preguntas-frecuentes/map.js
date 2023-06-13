import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  useEffect(() => {
    const map = L.map('map').setView([-34.603717, -58.468374], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mapita',
      maxZoom: 18,
    }).addTo(map);

    const marker1 = L.marker([-34.6011371, -58.3726603]).addTo(map);
    const marker2 = L.marker([-34.582208, -58.402466]).addTo(map);
    const marker3 = L.marker([-34.584394, -58.578618]).addTo(map);
    const marker4 = L.marker([-34.649641, -58.617490]).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
}

export default Map;