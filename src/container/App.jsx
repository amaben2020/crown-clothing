import React, { Component } from "react";
import Homepage from "./../components/Homepage";
import ShopPage from "../components/pages/shop/ShopPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import SignupSigninPage from "../components/signup-signin-page/SignupSigninPage";
import {
	auth,
	createUserProfileDocument,
} from "../../src/firebase/firebase-utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user-actions/user.actions";
class App extends Component {
	unsubscribeFromAuth = null;

	//opening the subscription
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			//if there is a userAuth object
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				console.log(userRef);
				userRef.onSnapshot((snapShot) => {
					console.log(snapShot.data());
					//snapShot.data() these are the displayName, createdAt and email created in the firebase.utils
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	//closing the subscription
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
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
