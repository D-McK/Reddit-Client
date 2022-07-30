import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSubreddit,
  selectPosts,
  selectStatus,
  selectSubreddit,
} from "../store/subredditSlice";
import "./Subreddit.css";

export const Subreddit = () => {
  const dispatch = useDispatch();

  const selectedPosts = useSelector(selectPosts);
  const selectedSubreddit = useSelector(selectSubreddit);
  const loadingStatus = useSelector(selectStatus);

  useEffect(() => {
    console.log(loadingStatus);
    if (loadingStatus === "idle") {
      dispatch(fetchSubreddit(selectedSubreddit));
    }
  }, [dispatch, loadingStatus, selectedPosts, selectedSubreddit]);

  if (loadingStatus === "loading" || selectedPosts.length === 0) {
    return (
      <div>
        <h1>Loading Posts...</h1>
      </div>
    );
  }

  return (
    <div>
      {selectedPosts[0].map((post, index) => {
        return (
          <div className="post" key={index}>
            {console.log(post)}
            <li key={index}>{post.data.title}</li>
            {post.data.url.includes("i.redd.it") ? (
              <img src={post.data.url} alt={post.data.subreddit} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
