import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
//state.cart => cartItems
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

const cartTotal = (state) => state.cart;
//state.cart => cartItems
export const selectCartTotal = createSelector(
	[cartTotal],
	(cart) => cart.cartItems
);

const hidden = (state) => state.cart;
export const hiddenSelector = createSelector([hidden], (cart) => cart.hidden);
//Here, the selectCartItems is created to extract just the cartItems state from the root-reducer so that the entire app doesnt rerender when we dropdown
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartItemTotal = createSelector(
	[selectCartTotal],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity * cartItem.price,
			0
		)
);
