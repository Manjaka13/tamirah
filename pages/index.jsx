import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Cover from "components/Cover";
import WhatWeDo from "components/WhatWeDo";
import Goals from "components/Goals";
import MobileApp from "components/MobileApp";

/*
	Home page
*/

const HomePage = () => (
	<Fragment>
		<Heading
			title="Tamirah - Fleur de vie"
			description="Nous sommes une association caritative qui oeuvre pour aider les plus démunis."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation />
			<Cover />
			<WhatWeDo />
			<Goals />
			<MobileApp />
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
