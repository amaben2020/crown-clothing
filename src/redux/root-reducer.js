import { combineReducers } from "redux";
import userReducer from "./user/user-reducer/user.reducer";

export default combineReducers({
	user: userReducer,
});
