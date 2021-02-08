import React from "react";
import { HomePageContainer } from "./pages/Homepage.styles";
import Directory from "./directory/Directory";

const Homepage = (props) => {
	// console.log(props.match.params.noteID);
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default Homepage;

//<button onClick={() => props.history.push("/hats")}></button> same as <Link/>
