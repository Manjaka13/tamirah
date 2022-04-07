import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
    404 component
*/

const NotFound = () => (
	<div className="not-found w-100 h-100 o-h f-c-ce-ce bg-t">
		<div className="not-found__window w-30 br-10 bg-white">
			<h2 className="pd-20">
				<Icon icon={["fas", "exclamation-circle"]} /> Oups, contenu introuvable
			</h2>
			<div className="not-found__separator bg-t w-30 mg-l-20"></div>
			<p className="tx-j pd-20">
				Il semblerait que le contenu/page que vous voulez accéder n&apos;existe pas
				ou a été supprimé, veuillez vérifier que l&apos;url est correct et
				reéssayer. Si le problème persiste, contacez un admnistrateur.
			</p>
			<p className="tx-c  pd-t-20 pd-b-40">
				<Link href="/" passHref>
					<a
						className="back pd-10 pd-r-20 pd-r-20 bg-green white br-5 tr-200"
						title="Retour à l'accueil"
					>
						<Icon icon={["fas", "home"]} /> Revenir en lieu sûr
					</a>
				</Link>
			</p>
		</div>
	</div>
);

export default NotFound;
