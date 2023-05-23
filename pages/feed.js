import React, { useState } from "react";
import Posts from "@/components/Feed/Posts";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";
import Image from "next/image";

const Feed = () => {
  const [newPostToggle, setPostToggle] = useState(false);
  return (
    <div className="w-full relative flex flex-col justify-center items-center py-5">
      <div className="w-1/2">
        <Posts />
      </div>

      <div className="fixed right-[12%] bottom-[12%] z-[20]">
        {newPostToggle ? (
          <Image
            src={hovercloud}
            alt="hover cloud img"
            onMouseLeave={() => setPostToggle(false)}
          />
        ) : (
          <Image
            src={mintcloud}
            alt="mint cloud img"
            onMouseEnter={() => setPostToggle(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Feed;
