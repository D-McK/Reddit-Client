import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  changeSubreddit,
  selectSearch,
} from "../store/subredditSlice";
import "./SubredditSearch.css";

import {
  astronomyIcon,
  awwIcon,
  dataIcon,
  catsIcon,
  interestingIcon,
  landscapesIcon,
  natureIcon,
  oldSchoolIcon,
  picsIcon,
  starScapesIcon,
} from "../image/icons";

import { BsSearch } from "react-icons/bs";

export const SubredditSearch = () => {
  const dispatch = useDispatch();
  const typedSubreddit = useSelector(selectSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeSubreddit(typedSubreddit));
  };

  const icons = [
    astronomyIcon,
    awwIcon,
    catsIcon,
    starScapesIcon,
    oldSchoolIcon,
    picsIcon,
    interestingIcon,
    dataIcon,
    landscapesIcon,
    natureIcon,
  ];

  const subreddits = [
    "astronomy",
    "aww",
    "cats",
    "imaginarystarscapes",
    "oldschoolcool",
    "pics",
    "damnthatsinteresting",
    "dataisbeautiful",
    "imaginarylandscapes",
    "natureisbeautiful",
  ];
  return (
    <div className="subreddit-search-box">
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
      <div className="suggested-subreddits">
        {subreddits.map((subreddit, index) => {
          return (
            <div
              className="suggest-subreddit-info"
              onClick={() => dispatch(changeSubreddit(subreddit))}
            >
              <img src={icons[index]} alt={`Icon for ${subreddit} subreddit`} />
              <p>{subreddit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
