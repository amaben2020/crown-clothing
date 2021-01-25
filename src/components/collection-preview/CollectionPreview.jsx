import React from "react";

const CollectionPreview = ({ title, items }) => {
	console.log(items);
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.filter((item, idx) =>
					(item < 4).map((it, i) => <div key={i}>{it.name}</div>)
				)}
			</div>
		</div>
	);
};

export default CollectionPreview;
