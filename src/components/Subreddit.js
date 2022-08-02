import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./Skeleton";
import {
  fetchSubreddit,
  selectPosts,
  selectStatus,
  selectSubreddit,
} from "../store/subredditSlice";
import { clearComments, postSelected } from "../store/postSlice";

import { BsChatLeft } from "react-icons/bs";
import "./Subreddit.css";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedPosts = useSelector(selectPosts);
  const selectedSubreddit = useSelector(selectSubreddit);
  const loadingStatus = useSelector(selectStatus);

  const loadingArr = [];
  for (let i = 0; i < 4; i++) {
    loadingArr.push(
      <div className="post">
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
                  <text
                    className="comments"
                    onClick={() => {
                      dispatch(postSelected(post.data.permalink));
                      navigate("/comments");
                    }}
                  >
                    <BsChatLeft className="chat-icon" />
                    {`${post.data.num_comments} Comments`}
                  </text>
                  <text className="subreddit-from">
                    r/{post.data.subreddit}
                  </text>
                </div>
              </div>
            );
          })}
    </div>
  );
};
