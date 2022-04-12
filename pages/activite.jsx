import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Activite from "components/Activite";
import CoverActivite from "components/CoverActivite";

/*
	Activité page
*/

const ActivitePage = () => (
	<Fragment>
		<Heading
			title="Activités chez TAMIRAH Fleur de vie"
			description="Nous organisons plusieurs évènements et activités pour apporter de l'aide à tout le monde."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation transparent={false} />
			<CoverActivite />
			<Activite />
			<Footer />
		</main>
	</Fragment>
);

export default ActivitePage;
