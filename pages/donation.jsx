import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Donation from "components/Donation";

/*
	Donations page
*/

const DonationPage = () => (
	<Fragment>
		<Heading
			title="Faire une donation"
			description="Nous avons besoin de votre aide pour bâtir une société modèle et un avenir meilleur pour tous."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation transparent={false} />
			<Donation />
			<Footer />
		</main>
	</Fragment>
);

export default DonationPage;
