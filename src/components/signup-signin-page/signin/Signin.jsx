import React, { Component } from "react";
import { signInWithGoogle } from "../../../firebase/firebase-utils";
import CustomButton from "../../custom-button/CustomButton";
import "./signin.styles.css";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from "@material-ui/core";
import FormInput from "../../../form-input/FormInput";
export class Signin extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			email: "",
			password: "",
		});
	};

	render() {
		//console.log(this.state);
		console.log(this.handleChange);
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign In with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<div className="group">
						<FormControl className="form-input">
							<InputLabel htmlFor="email">Email address</InputLabel>
							<Input
								className="form-input"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
								id="email"
								aria-describedby="my-helper-text"
							/>
							<FormHelperText id="my-helper-text">
								Enter your email here
							</FormHelperText>
						</FormControl>

						<FormControl className="form-input">
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								className="form-input"
								name="password"
								type="password"
								required
								value={this.state.password}
								onChange={this.handleChange}
								id="my-input"
								aria-describedby="my-helper-text"
							/>
							<FormHelperText id="my-helper-text">
								Please enter your password
							</FormHelperText>
						</FormControl>
					</div>

					<div className="buttons">
						<CustomButton type="submit" value="Submit Form">
							SIGN IN
						</CustomButton>
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
