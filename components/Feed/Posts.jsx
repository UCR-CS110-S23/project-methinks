import React from "react";
import Post from "./Post";

const Posts = () => {
  const postData = [
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "1 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Politics",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "2 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Sports",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "3 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Culture",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "4 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Music",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "5 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "6 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "7 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "8 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-center">
      {postData.map((feed, index) => (
        <Post
          key={index}
          pic={feed.pic}
          name={feed.name}
          time={feed.time}
          post={feed.post}
          tag={feed.tag}
        />
      ))}
    </div>
  );
};

export default Posts;
