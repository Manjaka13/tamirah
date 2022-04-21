import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ALBUM_LIST } from "helpers/const";

let mappedAlbums = [];

for(let k in ALBUM_LIST) {
	mappedAlbums.push(
		<li
			className="albums__item br-10 o-h tr-200 bg-white f-c-st-en"
			style={{
				background: `url("/images/${k}/${ALBUM_LIST[k][0]}") center center no-repeat`,
				backgroundSize: "cover",
			}}
			key={uuidv4()}
		>
			<div className="albums__info w-100 tr-200">
				<h2 className="fs-100 white pd-10">{k}</h2>
				<p className="w-100 tx-c pd-b-20">
					<Link href={`/album/${k}`} passHref>
						<a className="button-alt" title="Voir cet album">
							<Icon icon={["fas", "image"]} /> Voir
						</a>
					</Link>
				</p>
			</div>
		</li>
	);
}

const Albums = () => (
	<div className="albums">
		<ul className="container albums__list">{mappedAlbums}</ul>
	</div>
);

export default Albums;
