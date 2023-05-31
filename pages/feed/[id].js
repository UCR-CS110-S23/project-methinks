// add the post with comments here
import React from "react";

import Comments from "@/components/Feed/Comments";

const CommentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Comments />
    </div>
  );
};

export default CommentPage;
