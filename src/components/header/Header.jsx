import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { connect } from "react-redux";
import "./header.styles.css";
import { auth } from "../../firebase/firebase-utils.js";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectUser } from "../../redux/user/user.selector";
import { hiddenSelector } from "../../redux/cart/cart-selectors/cart.selectors";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<img className="logo" src={Logo} alt="logo.svg" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
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
const mapStateToProps = createStructuredSelector({
	currentUser: selectUser,
	hidden: hiddenSelector,
});

export default connect(mapStateToProps)(Header);
