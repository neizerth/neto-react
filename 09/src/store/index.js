import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import { likeReducer } from "./reducers";
import likeReducer from "./likeSlice";

const reducer = combineReducers({
  likes: likeReducer,
});

export const store = configureStore({
  reducer,
});
