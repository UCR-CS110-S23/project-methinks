import React from "react";
import { useRouter } from "next/router";

import { getPostData } from "@/lib/posts";
import Post from "@/components/Feed/Post";
import Comments from "@/components/Feed/Comments";

export default function CommentsPage({ postData }) {
  const post = JSON.parse(postData)[0];
  const router = useRouter();

  if (!post) {
    router.replace("/404");
    return;
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-1/2 m-2">
        <Post post={post} />
      </div>
      <Comments />
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
