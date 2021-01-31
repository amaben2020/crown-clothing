import React from "react";
import MenuItem from "./../menu-item/MenuItem";
import { directorySelector } from "../../redux/directory/directory-selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./directory.styles.css";
const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: directorySelector,
});

export default connect(mapStateToProps)(Directory);
