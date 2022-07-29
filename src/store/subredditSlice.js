import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  posts: [],
  isLoading: false,
  error: false,
  subreddit: "r/all",
};

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: initialSate,
  reducers: {
    loadedPosts: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { subreddit } = subredditSlice.actions;

export default subredditSlice.reducer;
