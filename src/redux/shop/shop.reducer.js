import SHOP_DATA from "../../components/pages/shop/ShopData";

const INITIAL_STATE = {
	collections: SHOP_DATA,
};
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return {
				...state,
			};
	}
};

export default shopReducer;