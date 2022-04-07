import React from "react";

/*
    Home page cover
*/

const Cover = () => (
	<div className="cover w-100 h-100 o-h">
		<div className="cover__overlay w-100 h-100">
			<div
				className="container cover__content"
				style={{ flexDirection: "column" }}
			>
				<div className="w-100 h-80 f-r-st-ce">
					<h2 className="cover__title white fs-430">
						La vision d'un <span className="t">avenir</span> meilleur pour tous.
					</h2>
					<div className="cover__activities w-40 h-100 bg-red"></div>
				</div>
				<p className="w-100 h-20 f-r-ce-ce">
					<button
						className="cover__discover fs-130 b pd-20 pd-t-10 pd-b-10 br-5 white bg-t tr-200 p"
						title="Découvrir notre association."
					>
						Découvrir
					</button>
				</p>
			</div>
		</div>
	</div>
);

export default Cover;
