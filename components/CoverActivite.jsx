import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const CoverActivite = () => (
	<div className="w-100">
		<div className="cover-list">
			<h2 className="tx-c fs-300 mg-b-40">Les activités et évènements</h2>
			<div className="bg-t mg-a w-30 h-5px br-5"></div>
			<div className="cover-list__list container pd-t-40">
				<div className="cover-list__item f-c-ce-st pd-b-40">
					<img className="w-120px" src="/images/blueprint.svg" alt="Blueprint" />
					<h3 className="tx-c pd-20 fs-130">Lorem ipsum</h3>
					<p className="tx-j">
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia curae; In a quam sit amet velit volutpat tristique. Donec id
						ligula nisl. Donec libero velit, iaculis nec hendrerit sed, dapibus non
						turpis.
					</p>
				</div>
				<div className="cover-list__item f-c-ce-st">
					<img className="w-120px" src="/images/building.svg" alt="Blueprint" />
					<h3 className="tx-c pd-20 fs-130">Lorem ipsum</h3>
					<p className="tx-j">
						Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod
						nunc. Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam
						consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit.
					</p>
				</div>
				<div className="cover-list__item f-c-ce-st">
					<img className="w-120px" src="/images/tractor.svg" alt="Blueprint" />
					<h3 className="tx-c pd-20 fs-130">Lorem ipsum</h3>
					<p className="tx-j">
						Fusce lacinia fringilla lectus, non condimentum ligula fermentum id.
						Aenean porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
				</div>
			</div>
			<div className="cover-list__about container">
				<div className="cover-list__album">
					<div className="cover-list__image cover-list__image--1 f-r-ce-ce">
						<img src="/images/cover/home.jpg" alt="Image" />
					</div>
					<div className="cover-list__image cover-list__image--2 f-r-ce-ce">
						<img src="/images/cover/home.jpg" alt="Image" />
					</div>
				</div>
				<div className="cover-list__words mg-l-40 bg-white pd-20">
					<h3 className="fs-180 pd-b-20">Lorem ipsum</h3>
					<p className="tx-j pd-b-20">
						Fusce lacinia fringilla lectus, non condimentum ligula fermentum id.
						Aenean porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
					<p className="tx-j">
						Etiam lacinia, nisl ac rutrum vestibulum, risus enim placerat nisl, eget
						bibendum neque nibh a lectus. Donec tincidunt lacinia pharetra. Proin diam
						arcu, gravida sit amet lobortis ut, posuere sed turpis. Cras fringilla
						tristique ligula.
					</p>
				</div>
			</div>
		</div>
		<div className="cover-activite">
			<div className="cover-activite__bg">
				<div className="cover-activite__bg-content">
					<div className="cover-activite__overlay"></div>
				</div>
			</div>
			<div className="container">
				<ul className="h-100 f-r-ce-ce w-100">
					<li className="cover-activite__item bg-t">
						<div className="cover-activite__icon">
							<Icon icon={["fas", "hand-holding-dollar"]} />
						</div>
						<h2 className="cover-activite__title">Financement</h2>
						<p className="cover-activite__text">
							Fusce lacinia fringilla lectus, non condimentum ligula fermentum id.
							Aenean porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
							dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
							iaculis vitae.
						</p>
					</li>
					<li className="cover-activite__item cover-activite__item--big bg-t">
						<div className="cover-activite__icon">
							<Icon icon={["fas", "newspaper"]} />
						</div>
						<h2 className="cover-activite__title">Préparation</h2>
						<p className="cover-activite__text">
							Fusce lacinia fringilla lectus, non condimentum ligula fermentum id.
							Aenean porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
							dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
							iaculis vitae.
						</p>
					</li>
					<li className="cover-activite__item bg-t">
						<div className="cover-activite__icon">
							<Icon icon={["fas", "store"]} />
						</div>
						<h2 className="cover-activite__title">Action</h2>
						<p className="cover-activite__text">
							Fusce lacinia fringilla lectus, non condimentum ligula fermentum id.
							Aenean porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
							dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
							iaculis vitae.
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default CoverActivite;
