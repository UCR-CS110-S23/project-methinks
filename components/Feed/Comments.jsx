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
    {
      img: "Profile",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    // {
    //   img: "Profile",
    //   username: "@blah",
    //   date: "08:30:05 PM",
    //   text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    // },
    // {
    //   img: "Profile",
    //   username: "@blah",
    //   date: "08:30:05 PM",
    //   text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    // },
    // {
    //   img: "Profile",
    //   username: "@blah",
    //   date: "08:30:05 PM",
    //   text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    // },
  ];
  return (
    <div className="h-full w-1/2 bg-[#1C1C1C] p-5">
      <div className="flex w-full h-full flex-col gap-y-8">
        <p className="font-semibold text-2xl text-white">Comments</p>
        {commentData.length === 0 ? (
          <div className="h-[47rem] flex justify-center items-center">
            <div className="text-white text-center text-2xl flex flex-col font-semibold">
              <p>The minds are calm and quiet...</p>
              <p>Be the first to build on this thought!</p>
            </div>
          </div>
        ) : (
          <div className="h-[47rem] overflow-y-auto scrollbar-none">
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
        )}
        <div className="bg-white rounded-3xl text-black flex items-center w-full px-4 py-2">
          <input
            name="comment"
            type="text"
            placeholder="Expand this thought..."
            className="w-full bg-white focus:outline-none"
          />
          <p className="cursor-pointer">{`>`}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
