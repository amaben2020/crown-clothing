import React, { Component } from "react";
import "./signup.styles.css";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from "@material-ui/core";
import FormInput from "../../../form-input/FormInput";
import {
	auth,
	createUserProfileDocument,
} from "../../../firebase/firebase-utils";
import CustomButton from "../../custom-button/CustomButton";
export class Signup extends Component {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");

			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log("Something went wrong", error);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have a account</h2>
				<span>Sign Up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<div className="group">
						<FormInput
							className="form-input"
							name="displayName"
							type="text"
							label="Display Name"
							value={displayName}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							className="form-input"
							name="email"
							label="Email"
							type="email"
							value={email}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							className="form-input"
							name="password"
							label="Password (min: 6 chars)"
							type="password"
							value={password}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							className="form-input"
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							value={confirmPassword}
							handleChange={this.handleChange}
							required
						/>
					</div>

					<div className="buttons">
						<CustomButton type="submit">SIGN UP</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signup;
