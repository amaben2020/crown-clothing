const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItems = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);
	if (existingCartItems) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	//CartItems = The entire store
	//select the cartItem with ID that matches the ID of the item to be removed
	const existingCartItems = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	//After selecting this Item to be removed from the cart, if there is a match, select only the Item that its ID matches with the cartItem. i.e 22.Clothes === 22.9Clothes
	if (existingCartItems === 1) {
		return cartItems.filter((cartItem) => cartItem.id === cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? {
					...cartItem,
					quantity: cartItem.quantity - 1,
			  }
			: cartItem
	);
};

export default addItemToCart;
