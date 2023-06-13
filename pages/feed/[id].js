import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { getPostData } from "@/lib/posts";
import Post from "@/components/Feed/Post";
import Comments from "@/components/Feed/Comments";
import { FaChevronLeft } from "react-icons/fa";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";

export default function CommentsPage({ postData }) {
  const post = JSON.parse(postData)[0];
  const router = useRouter();
  const [newPostToggle, setNewPostToggle] = useState(false);

  if (!post) {
    router.replace("/404");
    return;
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <p className="absolute left-[20%] top-[10%] flex items-center text-methinks-lightgray hover:text-methinks-lightgrayHover duration-300 cursor-pointer text-lg">
        <FaChevronLeft className="text-2xl" />
        <span onClick={() => router.back()}>Back</span>
      </p>
      <div className="w-[40%] h-full py-10 flex flex-col gap-y-5">
        <Post post={post} type="comments" />
        <Comments postID={post.tid} commentsData={post.comments.reverse()} />
      </div>
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
  );
}

export async function getServerSideProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
