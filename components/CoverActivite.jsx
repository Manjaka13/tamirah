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
					<h3 className="tx-c pd-20 fs-130">Nous aspirons à agir, aider, aimer et servir</h3>
					<p className="tx-j">
						Notre association se doit d&apos;être une main tendue pour les nécessiteux. Les encourager à ouvrir l&apos;esprit pour mieux avancer et sortir de la pauvreté. Avec nos ateliers nous les aidons à faire sortir leurs savoir-faire pour créer des sources de revenus plus ou moins stable.
					</p>
				</div>
				<div className="cover-list__item f-c-ce-st">
					<img className="w-120px" src="/images/building.svg" alt="Blueprint" />
					<h3 className="tx-c pd-20 fs-130">Aider ce n&apos;est pas vouloir maîtriser mais servir</h3>
					<p className="tx-j">
						l&apos;association TAMIRAH Fleur de vie est une organisation à but non-lucratif avec des membres bénévoles et volontaires. Composée essentiellement de femmes au grand coeur, des mères célibataires ou non mais qui ont la même vision et les mêmes objectifs, rendre le monde meilleur.
					</p>
				</div>
				<div className="cover-list__item f-c-ce-st">
					<img className="w-120px" src="/images/tractor.svg" alt="Blueprint" />
					<h3 className="tx-c pd-20 fs-130">Agir et former pour donner des raisons d&apos;espérer</h3>
					<p className="tx-j">
						Avec nos capacités, nous avons mis en place une association de femmes bénévoles afin d&apos;offrir aux plus démunis une lueur d&apos;espoir pour une vie meilleure.
Nous puisons un avenir prospère pour ces enfants qui n&apos;ont jamais mis les pieds à l&apos;école mais qui veulent bien apprendre à lire, à écrire...
					</p>
				</div>
			</div>
			<div className="cover-list__about container">
				<div className="cover-list__album">
					<div className="cover-list__image cover-list__image--1 f-r-ce-ce">
						<img
							src="/images/content/277914668_4971483792959021_4784038589526544905_n.jpg"
							alt="Image"
						/>
					</div>
					<div className="cover-list__image cover-list__image--2 f-r-ce-ce">
						<img
							src="/images/content/277914668_4971483792959021_4784038589526544905_n.jpg"
							alt="Image"
						/>
					</div>
				</div>
				<div className="cover-list__words mg-l-40 bg-white pd-20">
					<h3 className="fs-180 pd-b-20">Tendre la main à tous</h3>
					<p className="tx-j pd-b-20">
						L&apos;objectif primaire de TAMIRAH Fleur de vie consiste à aider, à tendre une main bienveillante pour les faibles et les plus démunis de notre pays. Il s&apos;agit d&apos;une action commune en vue d&apos;améliorer les conditions de vie et de travail, à trouver des débouchés pour des produits qui visent à former un capital assez conséquent en plus de vos dons pour mieux cerner leurs besoins.
					</p>
					{/*<p className="tx-j">
						Nous puisons un avenir prospère pour ces enfants qui n&apos;ont jamais mis les pieds à l&apos;école mais qui veulent bien apprendre à lire, à écrire...
					</p>*/}
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
						<h2 className="cover-activite__title">Jeunes productifs</h2>
						<p className="cover-activite__text">
							Nous essayons de tout coeur de remettre nos jeunes dans la bonne voie, pour échapper à la pauvreté et s&apos;entraider mutuellement pour la réussite tant de notre pays tout entier que de nos familles. Tout cela passe à travers des formations diverses et variées pour inciter les jeunes et les chômeurs à travailler.
						</p>
					</li>
					<li className="cover-activite__item cover-activite__item--big bg-t">
						<div className="cover-activite__icon">
							<Icon icon={["fas", "newspaper"]} />
						</div>
						<h2 className="cover-activite__title">Femmes fortes</h2>
						<p className="cover-activite__text">
							Nous apportons tout aussi notre aide aux femmes, pour qu&apos;elles mettent à contribution leurs talents pour la société. Nous façonnerons aussi de leurs mains un avenir où ils deviennent productif vis-à-vis de l&apos;économie malgache.
						</p>
					</li>
					<li className="cover-activite__item bg-t">
						<div className="cover-activite__icon">
							<Icon icon={["fas", "store"]} />
						</div>
						<h2 className="cover-activite__title">Aide aux démunis</h2>
						<p className="cover-activite__text">
							Nous allons constament organiser des évènements majeurs pour apporter notre aide aux démunis et aux plus faibles comme les personnes âgés qui peinent à survivre dans les rues. Nous avons besoin de toute l&apos;aide possible pour achever tous nos objectifs.
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default CoverActivite;
