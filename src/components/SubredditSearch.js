import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  changeSubreddit,
  selectSearch,
} from "../store/subredditSlice";

export const SubredditSearch = () => {
  const dispatch = useDispatch();
  const typedSubreddit = useSelector(selectSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(typedSubreddit);
    dispatch(changeSubreddit(typedSubreddit));
  };

  return (
    <div>
      <h2>Search For Subreddit</h2>
      <form onSubmit={submitHandler}>
        <input
          id="outlined-basic"
          label="Search Subreddits"
          onChange={({ target }) => dispatch(changeSearch(target.value))}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
