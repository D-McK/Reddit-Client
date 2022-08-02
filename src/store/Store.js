import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";
import postReducer from "./postSlice";

export default configureStore({
  reducer: combineReducers({
    subreddit: subredditReducer,
    comments: postReducer,
  }),
});
