import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader>
      <rect x="0" y="0" width="750" height="150" />
      <rect x="0" y="150" width="700" height="120" />
      <rect x="0" y="300" width="700" height="120" />
    </ContentLoader>
  );
};
