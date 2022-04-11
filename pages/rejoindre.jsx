import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import HAuth from "components/HAuth";

/*
	Signin/Signup page
*/

const RejoindrePage = () => {
	const router = useRouter();
	let { target } = router.query;
	if (!target) target = "signin";

	return (
		<Fragment>
			<Heading
				title="Connection/Inscription TAMIRAH"
				description="Rejoindre la plateforme TAMIRAH Fleur de vie."
				image="/assets/representation.jpg"
			/>
			<main className="w-100">
				<Navigation transparent={false} />
				<HAuth defaultTab={target} />
			</main>
		</Fragment>
	);
};

export default RejoindrePage;
