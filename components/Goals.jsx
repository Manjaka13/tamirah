import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SectionTitle from "./SectionTitle";

const goalList = [
	{
		icon: ["fas", "handshake"],
		title: "Entraide mutuelle",
		description:
			"Nous nous entraidons tous pour créer un futur meilleur pour tout le monde, quel que soit le secteur d'activité. Ainsi, chaque petit effort compte.",
	},
	{
		icon: ["fas", "tree"],
		title: "Label bas carbone",
		description:
			"Nous avons foi en un monde avec moins d'émissions de gaz à effet de serre en reboisant plusieurs forêts pour conserver notre climat.",
	},
	{
		icon: ["fas", "store"],
		title: "Vente de produits",
		description:
			"Nous avons  plusieurs activités telles que la vente de miel bio, de confiture ou encore d'huile de soin capillaire pour soutenir notre cause.",
	},
	{
		icon: ["fas", "star"],
		title: "Financement",
		description:
			"Plus TAMIRAH Fleur de vie aura de soutien plus nous pourrons nous étendre et nous mettre sur de nouveaux fronts grâce à vos dons :)",
	},
];

const mappedGoalList = goalList.map((goal) => (
	<div className="goals__item br-10 o-h bg-white p tr-200" key={uuidv4()}>
		<p className="goals__icon-box f-c-ce-ce fs-300 br-r white bg-t tr-200">
			<Icon icon={goal.icon} />
		</p>
		<h3 className="tx-c pd-20 pd-b-0">{goal.title}</h3>
		<p className="tx-j pd-20">{goal.description}</p>
	</div>
));

const Goals = () => (
	<div className="goals w-100 pd-t-40">
		<div className="container" style={{ flexDirection: "column" }}>
			<SectionTitle title="Qu'est ce que nous visons ?" icon={["fas", "star"]} />
			<p className="tx-j pd-b-20">
				Nous aspirons à réaliser ensemble plusieurs choses chez{" "}
				<span className="b">TAMIRAH Fleur de vie</span>, nous avons de ce fait
				plusieurs objectifs probants que nous essayons d&apos;atteindre petit à
				petit grâce à vos dons, à l&apos;action de nos membres et une formidable
				cohésion. Tout cela dans le but d&apos;
				<span className="b">aider notre prochain</span>, investir dans un monde
				meilleur pour tous, le <span className="b">meilleur héritage</span> que
				l&apos;on pourra laisser pour nos descendants.
			</p>
			<div className="goals__content w-100">{mappedGoalList}</div>
		</div>
	</div>
);

export default Goals;
