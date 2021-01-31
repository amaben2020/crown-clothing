import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { persistor } from "./redux/store";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,

	document.getElementById("root")
);
