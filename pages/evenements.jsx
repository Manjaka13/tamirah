import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Events from "components/Events";

/*
	Home page
*/

const EventPage = () => (
	<Fragment>
		<Heading
			title="Les évènements chez TAMIRAH Fleur de vie"
			description="Nous organisons plusieurs évènements et activités pour apporter de l'aide à tout le monde."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation transparent={false} />
			<Events />
			<Footer />
		</main>
	</Fragment>
);

export default EventPage;
