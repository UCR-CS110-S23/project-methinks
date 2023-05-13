import React from "react";
import Comment from "./Comment";

const Comments = () => {
  const commentData = [
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
  ];

  return (
    <div className="h-screen w-1/2 bg-[#1C1C1C] p-5">
      <div className="flex justify-between items-center mb-5 font-semibold text-2xl text-white">
        <p className="">Comments</p>
        <span className="">X</span>
      </div>
      <div className="gap-y-5 flex flex-col">
        {commentData.map((comment, index) => (
          <Comment
            key={index}
            img={comment.img}
            username={comment.username}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
