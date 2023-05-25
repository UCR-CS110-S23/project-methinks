import React, { useState } from "react";
import Posts from "@/components/Feed/Posts";
import SortButton from "@/components/Feed/SortButton";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";
import Image from "next/image";

import TopicBar from "@/components/Feed/TopicBar";

const Feed = () => {
  const [newPostToggle, setPostToggle] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-center items-center py-5">
      {/* MAYBE TAGS HERE? */}
      {/* <div className="flex bg-red-500">
        <div className="flex">
          <p className="text-methinks-white">Helo</p>
          <p className="text-methinks-white">Helo</p>
          <p className="text-methinks-white">Helo</p>
          <p className="text-methinks-white">Helo</p>
          <p className="text-methinks-white">Helo</p>
        </div> */}
      <div className="translate-y-20">
        <TopicBar />
      </div>
      {/* </div> */}
      <div className="w-1/2 mt-24">
        <Posts />
      </div>

      <div className="fixed right-[12%] bottom-[10%] z-[20]">
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
