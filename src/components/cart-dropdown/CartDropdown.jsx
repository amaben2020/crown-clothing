import React from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import "./cart-dropdown.styles.css";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
const CartDropdown = ({ cartItems, history }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-cart"> Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={() => history.push("/checkout")}>
				PROCEED TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
