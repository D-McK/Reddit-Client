import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  changeSubreddit,
  selectSearch,
} from "../store/subredditSlice";
import "./SubredditSearch.css";

import RedditLogo from "../image/Reddit_logo_new.png";
import { BsSearch } from "react-icons/bs";

export const SubredditSearch = () => {
  const dispatch = useDispatch();
  const typedSubreddit = useSelector(selectSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeSubreddit(typedSubreddit));
  };

  return (
    <div className="search-container">
      <img src={RedditLogo} alt="reddit logo" />
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            className="search-box"
            label="Search Subreddits"
            placeholder="Search Subreddits"
            onChange={({ target }) => dispatch(changeSearch(target.value))}
          />
          <button type="submit" className="submit">
            <BsSearch className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};
