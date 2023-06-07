import React from "react";
import Post from "./Post";

const Posts = ({ postData }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-y-6">
      {postData?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Navigation/> */}
    </div>
  );
};

export default Posts;
