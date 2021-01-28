import React from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import "./cart-dropdown.styles.css";
const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>PROCEED TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
