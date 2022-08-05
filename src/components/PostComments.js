import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments, selectPost } from "../store/postSlice";

import { Skeleton } from "./Skeleton";

import "./PostComments.css";

export const PostComments = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector(selectPost);
  const commentsForPost = useSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments(selectedPost));
  }, [dispatch, selectedPost]);

  if (commentsForPost.length === 0) {
    return (
      <div className="loading">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="comment-chain">
      {commentsForPost
        .filter((comment) => comment.data.author !== "[deleted]")
        .map((comment, index) => {
          return (
            <div className="comment">
              <p className="author" key={"author: " + index}>
                {comment.data.author}
              </p>
              <li key={index} className="comment-contents">
                {comment.data.body}
              </li>
            </div>
          );
        })}
    </div>
  );
};
