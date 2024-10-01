import styles from './MapContainers.module.css';
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from "react-leaflet";
import { useState } from "react";
import markerDot from '../assets/markerdot.svg'
import { Icon } from 'leaflet'


const MapContainers = () => {
  const myIcon = new Icon({
    iconUrl: markerDot,
    iconSize: [32,32]
   })
   
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    return position === null ? null : (
      <div>
        <Marker position={position} icon ={myIcon} >
          <Popup>
            <p>You are here</p>
          </Popup>
        </Marker>
      </div>
    );
  }
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false} className= {styles.container}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
  );
};

export default MapContainers;
