import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Copyright from "components/Footer/Copyright";
import FooterTitle from "components/Footer/FooterTitle";
import { CONTACTS } from "helpers/const";
import Spinner from "components/Spinner";
import dynamic from "next/dynamic";

/*
	Footer wrapperf
*/

/**Render the map on client side only */
const TamirahMap = dynamic(() => import("components/Footer/TamirahMap"), {
	ssr: false,
});

const mappedContacts = CONTACTS.map((contact) => (
	<li key={uuidv4()}>
		{contact.link && (
			<a className="link tr-200" href={contact.link} title="Voir">
				<Icon icon={contact.icon} /> {contact.content}
			</a>
		)}
		{!contact.link && (
			<Fragment>
				<Icon icon={contact.icon} /> {contact.content}
			</Fragment>
		)}
	</li>
));

const Footer = () => {
	const [loading, setLoading] = useState(false);
	const [submited, setSubmited] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const form = new FormData();
		form.append("");
		setTimeout(() => {
			setLoading(false);
			setSubmited(true);
		}, 1000);
	};

	return (
		<Fragment>
			<div className="footer bg-white">
				<div className="container">
					<div className="footer__content w-100 h-320px pd-b-20">
						{/* Map */}
						<div className="footer__item">
							<FooterTitle title="Localisation" icon={["fas", "map-marker-alt"]} />
							<div className="footer__box map br-5 o-h w-100 b-b">
								<TamirahMap />
							</div>
						</div>
						{/* Contacts */}
						<div id="contacts" className="footer__item">
							<FooterTitle title="Nous contacter" icon={["fas", "envelope"]} />
							<ul className="footer__box footer__contact-list f-c-st-be">
								{mappedContacts}
							</ul>
						</div>
						{/* Donations */}
						<div id="newsletter" className="footer__item">
							<FooterTitle title="Newsletter" icon={["fas", "newspaper"]} />
							<p className="pd-b-20 tx-j">
								Contactez-nous directement pour toute donation, nous vous en serions
								??ternellement reconnaissant.
							</p>
							<div className="footer__box footer__donation">
								<p className="tx-j">
									Inscrivez-vous ?? notre newsletter pour ne jamais rater nos nouveaux
									produits et futurs ??v??nements !
								</p>
								{!loading && !submited && (
									<form
										action="https://formsubmit.co/tamirahfleurdevie@gmail.com"
										method="POST"
										className="f-r-st-ce mg-t-20 b-b"
									>
										<input
											className="input"
											type="email"
											name="email"
											placeholder="Votre e-mail"
											required
										/>
										<input
											type="hidden"
											name="_subject"
											value="Nouveau abonn??, l'e-mail y sera attach??!"
										/>
										<input type="hidden" name="_captcha" value="false" />
										<input type="text" name="_honey" style={{ display: "none" }} />
										<input
											type="hidden"
											name="message"
											value="Un nouveau abonn?? a souscrit ?? votre newsLetter!"
										/>
										<button
											className="button"
											type="submit"
											onSubmit={() => handleSubmit()}
										>
											<Icon className="icon" icon={["fas", "envelope"]} /> Souscrire
										</button>
									</form>
								)}
								{loading && <Spinner className="mg-t-20" />}
								{submited && (
									<p className="b green pd-t-20">Votre e-mail a ??t?? enregistr?? !</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Copyright />
		</Fragment>
	);
};

export default Footer;
