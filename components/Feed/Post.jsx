import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ id, pic, name, time, post, tag }) => {
  const [toggle, setToggle] = useState(false);

  const [counter, setCounter] = useState(0);

  return (
    <Link className="flex justify-center no-underline" href={`/feed/${id}`}>
      <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-5 py-4 px-4 m-2 ">
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center  ">
            <Image
              className="rounded-full"
              width="50"
              height="50"
              src={pic}
              alt="hot hot henry"
              draggable={false}
            />
            <div className="flex items-baseline gap-x-5">
              <div className=" text-black text-2xl font-semibold ">{name}</div>
              <div className="text-[##77818A]  text-base  ">{time}</div>
            </div>
          </div>
          <div className="text-methinks-purple text-2xl flex justify-end items-center w-full ">
            {tag}
          </div>
        </div>

        <div className="text-black text-4xl pl-5 font-normal ">{post}</div>
        <div className=" flex justify-end text-3xl w-full  items-center">
          {toggle ? (
            <AiFillHeart
              className="hover:cursor-pointer"
              onClick={() => {
                setCounter(counter - 1);
                setToggle(!toggle);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="hover:cursor-pointer"
              onClick={() => {
                setCounter(counter + 1);
                setToggle(!toggle);
              }}
            />
          )}

          <div className="pl-2 no-underline"> {counter}</div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
