import { combineReducers, createStore } from "redux";
import { likeReducer } from "./reducers";

// const reducer = combineReducers

const reducer = combineReducers({
  likes: likeReducer,
});

export const store = createStore(reducer);
