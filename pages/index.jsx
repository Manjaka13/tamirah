import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Cover from "components/Cover";
import About from "components/About";

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
			<About />
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
