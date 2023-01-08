import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getComments } from "../api/RedditAPIs";

const initialState = {
  post: "",
  comments: [],
  status: "idle",
  selected: false,
};

export const fetchComments = createAsyncThunk(
  "subreddits/getComments",
  async (post) => {
    const response = await getComments(post);
    return response;
  }
);

export const postSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    postSelected: (state, action) => {
      state.post = action.payload;
    },
    clearComments: (state) => {
      state.comments = [];
    },
    checkPostSelected: (state) => {
      state.selected = !state.selected;
      if (state.selected) {
        state.comments = [];
      }
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchComments.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "success";
      state.comments = action.payload;
    },
  },
});
export const {
  loadedComments,
  postSelected,
  clearComments,
  checkPostSelected,
} = postSlice.actions;

export const selectPost = (state) => state.comments.post;
export const selectComments = (state) => state.comments.comments;
export const selectStatus = (state) => state.comments.status;
export const selectedPostCommentsOpened = (state) => state.comments.selected;

export default postSlice.reducer;
