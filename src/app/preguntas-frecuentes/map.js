import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  useEffect(() => {
    const map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mapita',
      maxZoom: 18,
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: 'location-dot-solid.svg',
      iconSize: [10, 10],
      iconAnchor: [10, 10],
      popupAnchor: [-3, -76],
  });

    function buscarLocalizacion(e) {
      L.marker(e.latlng).addTo(map);
    }

  function errorLocalizacion(e) {
    alert("No es posible encontrar su ubicación. Es posible que tenga que activar la geolocalización.");
  }

    const marker1 = L.marker([-34.6011371, -58.3726603], {icon: myIcon}).addTo(map);
    const marker2 = L.marker([-34.582208, -58.402466], {icon: myIcon}).addTo(map);
    const marker3 = L.marker([-34.584394, -58.578618], {icon: myIcon}).addTo(map);
    const marker4 = L.marker([-34.649641, -58.617490], {icon: myIcon}).addTo(map);

    map.on('locationerror', errorLocalizacion);
	  map.on('locationfound', buscarLocalizacion);
    map.locate({setView: true, maxZoom:12});

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
}

export default Map;