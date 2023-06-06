import React from "react";
import { useRouter } from "next/router";

import { getPostData } from "@/lib/posts";
import Post from "@/components/Feed/Post";
import Comments from "@/components/Feed/Comments";
import { FaChevronLeft } from "react-icons/fa";

export default function CommentsPage({ postData }) {
  const post = JSON.parse(postData)[0];
  const router = useRouter();

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
        <Comments />
      </div>
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
