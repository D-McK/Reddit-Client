import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFrontPage } from "../api/RedditAPIs";

const initialState = {
  posts: [],
  status: "idle",
  subreddit: "astronomy",
  typedsubreddit: "",
};

export const fetchSubreddit = createAsyncThunk(
  "subreddits/getSubreddit",
  async (subreddit) => {
    const response = await getFrontPage(subreddit);
    return response;
  }
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: initialState,
  reducers: {
    loadedPosts: (state, action) => {
      state.posts.push(action.payload);
    },
    changeSubreddit: (state, action) => {
      if (action.payload === undefined) {
        state.subreddit = state.typedsubreddit;
      } else {
        state.subreddit = action.payload;
      }
    },
    changeSearch: (state, action) => {
      state.typedsubreddit = action.payload;
    },
  },
  extraReducers: {
    [fetchSubreddit.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSubreddit.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchSubreddit.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    },
  },
});

export const { subreddit, changeSubreddit, changeSearch, loadedPosts } =
  subredditSlice.actions;
export const selectPosts = (state) => state.subreddit.posts;
export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectStatus = (state) => state.subreddit.status;
export const selectSearch = (state) => state.subreddit.typedsubreddit;

export default subredditSlice.reducer;
