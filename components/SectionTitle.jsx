import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Title component for each section
*/

const defaultIcon = ["fas", "heart"];

const SectionTitle = ({ title = "Title", icon = defaultIcon }) => (
	<div className="section-title f-r-st-ce pd-b-20">
		<div className="section-title__line br-5 w-5px h-40px bg-t mg-r-20"></div>
		<h2 className="title fs-240 f-r-st-ce">
			<div className="section-title__icon t mg-r-10">
				<Icon icon={icon} />
			</div>
			{title}
		</h2>
	</div>
);

export default SectionTitle;
