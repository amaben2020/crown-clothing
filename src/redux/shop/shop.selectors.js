import { createSelector } from "reselect";

const shopSelect = (state) => state.shop;

export const shopSelector = createSelector(
	[shopSelect],
	(shop) => shop.collections
);

export const sellectCollectionsForPreview = createSelector(
	[shopSelector],
	(collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[shopSelector],
		(collections) => collections[collectionUrlParam]
	);
