import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "likes",
  initialState: {
    likes: 0,
  },
  reducers: {
    addLikes(state, action) {
      const { value = 1 } = action.payload || {};
      state.likes += value;
    },
    resetLikes(state) {
      return {
        ...state,
        likes: 0,
      };
    },
  },
  selectors: {
    selectLikes: (state) => state.likes,
  },
});

export const { addLikes, resetLikes } = likeSlice.actions;

export const { selectLikes } = likeSlice.selectors;

export default likeSlice.reducer;
