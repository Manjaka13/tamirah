import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const Donation = () => (
	<div id="donation" className="donation">
		<div className="container">
			<h2 className="donation__title pd-b-20 fs-300">
				<Icon icon={["fas", "handshake"]} /> Comment nous aider ?
			</h2>
			<div className="w-35 h-5px br-5 bg-t mg-b-20"></div>
			<div className="donation__box f-r-be-ce w-100">
				<img
					className="donation__logo h-350px mg-r-40"
					src="/images/tamirah-fleur-de-vie.png"
					alt="TAMIRAH Fleur de vie"
				/>
				<div className="donation__box">
					<h3 className="fs-160 pd-b-20 t">Faire un don :)</h3>
					<p className="tx-j pd-b-20">
						<i className="b">TAMIRAH Fleur de vie</i> est une organisation à but non
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
							<h4 className="tx-c mg-b-10">Par Orange Money au:</h4>
							<p className="tx-c mg-b-10 t">+261 32 05 183 08</p>
							<img
								className="donation__image w-200px"
								src="/images/orange-money.jpg"
								alt="Donation Orange Money TAMIRAH"
							/>
						</li>
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="tx-c mg-b-10">Par Airtel Money au:</h4>
							<p className="tx-c mg-b-10 t">+261 33 90 183 08</p>
							<img
								className="donation__image w-200px"
								src="/images/airtel-money.jpg"
								alt="Donation Airtel Money TAMIRAH"
							/>
						</li>
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="tx-c mg-b-10">Par MVola au:</h4>
							<p className="tx-c mg-b-10 t">+261 34 07 183 08</p>
							<img
								className="donation__image w-200px"
								src="/images/mvola.jpg"
								alt="Donation MVola TAMIRAH"
							/>
						</li>
						<li className="donation__item pd-20 bg-white br-10">
							<h4 className="tx-c mg-b-10">Par virement au:</h4>
							<p className="tx-c mg-b-10 t">00015 00011 06875100001 72</p>
							<img
								className="donation__image w-200px"
								src="/images/sipem.jpg"
								alt="Donation virement bancaire TAMIRAH"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Donation;
