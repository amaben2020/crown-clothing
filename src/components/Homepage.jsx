import React from "react";
import "./homepage.styles.css";
import Directory from "./directory/Directory";
const Homepage = (props) => {
	// console.log(props.match.params.noteID);
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default Homepage;

//<button onClick={() => props.history.push("/hats")}></button> same as <Link/>
