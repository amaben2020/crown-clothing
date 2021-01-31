import React from "react";
import "./cart-item.styles.css";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<div className="cart-item">
			<img style={{ width: "50%" }} src={imageUrl} alt="item" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span style={{ paddingLeft: "13px" }}>
					{quantity} X ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
