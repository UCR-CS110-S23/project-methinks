import React from "react";

import Comment from "./Comment";
import { FiSend } from "react-icons/fi";

const Comments = () => {
  const commentData = [
    {
      image: "/henry2.jpg",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      image: "/henry2.jpg",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      image: "/henry2.jpg",
      username: "@blah",
      date: "08:30:05 PM",
      text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
  ];
  return (
    <div className="bg-[#1C1C1C] p-5 px-7 rounded-xl">
      <div className="flex w-full h-full flex-col gap-y-8">
        <p className="font-semibold text-2xl text-white">Comments</p>
        {commentData.length === 0 ? (
          <div className="h-[35rem] flex justify-center items-center">
            <div className="text-white text-center text-2xl flex flex-col font-semibold">
              <p>The minds are calm and quiet...</p>
              <p>Be the first to build on this thought!</p>
            </div>
          </div>
        ) : (
          <div className="max-h-[38rem] overflow-y-auto scrollbar-none">
            <div className="gap-y-5 flex flex-col">
              {commentData.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        )}
        <div className="bg-methinks-lightblack border-b-2 border-b-white text-white flex items-center w-full px-4 py-2 mb-2">
          <input
            name="comment"
            type="text"
            placeholder="Expand this thought..."
            className="w-full bg-methinks-lightblack focus:outline-none"
          />
          <FiSend className="text-lg " />
        </div>
      </div>
    </div>
  );
};

export default Comments;
