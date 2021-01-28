import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { connect } from "react-redux";
import "./header.styles.css";
import { auth } from "../../firebase/firebase-utils.js";
const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<img className="logo" src={Logo} alt="logo.svg" />
			</Link>
			<div className="options">
				<Link className="option" to="/">
					SHOP
				</Link>
				<Link className="option" to="/">
					CONTACT
				</Link>
				{currentUser ? (
					<div
						className="option"
						onClick={() => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN UP
					</Link>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	currentUser: state.user.currentUser;
};

export default connect(mapStateToProps)(Header);
