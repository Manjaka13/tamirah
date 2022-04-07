import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { HARI } from "helpers/const";

/*
	Bottom copyright section
*/

const Copyright = () => (
	<footer className="copyright f-r-ce-ce bg-t pd-t-10 pd-b-10">
		<p className="white pd-r-5">
			Fait avec <Icon className="red" icon={["fas", "heart"]} /> par{" "}
			<a className="green b" href={HARI.link} title="Voir le profil">
				{HARI.name}
			</a>{" "}
			.
		</p>
		<p className="white pd-l-5">
			Copyright © {new Date().getFullYear()} Tamirah, tous droits réservés.
		</p>
	</footer>
);

export default Copyright;
