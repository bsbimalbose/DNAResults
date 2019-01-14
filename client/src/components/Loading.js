import React from "react";
import loadingImage from "../images/loading.gif";
export default function Loading() {
  return (
    <div>
      <img src={loadingImage} alt="logo" />
      <div>Loading ...</div>
    </div>
  );
}
