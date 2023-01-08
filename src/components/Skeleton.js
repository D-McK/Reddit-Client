import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader
      className="loading-content"
      backgroundColor="#3f3f3f"
      foregroundColor="#1f1f1f"
      width={700}
      height={200}
    >
      <rect x="0" y="0" width="750" height="650" />
    </ContentLoader>
  );
};
