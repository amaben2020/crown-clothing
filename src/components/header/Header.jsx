import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { connect } from "react-redux";
import "./header.styles.css";
import { auth } from "../../firebase/firebase-utils.js";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
const Header = ({ currentUser, hidden }) => {
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
				<CartIcon />
			</div>
			{hidden ? <CartDropdown /> : null}
		</div>
	);
};

//Destructuring the user and cart toggle from the root reducer; always wrap in ({})
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
