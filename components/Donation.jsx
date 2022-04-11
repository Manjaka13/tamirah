import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const Donation = () => (
	<div className="donation">
		<div className="container">
			<h2 className="donation__title pd-b-20 fs-300">
				<Icon icon={["fas", "handshake"]} /> Comment nous aider ?
			</h2>
			<div className="w-35 h-5px br-5 bg-t mg-b-20"></div>
			<div className="f-r-be-st w-100">
				<img
					className="h-350px mg-r-40"
					src="/images/tamirah-fleur-de-vie.png"
					alt="TAMIRAH Fleur de vie"
				/>
				<div className="donation__box">
					<h3 className="fs-160 pd-b-20 t">Faire un don :)</h3>
					<p className="tx-j pd-b-20">
						<i className="b">TAMIRAH Fleur</i> de vie est une organisation à but non
						lucratif, toutefois, nous avons besoin de dons et de financements pour
						pouvoir continuer à soutenir cette noble cause.
					</p>
					<p className="tx-j">
						Ainsi nous requérons votre bonne volonté pour bâtir ensemble un meilleur
						avenir pour tous. Chaque don, chaque aide, aussi petite soit-elle, tous
						ensemble nous en ferons quelque chose de grand qui impactera la société à
						long terme. Déjà un grand merci de la part de toute l&apos;association
						pour vos dons et vos faveurs. Ci dessous pour les détails:
					</p>
					<ul className="donation__list pd-t-20 f-r-be-st">
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="mg-b-10">Par Orange Money au:</h4>
							<p className="mg-b-10 t">+261 32 12 145 99</p>
							<img className="w-200px" src="/images/logo-money.png" alt="Money" />
						</li>
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="mg-b-10">Par Airtel Money au:</h4>
							<p className="mg-b-10 t">+261 33 26 120 00</p>
							<img className="w-200px" src="/images/logo-money.png" alt="Money" />
						</li>
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="mg-b-10">Par MVola au:</h4>
							<p className="mg-b-10 t">+261 34 67 154 30</p>
							<img className="w-200px" src="/images/logo-money.png" alt="Money" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Donation;
