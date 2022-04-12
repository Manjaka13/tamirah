import React, { useRef, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
// import Spinner from "components/Spinner";

/*
    For signin to an account
*/

const InputBox = (name, icon, error, placeholder, type, required) => {
	const ref = useRef(null);

	// Set input
	const set = (content) => {
		ref.current.value = content;
	};

	// Get input
	const get = () => {
		return ref.current.value;
	};

	const component = (
		<div
			className={`account__input-box ${
				error ? "account__input-box--error" : ""
			} w-100 f-r-st-ce br-5 mg-b-20`}
		>
			<div className="account__label">
				{icon && <Icon icon={icon} />} {name ? name : ""}
				<p className="account__error-icon h-100 f-r-ce-ce tr-200">
					<Icon icon={["fas", "exclamation-circle"]} />
				</p>
				<p className="account__error br-5 p-n n-s tr-200">
					<span className="account__error-text tx-j pd-10">
						{error ? error : ""}
					</span>
					<span className="account__error-caret">
						<Icon icon={["fas", "caret-up"]} />
					</span>
				</p>
			</div>
			<input
				className="account__input"
				type={type}
				placeholder={placeholder}
				required={required ? true : false}
				ref={ref}
			/>
		</div>
	);

	return { component, ref, get, set };
};

const Signin = () => {
	const [passwordWarning, setPasswordWarning] = useState(null);
	const [error, setError] = useState(null);

	const form = {
		email: InputBox(
			"E-mail",
			["fas", "envelope"],
			null,
			"Entrer votre adresse e-mail",
			"email",
			true
		),
		password: InputBox(
			"Mot de passe",
			["fas", "key"],
			passwordWarning,
			"Entrer votre mot de passe",
			"password",
			true
		),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form.email.get());
		console.log(form.password.get());
		setPasswordWarning(null);
		if (form.password.get().length < 4)
			setPasswordWarning("Le mot de passe entré est trop court.");
		else {
			// API request
			setError(null);
		}
	};

	return (
		<div className="account f-c-ce-ce">
			<div className="account__window signin__window bg-white br-10 o-h">
				<h2 className="account__title pd-20">
					<Icon icon={["fas", "home"]} /> Se connecter
				</h2>
				<div className="account__separator"></div>
				<form className="account__form f-c-ce-ce pd-20" onSubmit={handleSubmit}>
					{form.email.component}
					{form.password.component}
					<button className="button">
						<Icon icon={["fas", "lock"]} /> Connexion
					</button>
					{/* <Spinner /> */}
					<p className="account__caption">{error}</p>
				</form>
			</div>
		</div>
	);
};

export default Signin;
