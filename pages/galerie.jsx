import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Albums from "components/Albums";

/*
	Album page list
*/

const GaleriePage = () => (
	<Fragment>
		<Heading
			title="Albums photos de l'association"
			description="Immortaliser nos oeuvres caritatives à travers des photos."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation transparent={false} />
			<Albums />
			<Footer />
		</main>
	</Fragment>
);

export default GaleriePage;
