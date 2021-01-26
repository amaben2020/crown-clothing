import { Button } from "material-ui-core";
import React, { Component } from "react";
import { signInWithGoogle } from "../../../firebase/firebase-utils";
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
		console.log(this.state);
		return (
			<div>
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
					<Button onClick={signInWithGoogle}>SIGNIN</Button>
				</form>
			</div>
		);
	}
}

export default Signin;
