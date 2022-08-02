import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchSubreddit,
  selectPosts,
  selectStatus,
  selectSubreddit,
} from "../store/subredditSlice";
import "./Subreddit.css";

import { BsChatLeft } from "react-icons/bs";
import { postSelected, selectPost } from "../store/postSlice";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedPosts = useSelector(selectPosts);
  const selectedSubreddit = useSelector(selectSubreddit);
  const loadingStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchSubreddit(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  if (loadingStatus === "loading" || selectedPosts.length === 0) {
    return (
      <div>
        <h1>Loading Posts...</h1>
      </div>
    );
  }

  if (loadingStatus === "failed") {
    return (
      <div>
        <h1>Sorry that subreddit doesn't exist</h1>
      </div>
    );
  }

  return (
    <div>
      {console.log(selectedPosts)}
      {selectedPosts.map((post, index) => {
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
              <text className="subreddit-from">r/{post.data.subreddit}</text>
            </div>
          </div>
        );
      })}
    </div>
  );
};
