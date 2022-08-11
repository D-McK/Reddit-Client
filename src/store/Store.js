import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";
import postReducer from "./postSlice";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
  comments: postReducer,
});

export default configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
