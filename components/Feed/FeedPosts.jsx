import React from "react";
import FeedPost from "./FeedPost";
import Navigation from "./Navigation";

const FeedPosts = () => {
  const postData = [
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
    },
    {
      pic: "/henry2.jpg",
      name: "@henry",
      time: "11:11:11 PM",
      post: "Tell your boyfriend if says he's got beef that I'm a vegetarian and I aint fuckin scared of him",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-center 0 ">
      {postData.map((feed, index) => (
        <FeedPost
          key={index}
          pic={feed.pic}
          name={feed.name}
          time={feed.time}
          post={feed.post}
        />
      ))}
      <Navigation/>
    </div>
  );
};

export default FeedPosts;