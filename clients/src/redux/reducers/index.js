import { combineReducers } from "redux";
import postReducers from "./postReducer.js";
import userReducers from "./modalReducer.js";
import modalReducers from "./modalReducer.js";

const appReducers = combineReducers({
  postReducers,
  userReducers,
  modalReducers,
});

export default appReducers;
