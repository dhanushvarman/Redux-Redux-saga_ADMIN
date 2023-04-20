import { combineReducers } from "redux";
import getData from "./getData";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    getData,
    userReducer,
});

export default allReducers