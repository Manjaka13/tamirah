import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => (
	<div className="about w-100 pd-t-40">
		<div className="container f-r-st-ce">
			<div className="about__description w-60">
				<SectionTitle title="Notre association" />
				<p className="tx-j pd-r-20">
					Praesent sodales lacinia facilisis. Quisque id ligula vitae turpis blandit
					ullamcorper. Donec faucibus euismod quam. Curabitur eros enim, venenatis
					eget mi at, elementum commodo urna. Etiam non facilisis erat. Quisque quis
					finibus nisi, eget vehicula ipsum.
				</p>
			</div>
			<div className="about__image">
				<img
					className="w-100"
					src="/images/representation.jpg"
					alt="TAMIRAH Fleur de vie"
				/>
			</div>
		</div>
	</div>
);

export default About;
