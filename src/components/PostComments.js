import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments, selectPost } from "../store/postSlice";

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
      <div>
        <h1>Loading Comments...</h1>
      </div>
    );
  }

  return (
    <div className="comment-chain">
      {commentsForPost.map((comment) => {
        return <li className="comment">{comment.data.body}</li>;
      })}
    </div>
  );
};
