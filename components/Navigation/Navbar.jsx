import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { SECTION } from "helpers/const";

/*
	Navigation bar
*/

const mappedSection = SECTION.map((section) => (
	<li
		className="navbar__section-item mg-l-40 pd-t-25 pd-b-25 f-c-ce-st p"
		key={uuidv4()}
	>
		<Link href={section.link} passHref>
			<div>
				<Icon className="white" icon={section.icon} />{" "}
				<a className="navbar__section-link white" title={section.title}>
					{section.name}
				</a>
			</div>
		</Link>
		<div className="navbar__section-underline tr-200 br-5"></div>
	</li>
));

const Navbar = ({ atClick = () => console.log("Trigger clicked") }) => (
	<nav className="navbar bg-t w-100">
		<div className="container h-100">
			<div className="w-100 h-100 f-r-be-ce">
				<div className="navbar__title f-r-st-ce w-50px h-50px br-r bg-white">
					<img
						className="image w-100 mg-r-10"
						src="/images/tamirah-fleur-de-vie.png"
						alt="Logo Tamirah Fleur de vie"
					/>
					<div className="f-c-ce-st">
						<h1 className="title white">TAMIRAH</h1>
						<p className="title white">Fleur de vie</p>
					</div>
				</div>
				<ul className="navbar__section f-r-st-ce">{mappedSection}</ul>
				<div
					className="navbar__trigger w-50px h-50px white br-r f-c-ce-ce fs-150 p tr-200"
					title="Ouvrir le menu."
					onClick={() => atClick()}
				>
					<Icon icon={["fas", "bars"]} />
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;
