import React from "react";
import "./checkout-styles.css";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
	selectCartItems,
	selectCartItemTotal,
} from "../../../../redux/cart/cart-selectors/cart.selectors";
import CheckoutItem from "./../checkout-item/CheckoutItem";
const Checkout = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span> Product</span>
				</div>
				<div className="header-block">
					<span> Description</span>
				</div>
				<div className="header-block">
					<span> Quantity</span>
				</div>
				<div className="header-block">
					<span> Price</span>
				</div>
				<div className="header-block">
					<span> Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">$ {total}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	total: selectCartItemTotal,
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
