import React, { Fragment } from "react";
// import { useRouter } from "next/router";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
// import HAuth from "components/HAuth";
import Signin from "components/Account/Signin";

/*
	Signin/Signup page
*/

const RejoindrePage = () => {
	// const router = useRouter();
	// let { target } = router.query;
	// if (!target) target = "signin";

	return (
		<Fragment>
			<Heading
				title="Connexion"
				description="Connectez-vous à votre compte TAMIRAH."
				image="/assets/representation.jpg"
			/>
			<main className="w-100">
				<Navigation transparent={false} />
				{/* <HAuth defaultTab={target} /> */}
				<Signin />
			</main>
		</Fragment>
	);
};

export default RejoindrePage;
