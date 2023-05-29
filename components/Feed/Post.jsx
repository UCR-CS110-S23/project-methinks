import React, { useState } from "react";
import Image from "next/image";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ pic, name, time, text, tag }) => {
  const [toggle, setToggle] = useState(false);

  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-5 p-5 pr-7 m-2 ">
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center  ">
            <Image
              className="rounded-full"
              width="50"
              height="50"
              src={pic}
              alt="hot hot henry"
            />
            <div className="flex items-baseline gap-x-5">
              <div className=" text-black text-2xl font-medium">{name}</div>
              <div className="text-[##77818A] text-base ">{time}</div>
            </div>
          </div>
          <div className="text-methinks-purple text-2xl flex justify-end items-center w-full">
            {tag}
          </div>
        </div>

        <div className="text-black text-3xl pl-5 font-normal">{text}</div>
        <div className=" flex justify-end text-2xl w-full  items-center text-methinks-black gap-x-1 hover:text-methinks-darkgray duration-300 select-none">
          {toggle ? (
            <AiFillHeart
              className="cursor-pointer"
              onClick={() => {
                setCounter(counter - 1);
                setToggle(!toggle);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer"
              onClick={() => {
                setCounter(counter + 1);
                setToggle(!toggle);
              }}
            />
          )}
          <span className="text-2xl">{counter}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
