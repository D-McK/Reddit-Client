import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  changeSubreddit,
  selectSearch,
} from "../store/subredditSlice";
import "./SubredditSearch.css";

export const SubredditSearch = () => {
  const dispatch = useDispatch();
  const typedSubreddit = useSelector(selectSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeSubreddit(typedSubreddit));
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <p>Search For Subreddit</p>
        <form onSubmit={submitHandler}>
          <input
            className="search-box"
            label="Search Subreddits"
            onChange={({ target }) => dispatch(changeSearch(target.value))}
          />
          <input type="submit" className="submit" value="Search!" />
        </form>
      </div>
      <div className="logo-bar">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/en/5/58/Reddit_logo_new.svg"
          }
        />
      </div>
    </div>
  );
};
