import React, { Component } from "react";
import { signInWithGoogle } from "../../../firebase/firebase-utils";
import CustomButton from "../../custom-button/CustomButton";
import "./signin.styles.css";
export class Signin extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (e) => {
		e.preventDefault();

		this.setState({
			email: e.target.value,
			password: e.target.value,
		});
	};

	render() {
		//console.log(this.state);
		return (
			<div className="sign-in">
				<form>
					<input
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.handleChange}
						label="email"
						required
						placeholder=""
					/>
					<input
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						onChange={this.handleChange}
						required
						placeholder=""
					/>
					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
