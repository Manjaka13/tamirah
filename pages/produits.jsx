import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Produits from "components/Produits";

/*
	Produits page list
*/

const ProduitsPage = () => (
	<Fragment>
		<Heading
			title="Les produits TAMIRAH"
			description="Découvrez nos différents produits à base d'ingrédients BIOs et frais."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation transparent={false} />
			<Produits />
			<Footer />
		</main>
	</Fragment>
);

export default ProduitsPage;
