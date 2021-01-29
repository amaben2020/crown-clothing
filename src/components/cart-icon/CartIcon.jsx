import React from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "./../../redux/cart/cart-selectors/cart.selectors";
const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<img
				alt="Shopping cart icon"
				src={ShoppingIcon}
				className="shopping-icon"
			/>
			<span className="item-count">{itemCount.length}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
