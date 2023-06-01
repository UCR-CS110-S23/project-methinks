import React from "react";

const Comment = ({ img, username, date, text }) => {
  return (
    <div className="bg-white w-full flex flex-col rounded-xl gap-y-5 pt-4 pb-8 px-4">
      <div className="flex gap-x-4 items-center">
        <div className="text-[##77818A] text-base ">{img}</div>
        <p className="text-black font-medium text-xl p-0 m-0">{username}</p>
        <p className="text-[##77818A] text-base p-0 m-0">{date}</p>
      </div>
      <div className="text-black text-2xl pl-5 font-normal">{text}</div>
    </div>
  );
};

export default Comment;
