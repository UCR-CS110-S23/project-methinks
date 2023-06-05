import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getAllPostData } from "@/lib/posts";
import Posts from "@/components/Feed/Posts";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";

import Tags from "@/components/Feed/Tags";

export default function Feed({ postData }) {
  const [newPostToggle, setNewPostToggle] = useState(false);

  return (
    <div className="h-full bg-methinks font-publicSans">
      <div className="w-full relative flex flex-col justify-center items-center gap-y-10 py-5 pb-20">
        <div className="max-w-3/4 h-[50px] flex justify-center">
          <Tags />
        </div>
        {postData.length === 0 ? (
          <div className="text-white flex flex-col gap-y-2 justify-center items-center text-3xl w-[40%] h-[750px] font-semibold">
            <p>{"Everyone's asleep but your mind is alive..."}</p>
            <p>Speak your Truth!</p>
          </div>
        ) : (
          <div className="w-[40%] h-full">
            <Posts postData={postData} />
          </div>
        )}

        <Link
          href="/post"
          className="fixed right-[12%] bottom-[10%] z-[20] hover:drop-shadow-glow duration-300"
        >
          <div className="hover:text-methinks-darkgray">
            {newPostToggle ? (
              <Image
                src={hovercloud}
                alt="hover cloud img"
                className="cursor-pointer scale-95 duration-[400ms]"
                onMouseLeave={() => setNewPostToggle(false)}
              />
            ) : (
              <Image
                src={mintcloud}
                alt="mint cloud img"
                className="cursor-pointer scale-105 duration-[400ms]"
                onMouseEnter={() => setNewPostToggle(true)}
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const postData = await getAllPostData();
  return {
    props: {
      postData: postData.reverse(),
    },
  };
}
