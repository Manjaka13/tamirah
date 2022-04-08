import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SectionTitle from "./SectionTitle";
import { SECTION } from "helpers/const";

const mappedContent = SECTION.filter(
	(item, key) => key != 0 && key != SECTION.length - 1
).map((item) => (
	<div
		className="whatwedo__item o-h"
		key={uuidv4()}
		style={{
			background: `url(/images/aide-pour-les-demunis.jpg) center center no-repeat`,
			backgroundSize: "cover",
		}}
	>
		<Link href={item.link} passHref>
			<a className="link p w-100 h-100 white fs-300 o-h" title={item.title}>
				<p className="text white fs-200 w-100 h-100 f-r-ce-ce tr-200">
					<Icon className="mg-r-5" icon={item.icon} /> {item.name}
				</p>
				<div className="underline bg-t tr-500 br-5"></div>
			</a>
		</Link>
	</div>
));

const WhatWeDo = () => (
	<div className="whatwedo w-100 pd-t-40">
		<div className="container" style={{ flexDirection: "column" }}>
			<SectionTitle title="Que faisons-nous" />
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
			<div className="whatwedo__content w-100">{mappedContent}</div>
		</div>
	</div>
);

export default WhatWeDo;
