import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Cover from "components/Cover";
import WhatWeDo from "components/WhatWeDo";
import Goals from "components/Goals";
import MobileApp from "components/MobileApp";
import Donation from "components/Donation";

/*
	Home page
*/

const HomePage = () => (
	<Fragment>
		<Heading
			title="Tamirah - Fleur de vie"
			description="Nous sommes une association qui oeuvre pour agir, aider, aimer et servir."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation />
			<Cover />
			<WhatWeDo />
			<Goals />
			<MobileApp />
			<Donation />
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
