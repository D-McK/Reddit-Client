import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "./Skeleton";
import {
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
import { PostComments } from "./PostComments";
import "./Subreddit.css";

export const Subreddit = () => {
  const dispatch = useDispatch();

  const selectedPosts = useSelector(selectPosts);
  const selectedSubreddit = useSelector(selectSubreddit);
  const loadingStatus = useSelector(selectStatus);

  const isCommentsOpen = useSelector(selectedPostCommentsOpened);
  const postComments = useSelector(selectPost);

  const loadingArr = [];
  for (let i = 0; i < 4; i++) {
    loadingArr.push(
      <div className="post" key={i}>
        <Skeleton />
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchSubreddit(selectedSubreddit));
    dispatch(clearComments());
  }, [selectedSubreddit, dispatch]);

  if (loadingStatus === "failed") {
    return (
      <div>
        <h1>Sorry that subreddit doesn't exist</h1>
      </div>
    );
  }

  return (
    <div>
      {loadingStatus === "loading" || selectedPosts.length === 0
        ? loadingArr
        : selectedPosts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <li key={index}>{post.data.title}</li>
                {post.data.url.includes("i.redd.it") ? (
                  <img src={post.data.url} alt={post.data.subreddit} />
                ) : null}
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
                  <p className="subreddit-from">r/{post.data.subreddit}</p>
                </div>
                {isCommentsOpen && post.data.permalink === postComments ? (
                  <PostComments />
                ) : null}
              </div>
            );
          })}
    </div>
  );
};
