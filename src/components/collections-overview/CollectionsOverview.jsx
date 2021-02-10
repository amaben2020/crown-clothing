import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "./../../redux/shop/shop.selectors";
import "./collections-overview.styles.css";
const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
