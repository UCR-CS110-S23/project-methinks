import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ post }) => {
  const [toggle, setToggle] = useState(false);

  const [counter, setCounter] = useState(0);

  const handleUnlike = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
    setToggle(!toggle);
  };
  const handleLike = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setToggle(!toggle);
  };

  return (
    <Link
      href={`/feed/${post.tid}`}
      className="flex justify-center drop-shadow-xl hover:shadow-2xl hover:scale-[1.0035] hover:shadow-methinks-black duration-300 cursor-pointer rounded-xl font-publicSans no-underline relative"
    >
      <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-5 p-5 pr-7">
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center  ">
            <Link href={`/profile/${post.uid}`}>
              <Image
                src={post.image}
                alt="hot hot henry"
                referrerPolicy="no-referrer"
                className="rounded-full"
                width="50"
                height="50"
                draggable={false}
              />
            </Link>
            <div className="flex items-baseline gap-x-5">
              <Link
                href={`/profile/${post.uid}`}
                className=" text-black text-2xl font-medium"
              >
                {post.username}
              </Link>
              <div className="text-[##77818A] text-base ">{post.date}</div>
            </div>
          </div>
          <div className="text-methinks-darkpurple text-2xl flex justify-end items-center w-full">
            {post.tag}
          </div>
        </div>

        <div className="text-black text-2xl pl-5 font-normal break-words">
          {post.text}
        </div>
        <div className=" flex justify-end text-2xl w-full  items-center text-methinks-black gap-x-1 hover:text-methinks-darkgray duration-300 select-none">
          {toggle ? (
            <AiFillHeart className="cursor-pointer" onClick={handleUnlike} />
          ) : (
            <AiOutlineHeart className="cursor-pointer" onClick={handleLike} />
          )}
          <span className="text-2xl">{counter}</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
