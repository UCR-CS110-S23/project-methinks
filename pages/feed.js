import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Posts from "@/components/Feed/Posts";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";
import Image from "next/image";

import Tags from "@/components/Feed/Tags";
const Feed = () => {
  const [newPostToggle, setPostToggle] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-center items-center gap-y-10 py-10 pb-20">
      <div className="max-w-3/4 h-[50px] flex justify-center">
        <Tags />
      </div>
      <div className="w-[40%]">
        <Posts />
      </div>

      <div
        className="fixed right-[12%] bottom-[10%] z-[20]"
        onClick={() =>
          signOut({
            callbackUrl: "/signin",
          })
        }
      >
        <div className="hover:text-methinks-darkgray">
          {newPostToggle ? (
            <Image
              src={hovercloud}
              alt="hover cloud img"
              className="cursor-pointer"
              onMouseLeave={() => setPostToggle(false)}
            />
          ) : (
            <Image
              src={mintcloud}
              alt="mint cloud img"
              className="cursor-pointer"
              onMouseEnter={() => setPostToggle(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
