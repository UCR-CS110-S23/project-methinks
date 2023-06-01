// add the post with comments here
import React from "react";
import Post from "@/components/Feed/Post";
import Comments from "@/components/Feed/Comments";

const CommentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-1/2 m-2">
        <Post
          id={1}
          pic="/henry2.jpg"
          name="mariam"
          time="1:11"
          post="i love you"
          tag="sports"
        />
      </div>
      <Comments />
    </div>
  );
};

export default CommentPage;
