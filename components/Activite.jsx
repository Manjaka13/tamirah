import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const activiteList = [
	{
		title: "Reboisement",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous avons apporté notre aide pour le reboisement de plusieurs forêts sur-exploités par la population pour du charbon et ainsi restaurer la faune et la flore locale.",
		location: "Ambano",
		date: "12/10/2021",
		link: "htts://www.facebook.com/",
	},
	{
		title: "Miel BIO",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous produisons nous-même du miel bio fait maison, grâce aux fonds que nous récoltons à travers cette activité nous pouvons contribuer à aider plusieurs sans-abris.",
		location: "Antsirabe",
		link: "htts://www.facebook.com/",
	},
	{
		title: "Soutien aux femmes",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous apportons un soutien particulier aux femmes surtout avec l'organisation du 8 Mars sous le haut patronnage de la première dame de Madagascar.",
	},
	{
		title: "Confitures TAMIRAH",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous vendons plusieurs parfums de confiture que nous confectionnons manuellement dans nos ateliers avec des ingrédients frais et totalement garantis BIO.",
		location: "Antsirabe",
		link: "htts://www.facebook.com/",
	},
];

const mappedActivite = activiteList.map((activite) => (
	<article
		className="activite__item w-100 br-10 o-h bg-white f-r-st-st tr-200"
		key={uuidv4()}
	>
		<div className="representation h-100">
			<ul className="actions h-80 o-h f-c-st-ev">
				<li className="action-item tx-c">
					<Link href="/donations" passHref>
						<a className="link t fs-260 tr-200" title="Soutenir cette cause">
							<Icon icon={["fas", "hand-holding-dollar"]} />
						</a>
					</Link>
				</li>
				{activite.location && (
					<li className="action-item tx-c">
						<a className="link t fs-260 tr-200" href="#0" title="Voir le lieu">
							<Icon icon={["fas", "map-marker-alt"]} />
						</a>
					</li>
				)}
				<li className="action-item tx-c">
					<a className="link t fs-260 tr-200" href="#0" title="Voir les images">
						<Icon icon={["fas", "image"]} />
					</a>
				</li>
			</ul>
			<div
				className="image w-100 h-100 tr-500"
				style={{
					background: `url(${activite.image}) center center no-repeat`,
					backgroundSize: "cover",
				}}
			>
				{(activite.location || activite.date) && (
					<div className="info f-c-be-st br-10">
						{activite.location && (
							<p className="white mg-b-5 fs-80">
								<Icon icon={["fas", "map-marker-alt"]} /> {activite.location}
							</p>
						)}
						{activite.date && (
							<p className="white  fs-80">
								<Icon icon={["fas", "calendar-alt"]} /> {activite.date}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
		<div className="details h-100">
			<h2 className="pd-10 fs-120">{activite.title}</h2>
			<div className="separator"></div>
			<p className="tx-j pd-10 pd-b-20 fs-80">{activite.description}</p>
			{activite.link && (
				<p className="tx-c pd-b-10">
					<a href={activite.link} className="button" title="Voir sur Facebook">
						<Icon icon={["fab", "facebook"]} /> Voir l&apos;article
					</a>
				</p>
			)}
		</div>
	</article>
));

const Activite = () => (
	<div className="activite">
		<div className="container">
			<div className="activite__list pd-b-40">{mappedActivite}</div>
		</div>
	</div>
);

export default Activite;
