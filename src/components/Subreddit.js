import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Skeleton } from "./Skeleton";
import { PostComments } from "./PostComments";

import {
  changeSubreddit,
  fetchSubreddit,
  selectPosts,
  selectStatus,
  selectSubreddit,
} from "../store/subredditSlice";
import {
  checkPostSelected,
  clearComments,
  postSelected,
  selectedPostCommentsOpened,
  selectPost,
} from "../store/postSlice";

import { BsChatLeft } from "react-icons/bs";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import notFound from "../image/not_found.png";
import "./Subreddit.css";

export const Subreddit = () => {
  const dispatch = useDispatch();

  const selectedPosts = useSelector(selectPosts);
  const selectedSubreddit = useSelector(selectSubreddit);
  const loadingStatus = useSelector(selectStatus);

  const isCommentsOpen = useSelector(selectedPostCommentsOpened);
  const postComments = useSelector(selectPost);

  const loadingArr = [
    <div className="post">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>,
  ];

  useEffect(() => {
    dispatch(fetchSubreddit(selectedSubreddit));
    dispatch(clearComments());
  }, [selectedSubreddit, dispatch]);

  if (loadingStatus === "failed") {
    return (
      <div className="not-found">
        <h1>Sorry that subreddit doesn't exist</h1>
        <img src={notFound} alt="subreddit not found" />
      </div>
    );
  }
  console.log(selectedPosts);

  return (
    <div className="main-content">
      <div className="posts">
        {loadingStatus === "loading" || selectedPosts.length === 0
          ? loadingArr
          : selectedPosts
              .filter((post) => post.data.url.endsWith(".jpg"))
              .map((post, index) => {
                return (
                  <div className="post" key={index}>
                    <li key={index} className="title">
                      {post.data.title}
                    </li>
                    <div className="content">
                      <div className="votes">
                        <FaArrowUp
                          className="up-arrow"
                          fill="transparent"
                          strokeWidth={20}
                        />
                        <div className="upvotes">{post.data.ups}</div>
                        <FaArrowDown
                          className="down-arrow"
                          fill="transparent"
                          strokeWidth={20}
                        />
                      </div>
                      <img src={post.data.url} alt={post.data.title} />
                    </div>
                    <div className="under-info">
                      <p
                        className="comments"
                        onClick={() => {
                          dispatch(checkPostSelected());
                          dispatch(postSelected(post.data.permalink));
                        }}
                      >
                        <BsChatLeft className="chat-icon" />
                        {`${post.data.num_comments} Comments`}
                      </p>
                      <p
                        className="subreddit-from"
                        onClick={() => {
                          dispatch(changeSubreddit(post.data.subreddit));
                        }}
                      >
                        {post.data.subreddit}
                      </p>
                    </div>
                    {isCommentsOpen && post.data.permalink === postComments ? (
                      <PostComments />
                    ) : null}
                  </div>
                );
              })}
      </div>
    </div>
  );
};
