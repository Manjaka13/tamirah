import React from "react";

// Ad for mobile app

const MobileApp = () => (
	<div className="mobile-app">
		<div className="container">
			<img
				className="mobile-app__phone mg-r-20"
				src="/images/app.png"
				alt="Mobile app"
			/>
			<div className="mobile-app__about mg-l-20">
				<h3 className="title text fs-380 pd-b-20 pd-t-20 t">
					L&apos;application TAMIRAH
				</h3>
				<h2 className="text white">
					Bientôt disponible sur toutes les plateformes...
				</h2>
				<div className="download-buttons f-r-st-ce pd-t-20">
					<img
						className="download p mg-r-10"
						src="/images/google-play.png"
						alt="Google Play Store"
						title="Bientôt disponible sur Google Play Store !"
					/>
					<img
						className="download p mg-l-10"
						src="/images/appstore.png"
						alt="Apple store"
						title="Bientôt disponible sur Apple Store !"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default MobileApp;
