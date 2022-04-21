import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/images/marker-shadow.png";

/*
	Singer location in leaflet map
*/

const zoom = 15;
const position = [-18.8791902, 47.5079055];

const TamirahMap = () => (
	<MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
		<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		<Marker position={position}>
			<Popup>Le siège de notre association !</Popup>
		</Marker>
	</MapContainer>
);

export default TamirahMap;
