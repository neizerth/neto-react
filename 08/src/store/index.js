import { combineReducers, createStore } from "redux";
import { likeReducer } from "./reducers";
// import { ADD_LIKES, RESET_LIKES } from "./actionsTypes";

// const reducer = combineReducers

const reducer = combineReducers({
  likes: likeReducer,
});

// const initialState = {
//   likes: {
//     likes: 0,
//   },
// };

// const reducer = (state = initialState, action) => {
//   if (action.type === ADD_LIKES) {
//     return {
//       ...state,
//       likes: {
//         likes: state.likes.likes + 1,
//       },
//     };
//   }
//   if (action.type === RESET_LIKES) {
//     return {
//       ...state,
//       likes: {
//         likes: 0,
//       },
//     };
//   }

//   return state;
// };

export const store = createStore(reducer);
