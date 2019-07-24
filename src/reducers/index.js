import { combineReducers } from "redux";
// eslint-disable-next-line import/no-unresolved
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
