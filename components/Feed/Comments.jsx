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
  ];
  // WHAT IF NO COMMENTS?
  return (
    <div className="h-full w-1/2 bg-[#1C1C1C] p-5">
      <div className="flex w-full h-full flex-col justify-between gap-y-10">
        <div
          className={`${
            commentData.length > 6 ? `h-[51.5rem]` : ``
          } overflow-y-auto scrollbar-none`}
        >
          {/* <div
          className={`${
            commentData.length > 3 ? `h-[52rem]` : ``
          } overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-rparts-bannerGray`}
        > */}
          <p className="mb-5 font-semibold text-2xl text-white">Comments</p>
          {/* <span className="">X</span> */}
          {/* </div> */}
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
        <div className="bg-white rounded-3xl text-black flex items-center w-full px-4 py-2">
          <input
            name="comment"
            type="text"
            placeholder="Expand this thought..."
            className="w-full bg-white focus:outline-none"
          />
          <p className="">{`>`}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;