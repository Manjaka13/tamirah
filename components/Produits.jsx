import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

const produitsList = [
	{
		name: "Miel BIO 1,5 L",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous produisons nous-même du miel bio fait maison, grâce aux fonds que nous récoltons à travers cette activité nous pouvons contribuer à aider plusieurs sans-abris.",
		price: "12 000 Ar",
		album: "/galerie?album=miel-bio",
	},
	{
		name: "Confiture Letchis",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous vendons plusieurs parfums de confiture que nous confectionnons manuellement dans nos ateliers avec des ingrédients frais et totalement garantis BIO.",
		price: "6 000 Ar",
		album: "/galerie?album=confiture-tamirah",
	},
	{
		name: "Confiture Prune",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous vendons plusieurs parfums de confiture que nous confectionnons manuellement dans nos ateliers avec des ingrédients frais et totalement garantis BIO.",
		price: "6 000 Ar",
		album: "/galerie?album=confiture-tamirah",
	},
	{
		name: "Huile de Ricin",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous vendons plusieurs parfums de confiture que nous confectionnons manuellement dans nos ateliers avec des ingrédients frais et totalement garantis BIO.",
		price: "2 000 Ar",
	},
	{
		name: "Menaka Farehitra",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nous vendons plusieurs parfums de confiture que nous confectionnons manuellement dans nos ateliers avec des ingrédients frais et totalement garantis BIO.",
		price: "1 000 Ar",
	},
];

const mappedProduits = produitsList.map((produit) => (
	<article className="produits__item bg-white br-10 o-h" key={uuidv4()}>
		<div
			className="produits__item-bg h-150px f-c-st-en"
			style={{
				background: `url(${produit.image}) center center no-repeat`,
				backgroundSize: "cover",
			}}
		>
			<p className="produits__item-price pd-10 mg-20 lime br-5">{produit.price}</p>
		</div>
		<div className="produits__item-about">
			<h2 className="pd-20 pd-b-0 fs-110">{produit.name}</h2>
			<p className="tx-j pd-20 fs-80">{produit.description}</p>
			{produit.album && (
				<p className="produits__item-photos tx-c tr-500">
					<Link href={produit.album} passHref>
						<a className="button" title="Galerie">
							<Icon icon={["fas", "image"]} /> Voir les photos
						</a>
					</Link>
				</p>
			)}
		</div>
	</article>
));

const Produits = () => (
	<div className="produits">
		<div className="container">
			<div className="produits__list">{mappedProduits}</div>
		</div>
	</div>
);

export default Produits;
