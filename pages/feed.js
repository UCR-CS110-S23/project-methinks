import React, { useState } from "react";
import FeedPosts from "@/components/Feed/FeedPosts";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";
import Image from "next/image";

const Feed = () => {
  const [newPostToggle, setPostToggle] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center m-2  ">
      <div className="">
        <FeedPosts />
      </div>

      <div className="w-full flex justify-end">
        {newPostToggle ? (
          <button onMouseLeave={() => setPostToggle(false)}>
            <Image src={hovercloud} alt="hover cloud img" />
          </button>
        ) : (
          <button onMouseEnter={() => setPostToggle(true)}>
            <Image src={mintcloud} alt="mint cloud img" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Feed;
