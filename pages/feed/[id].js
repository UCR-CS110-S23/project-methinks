import React from "react";

import { getAllPostIds, getPostData } from "@/lib/posts";
import Post from "@/components/Feed/Post";
import Comments from "@/components/Feed/Comments";

const CommentPage = ({ postData }) => {
  const post = JSON.parse(postData)[0];
  console.log(post);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-1/2 m-2">
        <Post
          id={post.id}
          image={post.image}
          username={post.username}
          date={post.date}
          text={post.text}
          tag={post.tag}
        />
      </div>
      <Comments />
    </div>
  );
};

export default CommentPage;

// check for valid dynamic routes
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// gets current route id's data
// localhost:3000/feed/[id]
export async function getStaticProps({ params }) {
  console.log(params.id);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
