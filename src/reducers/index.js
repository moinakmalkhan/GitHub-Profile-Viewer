import { combineReducers } from "redux";
import gitReducer from "./gitReducer";

export default combineReducers({
    git: gitReducer
  });