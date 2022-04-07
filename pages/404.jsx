import React, { Fragment } from "react";
import Navigation from "components/Navigation/Navigation";
import Heading from "components/Heading";
import NotFound from "components/NotFound";

/*
	404 page
*/

const NotFoundPage = () => (
	<Fragment>
		<Heading
			title="Contenu introuvable"
			description="Le contenu auquel vous voulez accéder est introuvable."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation />
			<NotFound />
		</main>
	</Fragment>
);

export default NotFoundPage;
