import React, { useState, useRef, Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Spinner from "components/Spinner";

/*
    Main component for authenticating
*/

const HAuth = ({ defaultTab }) => {
	let signin = {
		refEmail: useRef(null),
		refPassword: useRef(null),
	};
	let signup = {
		refFirstname: useRef(null),
		refLastname: useRef(null),
		refEmail: useRef(null),
		refPhone: useRef(null),
		refBirthday: useRef(null),
		refPassword: useRef(null),
		refPasswordRepeat: useRef(null),
	};
	const [activeTab, setActiveTab] = useState(
		defaultTab === "signin" || defaultTab === "signup" ? defaultTab : "signin"
	);
	const [loading, setLoading] = useState(false);
	const [signinCaption, setSigninCaption] = useState(null);
	const [signupCaption, setSignupCaption] = useState(null);
	const [captionStatus, setCaptionStatus] = useState(0);
	const [stopForm, setStopForm] = useState(false);

	// Set signin caption
	signin.setCaption = (message, status) => {
		if (typeof message === "string") {
			setCaptionStatus(status === 0 || status === 1 ? status : 0);
			setSigninCaption(message);
		}
	};
	// Check signin fields
	signin.checkFields = () => {
		const credentials = {
			email: signin.refEmail.current.value,
			password: signin.refPassword.current.value,
		};
		if (typeof credentials.email != "string" || credentials.email.length < 7) {
			signin.setCaption("E-mail invalide.");
			return false;
		}
		if (
			typeof credentials.password != "string" ||
			credentials.password.length < 4
		) {
			signin.setCaption("Mot de passe trop court.");
			return false;
		}
		return true;
	};
	// Handles signin submit
	signin.handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setSigninCaption(null);
		setTimeout(() => {
			if (signin.checkFields()) {
				// API call
				setStopForm(true);
				signin.setCaption("Vous allez être redirigé...", 1);
			}
			setLoading(false);
		}, 1500);
	};

	// Set signup caption
	signup.setCaption = (message, status) => {
		if (typeof message === "string") {
			setCaptionStatus(status === 0 || status === 1 ? status : 0);
			setSignupCaption(message);
		}
	};
	// Check signup fields
	signup.checkFields = () => {
		const user = {
			firstName: signup.refFirstname.current.value,
			lastName: signup.refLastname.current.value,
			email: signup.refEmail.current.value,
			phone: signup.refPhone.current.value,
			birthday: signup.refBirthday.current.value,
			password: signup.refPassword.current.value,
			passwordRepeat: signup.refPasswordRepeat.current.value,
		};
		if (typeof user.firstName != "string" || user.firstName.length < 3) {
			signup.setCaption("Prénom invalide.");
			return false;
		}
		if (typeof user.lastName != "string" || user.lastName.length < 3) {
			signup.setCaption("Nom invalide.");
			return false;
		}
		if (typeof user.email != "string" || user.email.length < 7) {
			signup.setCaption("E-mail invalide.");
			return false;
		}
		if (typeof user.password != "string" || user.password.length < 4) {
			signup.setCaption("Mot de passe trop court.");
			return false;
		}
		if (user.password != user.passwordRepeat) {
			signup.setCaption("Les mots de passe ne correspondent pas.");
			return false;
		}
		return true;
	};
	// Handles signup submit
	signup.handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setSignupCaption(null);
		setTimeout(() => {
			if (signup.checkFields()) {
				// API call
				setStopForm(true);
				signup.setCaption("Pour confirmez votre compte checkez votre e-mail.", 1);
			}
			setLoading(false);
		}, 1500);
	};

	return (
		<div className="hauth">
			<div className="hauth__container">
				<div className={`hauth__tabs ${stopForm ? "hauth__tabs--disabled" : ""}`}>
					<h3
						className="hauth__tab-item"
						onClick={() => setActiveTab("signin")}
						title="Se connecter à un compte existant"
					>
						Connexion
					</h3>
					<h3
						className="hauth__tab-item"
						onClick={() => setActiveTab("signup")}
						title="Créer un nouveau compte"
					>
						S&apos;inscrire
					</h3>
				</div>
				<div
					className={`hauth__tab-active ${
						activeTab === "signin"
							? "hauth__tab-active--signin"
							: "hauth__tab-active--signup"
					}`}
				>
					<div className="hauth__tab-active-bar"></div>
				</div>
				{activeTab === "signin" && (
					<Fragment>
						<form
							className={`hauth__signin ${stopForm ? "hauth__signin--disabled" : ""}`}
							onSubmit={signin.handleSubmit}
						>
							<input
								className="hauth__input"
								type="email"
								placeholder="Entrer votre e-mail"
								required
								ref={signin.refEmail}
							/>
							<input
								className="hauth__input"
								type="password"
								placeholder="Entrer votre mot de passe"
								required
								ref={signin.refPassword}
							/>
							<p className="hauth__submit-box">
								{(loading || stopForm) && <Spinner />}
								{!loading && !stopForm && (
									<button className="hauth__submit" type="submit">
										<Icon icon={["fas", "key"]} /> Connexion
									</button>
								)}
							</p>
							{signinCaption && (
								<p
									className={`hauth__error ${
										captionStatus === 0 ? "hauth__error--red" : "hauth__error--green"
									}`}
								>
									{captionStatus === 0 && <Icon icon={["fas", "exclamation-circle"]} />}
									{captionStatus === 1 && <Icon icon={["fas", "check-circle"]} />}{" "}
									{signinCaption}
								</p>
							)}
						</form>
						{!loading && !stopForm && (
							<Fragment>
								<p className="hauth__or">OU</p>
								<div className="hauth__divider"></div>
								<p className="hauth__alt-box">
									<button className="hauth__sign-alt hauth__google">
										<Icon icon={["fab", "google"]} /> Connexion avec Google
									</button>
									<button className="hauth__sign-alt hauth__facebook">
										<Icon icon={["fab", "facebook"]} /> Connexion avec Facebook
									</button>
								</p>
								<div className="hauth__divider"></div>
								<p className="hauth__forgot">
									<a className="hauth__forgot-link" href="#0">
										<Icon icon={["fas", "info-circle"]} /> Vous avez oublié votre mot de
										passe ?
									</a>
								</p>
							</Fragment>
						)}
					</Fragment>
				)}
				{activeTab === "signup" && (
					<Fragment>
						<form
							className={`hauth__signup ${stopForm ? "hauth__signup--disabled" : ""}`}
							onSubmit={signup.handleSubmit}
						>
							<div className="hauth__input-group">
								<input
									className="hauth__input"
									type="text"
									placeholder="Prénom(s)"
									required
									ref={signup.refFirstname}
								/>
								<input
									className="hauth__input"
									type="text"
									placeholder="Nom"
									required
									ref={signup.refLastname}
								/>
							</div>
							<div className="hauth__input-group">
								<input
									className="hauth__input"
									type="email"
									placeholder="Adresse e-mail"
									required
									ref={signup.refEmail}
								/>
								<input
									className="hauth__input"
									type="text"
									placeholder="Numéro de téléphone"
									ref={signup.refPhone}
								/>
							</div>
							<div className="hauth__input-group">
								<p className="hauth__label">Date de naissance:</p>
								<input className="hauth__input" type="date" ref={signup.refBirthday} />
							</div>
							<div className="hauth__input-group">
								<input
									className="hauth__input"
									type="password"
									placeholder="Entrer un mot de passe"
									required
									ref={signup.refPassword}
								/>
								<input
									className="hauth__input"
									type="password"
									placeholder="Répéter le mot de passe"
									required
									ref={signup.refPasswordRepeat}
								/>
							</div>
							<p className="hauth__submit-box">
								{loading && <Spinner />}
								{!loading && !stopForm && (
									<button className="hauth__submit" type="submit">
										<Icon icon={["fas", "user-plus"]} /> Inscription
									</button>
								)}
							</p>
							{signupCaption && (
								<p
									className={`hauth__error ${
										captionStatus === 0 ? "hauth__error--red" : "hauth__error--green"
									}`}
								>
									{captionStatus === 0 && <Icon icon={["fas", "exclamation-circle"]} />}
									{captionStatus === 1 && <Icon icon={["fas", "check-circle"]} />}{" "}
									{signupCaption}
								</p>
							)}
						</form>
						{!loading && !stopForm && (
							<Fragment>
								<p className="hauth__or">OU</p>
								<div className="hauth__divider"></div>
								<p className="hauth__alt-box">
									<button className="hauth__sign-alt hauth__google">
										<Icon icon={["fab", "google"]} /> S&apos;inscrire avec Google
									</button>
									<button className="hauth__sign-alt hauth__facebook">
										<Icon icon={["fab", "facebook"]} /> S&apos;inscrire avec Facebook
									</button>
								</p>
							</Fragment>
						)}
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default HAuth;
