import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../services/api';

import markerIcon from '../utils/markerIcon';
import markerImg from '../images/marker.svg';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string,
};

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Palestina de Goiás</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <Map
        center={[-16.7454333,-51.5305679]}
        zoom={17}
        style={{ width: '100%', height: '100%', zIndex: 2 }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        {orphanages.map(orphanage => {
          return (
            <Marker 
              key={orphanage.id}
              position={[orphanage.latitude, orphanage.longitude]}
              icon={markerIcon}
            >
              <Popup 
                closeButton={false} 
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff"/>
                </Link>
              </Popup>
            </Marker>
          );
        })}

      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
