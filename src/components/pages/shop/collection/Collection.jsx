import React from "react";
import CollectionItem from "../../../collection-item/CollectionItem";
import { selectCollection } from "./../../../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import "./collection.styles.css";
const Category = ({ collection: { items, title } }) => {
	return (
		<div className="category">
			<h2>{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Category);
