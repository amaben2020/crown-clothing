import React, { Component } from "react";
import Homepage from "./../components/Homepage";
import ShopPage from "../components/pages/shop/ShopPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import SignupSigninPage from "../components/signup-signin-page/SignupSigninPage";
import { auth } from "../../src/firebase/firebase-utils.js";
class App extends Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
			this.setState({ currentUser: user })
		);
		console.log(this.state);
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact={true} path="/" component={Homepage} />{" "}
						<Route path="/shop" component={ShopPage} />{" "}
						<Route path="/signin" component={SignupSigninPage} />{" "}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
