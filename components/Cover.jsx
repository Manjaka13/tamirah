import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";

/*
    Home page cover
*/

const boxInfo = [
	{
		title: "Que faisons-nous ?",
		description:
			"Nos activités diverses nous mettent sur plusieurs front, telles que le reboisement des forêts ou oeuvrer pour aider les plus démunis.",
		icon: ["fas", "handshake"],
		link: "/evenements",
		image: "/images/tamirah.jpg",
	},
	{
		title: "Les produits TAMIRAH",
		description:
			"Nous produisons nous même des produits bio fait-main telles que des confitures ou encore du miel, de l'huile de soin capillaire...",
		icon: ["fas", "gears"],
		link: "/activites",
		image: "/images/content/277593361_544645320407373_6761982258435821282_n.jpg",
	},
	{
		title: "Nous aider ?",
		description:
			"Nous sommes ouverts à de nouveaux membres pour nous aider ou des financement pour nos projets n'hésitez pas à nous contacter !",
		icon: ["fas", "hand-holding-dollar"],
		link: "#donations",
		image: "/images/content/277924603_1455464788242174_1179110489694652073_n.jpg",
	},
];

const mappedBoxInfo = boxInfo.map((info, key) => (
	<article className="cover__info w-100 h-100 n-s each-slide" key={uuidv4()}>
		<h3 className="cover__info-title white pd-20 p-n">
			<Icon icon={info.icon} /> {info.title}
		</h3>
		<div className="cover__info-separator mg-l-20 p-n"></div>
		<p className="cover__info-description tx-j white pd-20 p-n">
			{info.description}
		</p>
		<img
			className="cover__info-image mg-l-20 br-10 p-n"
			src={info.image}
			alt={info.title}
		/>
		<p className="tx-c">
			{boxInfo.map((inf, k) =>
				k === key ? (
					<Icon className="white mg-r-5 mg-l-5" icon={["fas", "dot-circle"]} />
				) : (
					<Icon className="white mg-r-5 mg-l-5" icon={["fas", "circle"]} />
				)
			)}
		</p>
	</article>
));

const Cover = () => (
	<div className="cover w-100 h-100 o-h">
		<div className="cover__overlay w-100 h-100">
			<div
				className="container cover__content"
				style={{ flexDirection: "column" }}
			>
				<div className="w-100 h-80 f-r-st-ce">
					<h2 className="cover__title white fs-430">
						Aider c&apos;est pas vouloir maîtriser mais{" "}
						<span className="t">servir.</span>
					</h2>
					<div className="cover__activities w-35 h-100 f-c-en-ce">
						<div className="cover__box br-10 o-h">
							<Slide easing="ease">{mappedBoxInfo}</Slide>
						</div>
					</div>
				</div>
				<p className="w-100 h-20 f-c-ce-ce">
					<button
						className="cover__discover fs-130 b pd-20 pd-t-10 pd-b-10 br-5 white bg-t tr-200 p mg-b-10"
						title="Découvrir notre association."
					>
						Découvrir
					</button>
					<p className="w-30px h-30px br-r bg-t white f-r-ce-ce">
						<Icon icon={["fas", "caret-down"]} />
					</p>
				</p>
			</div>
		</div>
	</div>
);

export default Cover;
