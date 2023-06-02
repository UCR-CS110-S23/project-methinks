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
          image="/henry2.jpg"
          username="mariam"
          date="1:11"
          text="i love you"
          tag="sports"
        />
      </div>
      <Comments />
    </div>
  );
};

export default CommentPage;
