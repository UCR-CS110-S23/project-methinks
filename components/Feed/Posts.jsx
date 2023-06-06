import React from "react";
import Post from "./Post";

const Posts = ({ postData }) => {
  // const Posts = ({ postData }) => {
  // const postData = [
  //   {
  //     image: "/henry2.jpg",
  //     username: "@henry",
  //     date: "11:11:11 PM",
  //     text: "1 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
  //     tag: "Politics",
  //     id: "1",
  //   },
  //   {
  //     image: "/henry2.jpg",
  //     username: "@henry",
  //     date: "11:11:11 PM",
  //     text: "2 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
  //     tag: "Sports",
  //     id: "2",
  //   },
  //   {
  //     image: "/henry2.jpg",
  //     username: "@henry",
  //     date: "11:11:11 PM",
  //     text: "3 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
  //     tag: "Culture",
  //     id: "3",
  //   },
  // ];
  // console.log(postData);
  return (
    <div className="w-full flex flex-col justify-center gap-y-6">
      {postData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
