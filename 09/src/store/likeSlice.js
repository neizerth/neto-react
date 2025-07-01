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
      state.likes = 0;
    },
  },
});

export const { addLikes, resetLikes } = likeSlice.actions;

export default likeSlice.reducer;
