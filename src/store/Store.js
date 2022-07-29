import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";

export default configureStore({
  reducer: combineReducers({
    subreddit: subredditReducer,
  }),
});
