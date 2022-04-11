import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SectionTitle from "./SectionTitle";
import { SECTION } from "helpers/const";

const mappedContent = SECTION.filter((item, key) => key != 0 && key <= 4).map(
	(item) => (
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
	)
);

const WhatWeDo = () => (
	<div className="whatwedo w-100 pd-t-40">
		<div className="container" style={{ flexDirection: "column" }}>
			<SectionTitle title="TAMIRAH Fleur de vie" />
			<p className="tx-j pd-b-20">
				Soyez libre de visionner toutes les sections du site et nous faire un retour
				pour tout avis positif pouvant améliorer notre association. Nous avons
				divers activités sur lesquels nous utilisons les bénéfices pour porter un
				nouveau projet à nour ou encore financer nos prochains évènements.{" "}
				<i className="b">TAMIRAH Fleur de vie</i> est en constante recherche de
				nouveaux membres pour une entraide mutuelle, nous accueillons à bras ouvert
				tout don de votre part pour soutenir notre cause :)
			</p>
			<div className="whatwedo__content w-100">{mappedContent}</div>
		</div>
	</div>
);

export default WhatWeDo;
