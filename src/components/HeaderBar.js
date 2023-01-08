import React from "react";
import RedditLogo from "../image/Reddit_logo_new.png";

export const HeaderBar = () => {
  return (
    <div className="header-bar">
      <img src={RedditLogo} alt="reddit logo" />
    </div>
  );
};
