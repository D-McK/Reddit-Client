import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  changeSubreddit,
  selectSearch,
} from "../store/subredditSlice";
import "./SubredditSearch.css";
import RedditLogo from "../image/Reddit_logo_new.png";

export const SubredditSearch = () => {
  const dispatch = useDispatch();
  const typedSubreddit = useSelector(selectSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeSubreddit(typedSubreddit));
  };

  return (
    <div className="search-container">
      <img src={RedditLogo} />
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
      <div className="logo-bar"></div>
    </div>
  );
};
