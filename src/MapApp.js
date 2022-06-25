import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


export default function MapApp({ lat, lon, title }) {

    const position = [lat, lon]

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{width: '100%', height: '500px'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {title.replace('%20', ' ')}
                </Popup>
            </Marker>
        </MapContainer>
    );
}
