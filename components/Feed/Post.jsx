import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ post }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

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

  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push(`/profile/${post.uid}`);
  };
  return (
    <Link
      href={`/feed/${post.tid}`}
      className="flex justify-center drop-shadow-xl hover:shadow-2xl hover:scale-[1.0025] hover:shadow-methinks-black duration-300 cursor-pointer rounded-xl font-publicSans no-underline relative"
    >
      <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-5 p-5 pr-7">
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center">
            <Image
              src={post.image}
              alt="hot hot henry"
              referrerPolicy="no-referrer"
              className="rounded-full hover:opacity-70 duration-300"
              width="50"
              height="50"
              draggable={false}
              onClick={handleProfileClick}
            />
            <div className="flex items-baseline gap-x-5">
              <div
                className=" text-black text-2xl font-medium hover:text-methinks-darkgrayHover duration-300"
                onClick={handleProfileClick}
              >
                {post.username}
              </div>
              <div className="text-[##77818A] text-base ">{post.date}</div>
            </div>
          </div>
          <div className="text-methinks-darkpurple text-lg flex justify-end items-center w-full">
            {post.tag}
          </div>
        </div>

        <div className="text-black text-2xl pl-5 font-normal break-words">
          {post.text}
        </div>
        <div className=" flex justify-end text-2xl w-full  items-center text-methinks-black gap-x-1 duration-300 select-none">
          {toggle ? (
            <AiFillHeart
              className="cursor-pointer hover:text-methinks-darkgray"
              onClick={handleUnlike}
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer hover:text-methinks-darkgray"
              onClick={handleLike}
            />
          )}
          <span className="text-2xl">{counter}</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
