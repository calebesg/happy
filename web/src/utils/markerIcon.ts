import Leaflet from 'leaflet';

import markerImg from '../images/marker.svg';

const markerIcon = Leaflet.icon({
  iconUrl: markerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],

  popupAnchor: [170, 2]
});

export default markerIcon;
