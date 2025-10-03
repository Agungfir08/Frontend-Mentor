import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import LocationIcon from '../assets/icon-location.svg';
import { useEffect } from 'react';

interface MapProps {
    lat: number;
    lng: number;
}

const MapEffect = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(position, map.getZoom());
    }, [position, map]);
    return null;
};

const customIcon = new L.Icon({
    iconUrl: LocationIcon,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
});

function Map({ lat, lng }: MapProps) {
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={15}
            zoomControl={false}
            scrollWheelZoom={false}
            className="h-dvh md:h-[calc(100vh-280px)] relative z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ppmErtppeAYJSRybg2pv"
            />
            <Marker position={[lat, lng]} icon={customIcon}></Marker>
            <MapEffect position={[lat, lng]} />
        </MapContainer>
    );
}

export default Map;
