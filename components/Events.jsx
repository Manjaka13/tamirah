import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const eventList = [
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra.",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra.",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra.",
		location: "Antsirabe",
		date: "09/06/2021",
	},
	{
		title: "Reboisement à Ambano",
		image: "/images/aide-pour-les-demunis.jpg",
		description:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra.",
		location: "Antsirabe",
		date: "09/06/2021",
	},
];

const mappedEvents = eventList.map((event) => (
	<article
		className="events__item w-100 br-10 o-h bg-white f-r-st-st tr-200"
		key={uuidv4()}
	>
		<div className="representation h-100">
			<ul className="actions h-80 o-h f-c-st-be">
				<li className="action-item tx-c">
					<a className="link t fs-260 tr-200" href="#0" title="Soutenir cette cause">
						<Icon icon={["fas", "hand-holding-dollar"]} />
					</a>
				</li>
				<li className="action-item tx-c">
					<a className="link t fs-260 tr-200" href="#0" title="Voir le lieu">
						<Icon icon={["fas", "map-marker-alt"]} />
					</a>
				</li>
				<li className="action-item tx-c">
					<a className="link t fs-260 tr-200" href="#0" title="Voir les images">
						<Icon icon={["fas", "image"]} />
					</a>
				</li>
			</ul>
			<div
				className="image w-100 h-100 tr-500"
				style={{
					background: `url(${event.image}) center center no-repeat`,
					backgroundSize: "cover",
				}}
			>
				<div className="info f-c-be-st br-10">
					<p className="white mg-b-5 fs-80">
						<Icon icon={["fas", "map-marker-alt"]} /> {event.location}
					</p>
					<p className="white  fs-80">
						<Icon icon={["fas", "calendar-alt"]} /> {event.date}
					</p>
				</div>
			</div>
		</div>
		<div className="details h-100">
			<h2 className="pd-10 fs-120">{event.title}</h2>
			<div className="separator"></div>
			<p className="tx-j pd-10 pd-b-20 fs-80">{event.description}</p>
			<p className="tx-c pd-b-10">
				<button className="button">
					<Icon icon={["fab", "facebook"]} /> Voir l&apos;article
				</button>
			</p>
		</div>
	</article>
));

const Events = () => (
	<div className="events">
		<div className="container">
			<div className="events__list pd-b-40">{mappedEvents}</div>
		</div>
	</div>
);

export default Events;
