import { combineReducers } from "redux";
import userReducer from "./users/useReducer";

export default combineReducers({
  userReducer,
});
