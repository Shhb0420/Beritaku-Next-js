import { combineReducers } from "redux";
import authReducer from "./auth";
import articlesReducer from "./articles";

const indexReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
});

export default indexReducer;
