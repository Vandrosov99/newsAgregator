import moneyReducer from "./money";
import postsReducer from "./posts";
import covidReducer from "./covid";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  moneyReducer,
  postsReducer,
  covidReducer,
});

export default allReducers;
