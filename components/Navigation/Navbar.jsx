import React, { useState, useEffect } from "react";
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

const Navbar = ({
	atClick = () => console.log("Trigger clicked"),
	transparent,
}) => {
	const [opaque, setOpaque] = useState(transparent ? false : true);

	useEffect(() => {
		const listenScroll = () => {
			const scroll = window.scrollY;
			if (transparent) {
				if (scroll < 300) setOpaque(false);
				else setOpaque(true);
			}
		};
		listenScroll();
		document.addEventListener("scroll", listenScroll);
		return () => document.removeEventListener("scroll", listenScroll);
	}, []);

	return (
		<nav
			className={`navbar w-100 f-c-st-st tr-200 ${opaque ? "navbar--opaque" : ""}`}
		>
			<div className="container h-100">
				<div className="w-100 h-100 f-r-be-ce">
					<div className="navbar__title f-r-st-ce">
						<img
							className="image bg-white mg-r-10 w-50px h-50px br-r o-h"
							src="/images/tamirah-fleur-de-vie.png"
							alt="Logo Tamirah Fleur de vie"
						/>
						<div className="f-c-st-st">
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
			<div className="container navbar__underline br-5 bg-white tr-200"></div>
		</nav>
	);
};
export default Navbar;
