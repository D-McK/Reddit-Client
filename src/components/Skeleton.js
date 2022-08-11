import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader className="loading-content">
      <rect x="0" y="0" width="750" height="150" />
    </ContentLoader>
  );
};
