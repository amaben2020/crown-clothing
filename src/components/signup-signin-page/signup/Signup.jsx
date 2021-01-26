import React, { Component } from "react";
import "./signup.styles.css";
export class Signup extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	render() {
		return (
			<div>
				<form>
					<input placeholder="email" />
					<input />
					<input />
				</form>
			</div>
		);
	}
}

export default Signup;
