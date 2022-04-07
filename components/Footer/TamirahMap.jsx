import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/images/marker-shadow.png";

/*
	Singer location in leaflet map
*/

const zoom = 15;
const position = [48.08930332178957, -1.6213132083998467];

const TamirahMap = () => (
	<MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
		<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		<Marker position={position}>
			<Popup>Notre magasin se trouve ici !</Popup>
		</Marker>
	</MapContainer>
);

export default TamirahMap;
