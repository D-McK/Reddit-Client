import React, { useEffect, useState } from "react";
import { getFrontPage } from "../api/RedditAPIs";
import "./Subreddit.css";

export const Subreddit = () => {
  const [subredditInfo, setSubredditInfo] = useState([]);

  useEffect(() => {
    const getPage = async () => {
      const data = await getFrontPage();
      console.log(data);
      setSubredditInfo(data);
    };
    getPage();
  }, []);
  //{subredditInfo.map((post) => console.log(post.data))}

  return (
    <div>
      {subredditInfo.map((post) => {
        return (
          <div className="post">
            <li>{post.data.title}</li>
            {post.data.url.includes("i.redd.it") ? (
              <img src={post.data.url} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
