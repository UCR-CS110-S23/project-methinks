import React, { useState } from "react";
import FeedPosts from "@/components/Feed/FeedPosts";
import BlueCloud from "@/components/SVGs/BlueCloud";
import BlackCloud from "@/components/SVGs/BlackCloud";

const Feed = () => {
  const [newPostToggle, setPostToggle] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center m-2 ">
      <div className="">
        <FeedPosts />
      </div>

      <div className="w-full flex justify-end pr-8">
        {newPostToggle ? (
          <button onMouseLeave={() => setPostToggle(false)}>
            <BlackCloud />
          </button>
        ) : (
          <button onMouseEnter={() => setPostToggle(true)}>
            <BlueCloud classname="fixed-top" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Feed;
