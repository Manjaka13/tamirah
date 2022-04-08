import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SectionTitle from "./SectionTitle";

const goalList = [
	{
		icon: ["fas", "star"],
		title: "Lorem ipsum",
		description:
			"Donec id ligula nisl. Donec libero velit, iaculis nec hendrerit sed, dapibus non turpis. Praesent cursus vitae ipsum vel finibus. Aenean a erat erat.",
	},
	{
		icon: ["fas", "star"],
		title: "Lorem ipsum",
		description:
			"Donec id ligula nisl. Donec libero velit, iaculis nec hendrerit sed, dapibus non turpis. Praesent cursus vitae ipsum vel finibus. Aenean a erat erat.",
	},
	{
		icon: ["fas", "star"],
		title: "Lorem ipsum",
		description:
			"Donec id ligula nisl. Donec libero velit, iaculis nec hendrerit sed, dapibus non turpis. Praesent cursus vitae ipsum vel finibus. Aenean a erat erat.",
	},
	{
		icon: ["fas", "star"],
		title: "Lorem ipsum",
		description:
			"Donec id ligula nisl. Donec libero velit, iaculis nec hendrerit sed, dapibus non turpis. Praesent cursus vitae ipsum vel finibus. Aenean a erat erat.",
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
			<SectionTitle title="Quelles sont nos objectifs ?" icon={["fas", "star"]} />
			<p className="tx-j pd-b-20">
				Vestibulum mattis magna non volutpat malesuada. Duis egestas nec sapien quis
				interdum. Duis placerat finibus vulputate. Nam hendrerit erat turpis, ac
				condimentum massa commodo vitae. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Cras vel nibh quam. Maecenas quis imperdiet velit. Fusce
				lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
				porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat dignissim
				scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis
				vitae.
			</p>
			<div className="goals__content w-100">{mappedGoalList}</div>
		</div>
	</div>
);

export default Goals;
