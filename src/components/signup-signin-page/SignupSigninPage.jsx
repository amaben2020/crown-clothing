import React from "react";
import Signin from "./signin/Signin";
import "./signup-signin.styles.css";
import Signup from "./signup/Signup";

const SignupSigninPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<Signin />
			<Signup />
		</div>
	);
};

export default SignupSigninPage;
