import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
// import Footer from "components/Footer/Footer";
import { ALBUM_LIST } from "helpers/const";

/*
	Album page list
*/

const album = ALBUM_LIST;

const AlbumPage = () => {
	const router = useRouter();
	const { name } = router.query;
	const [displayed, setDisplayed] = useState(null);

	let mappedAlbums = [];

	if (name && album[name]) {
		mappedAlbums = album[name].map((item, key) => {
			console.log(`/images/albums/${name}/${item}`);
			return (
				<div className="photogrid__item o-h" key={key}>
					<div
						className="w-100 h-100 o-h"
						style={{
							background: `url("/images/${name}/${item}") center center no-repeat`,
							backgroundSize: "cover",
						}}
					>
						<div className="photogrid__content w-100 h-100 f-c-ce-ce">
							<button className="button" title="Cliquer pour voir" onClick={() => setDisplayed(item)}>
								Voir
							</button>
						</div>
					</div>
				</div>
			);
		});
	}

	return !name ? (
		<Fragment></Fragment>
	) : (
		<Fragment>
			<Heading
				title={`Photos de l'album ${name}`}
				description="Visionnez les photos dans notre galerie !"
				image="/assets/representation.jpg"
			/>
			<main className="w-100">
				<Navigation transparent={false} />
				<div className="photogrid">
					<div className="container">
						<div className="photogrid__list">{mappedAlbums}</div>
					</div>
					{displayed && (
						<div className="photogrid__display f-r-ce-ce" onClick={() => setDisplayed(null)}>
							<img src={`/images/${name}/${displayed}`} />
						</div>
					)}
				</div>
				{/*<Footer />*/}
			</main>
		</Fragment>
	);
};

export default AlbumPage;
