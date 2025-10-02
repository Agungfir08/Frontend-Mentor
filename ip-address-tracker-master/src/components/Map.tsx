import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LocationIcon from '../assets/icon-location.svg';
interface MapProps {
    lat: number;
    lng: number;
}

const customIcon = new L.Icon({
    iconUrl: LocationIcon,
    iconSize: [50, 60],
});

function Map({ lat, lng }: MapProps) {
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={14}
            scrollWheelZoom={false}
            className="h-[calc(100vh-300px)] md:h-[calc(100vh-280px)] relative z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ppmErtppeAYJSRybg2pv"
            />
            <Marker position={[lat, lng]} icon={customIcon}></Marker>
        </MapContainer>
    );
}

export default Map;
