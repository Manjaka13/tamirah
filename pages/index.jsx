import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import Cover from "components/Cover";

/*
	Home page
*/

const HomePage = () => (
	<Fragment>
		<Heading
			title="Tamirah - Fleur de vie"
			description="Nous sommes une association caritative qui oeuvre pour aider les plus démunis."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation />
			<Cover />
			<p>
				Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum
				lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis
				orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
				Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam
				hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Cras vel nibh quam.
			</p>
			<p>
				Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum
				lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis
				orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
				Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam
				hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Cras vel nibh quam.
			</p>
			<p>
				Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum
				lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis
				orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
				Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam
				hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Cras vel nibh quam.
			</p>
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
