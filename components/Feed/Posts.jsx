import React from "react";
import Post from "./Post";

// import Navigation from "./Navigation";


const Posts = () => {
  const postData = [
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "1 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Politics",
      id: "1",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "2 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Sports",
      id: "2",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "3 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Culture",
      id: "3",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "4 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Music",
      id: "4",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "5 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "5",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "6 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "6",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "7 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "7",
    },
    {
      image: "/henry2.jpg",
      username: "@henry",
      date: "11:11:11 PM",
      text: "8 Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
      tag: "Entertainment",
      id: "8",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-center gap-y-6">
      {postData.map((feed, index) => (
        <Post
          key={index}
          id={feed.id}
          username={feed.username}
          image={feed.image}
          date={feed.date}
          text={feed.text}
          tag={feed.tag}
        />
      ))}
      {/* <Navigation/> */}
    </div>
  );
};

export default Posts;
