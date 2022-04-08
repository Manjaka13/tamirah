import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const albumList = [
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		location: "Antsirabe",
		date: "09/06/2021",
	},
];

const mappedAlbums = albumList.map((album) => (
	<li
		className="albums__item br-10 o-h tr-200 bg-white f-c-st-en"
		style={{
			background: `url(${album.image}) center center no-repeat`,
			backgroundSize: "cover",
		}}
		key={uuidv4()}
	>
		<p className="w-100 tx-c pd-b-20">
			<button className="button-alt" title="Voir cet album">
				<Icon icon={["fas", "image"]} /> Voir
			</button>
		</p>
		<div className="albums__info w-100">
			<h2 className="fs-100 white pd-10 pd-b-0">{album.title}</h2>
			<p className="fs-80 white pd-10">
				<Icon icon={["fas", "map-marker-alt"]} /> {album.location}
			</p>
			<p className="fs-80 white pd-10 pd-t-0">
				<Icon icon={["fas", "calendar-alt"]} /> {album.date}
			</p>
		</div>
	</li>
));

const Albums = () => (
	<div className="albums">
		<ul className="container albums__list">{mappedAlbums}</ul>
	</div>
);

export default Albums;
