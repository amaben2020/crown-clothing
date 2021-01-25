import React from "react";
import Homepage from "./../components/Homepage";
import ShopPage from "../components/pages/shop/ShopPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact={true} path="/" component={Homepage} />{" "}
					<Route path="/shop" component={ShopPage} />{" "}
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
