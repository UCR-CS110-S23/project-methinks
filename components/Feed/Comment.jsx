import React from "react";
import Image from "next/image";

const Comment = ({ comment }) => {
  // const handleProfileClick = (e) => {
  //   e.preventDefault();
  //   router.push(`/profile/${comment.uid}`);
  // };
  return (
    <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-2 pt-4 pb-4 px-4">
      <div className="flex gap-x-4 items-center">
        <Image
          src={comment.image}
          alt="hot hot henry"
          referrerPolicy="no-referrer"
          className="rounded-full hover:opacity-70 duration-300 cursor-pointer"
          width="50"
          height="50"
          draggable={false}
          // onClick={handleProfileClick}
        />
        <p className="text-black font-medium text-lg p-0 m-0 hover:text-methinks-darkgray duration-300 cursor-pointer">
          {comment.username}
        </p>
        <p
          className="text-methinks-darkgray text-base p-0 m-0"
          // onClick={handleProfileClick}
        >
          {comment.date}
        </p>
      </div>
      <div className="text-black text-xl pl-5 font-normal">{comment.text}</div>
    </div>
  );
};

export default Comment;
