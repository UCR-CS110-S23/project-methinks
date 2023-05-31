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
      id: "1",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "2 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Sports",
      id: "2",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "3 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Culture",
      id: "3",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "4 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Music",
      id: "4",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "5 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "5",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "6 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "6",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "7 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "7",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "8 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "8",
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
          id={feed.id}
        />
      ))}
    </div>
  );
};

export default Posts;
