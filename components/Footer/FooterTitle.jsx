import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Footer title component
*/

const defaultIcon = ["fas", "heart"];

const FooterTitle = ({ title = "Footer title", icon = defaultIcon }) => (
	<div className="pd-t-20 pd-b-20">
		<h2 className="footer__title fs-170 pd-b-20">
			<Icon icon={icon} /> {title}
		</h2>
		<div className="w-130px h-5px br-5 bg-t"></div>
	</div>
);

export default FooterTitle;
