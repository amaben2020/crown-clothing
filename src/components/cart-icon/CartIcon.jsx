import React from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<img
				alt="Shopping cart icon"
				src={ShoppingIcon}
				className="shopping-icon"
			/>
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
