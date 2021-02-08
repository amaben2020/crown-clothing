import React from "react";
import Logo from "../../assets/Logo.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils.js";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectUser } from "../../redux/user/user.selector";
import { hiddenSelector } from "../../redux/cart/cart-selectors/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./Header.styles";
const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<img className="logo" src={Logo} alt="logo.svg" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink
						as="div"
						onClick={() => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN UP</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? <CartDropdown /> : null}
		</HeaderContainer>
	);
};

//Destructuring the user and cart toggle from the root reducer; always wrap in ({})
const mapStateToProps = createStructuredSelector({
	currentUser: selectUser,
	hidden: hiddenSelector,
});

export default connect(mapStateToProps)(Header);
