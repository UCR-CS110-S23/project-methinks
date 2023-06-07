import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TiLockClosed } from "react-icons/ti";

const Post = ({ post, type }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(post.likes);

  useEffect(() => {
    const like = { uid: session?.user?.uid, tid: post.tid };
    axios
      .post("/api/checkLike", like)
      .then(({ data }) => {
        if (data.userAlreadyLiked) {
          setToggle(true);
        }
      })
      .catch((error) => {
        console.log("[Like-Error]", error);
      });
  }, []);

  const handleUnlike = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
    setToggle(!toggle);

    const like = { uid: session?.user?.uid, tid: post.tid };
    axios
      .post("/api/unlike", like)
      .then(({ data }) => {
        if (data.success) {
          setCounter(response);
        }
      })
      .catch((error) => {
        console.log("[Unlike-Error]", error);
      });
  };

  const handleLike = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setToggle(!toggle);

    const like = { uid: session?.user?.uid, tid: post.tid };
    axios
      .post("/api/like", like)
      .then(({ data }) => {
        if (data.success) {
          setCounter(response);
        }
      })
      .catch((error) => {
        console.log("[Like-Error]", error);
      });
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push(`/profile/${post.uid}`);
  };
  return (
    <a
      href={!post.public || type === "comments" ? null : `/feed/${post.tid}`}
      className={`${
        type === "comments"
          ? `text-white`
          : `drop-shadow-xl hover:shadow-2xl hover:scale-[1.0025] hover:shadow-methinks-black`
      } flex justify-center duration-300 rounded-xl font-publicSans no-underline relative ${
        post.public && type !== "comments" && `cursor-pointer`
      }`}
    >
      <div
        className={`${
          type === "comments"
            ? `bg-methinks-lightblack cursor-auto	`
            : `bg-gray-200 duration-300`
        } w-full flex flex-col rounded-xl gap-y-5 p-5 pr-7`}
      >
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center">
            <Image
              src={post.image}
              alt="hot hot henry"
              referrerPolicy="no-referrer"
              className="rounded-full hover:opacity-70 duration-300 cursor-pointer"
              width="50"
              height="50"
              draggable={false}
              onClick={handleProfileClick}
            />
            <div className="flex items-baseline gap-x-5">
              <div
                className={`${
                  type === "comments"
                    ? `text-methinks-white`
                    : `text-methinks-black `
                } hover:text-methinks-darkgray text-xl font-semibold duration-300 cursor-pointer`}
                onClick={handleProfileClick}
              >
                @{post.username}
              </div>
              <div
                className={`${
                  type === "comments"
                    ? `text-methinks-lightgrayHover`
                    : `text-methinks-darkgray`
                } text-base`}
              >
                {post.date}
              </div>
            </div>
          </div>
          <div
            className={`${
              type === "comments"
                ? `text-methinks-purple`
                : `text-methinks-darkpurple`
            } text-lg flex justify-end items-center w-full`}
          >
            {post.tag}
          </div>
        </div>

        <div
          className={`${
            type === "comments" ? `text-methinks-white` : `text-methinks-black `
          } text-2xl pl-5 font-normal break-words`}
        >
          {post.text}
        </div>
        <div
          className={`${
            type === "comments" ? `text-methinks-white` : `text-methinks-black `
          } flex justify-end text-2xl w-full  items-center gap-x-1 duration-300 select-none`}
        >
          {!post.public ? (
            <TiLockClosed className="text-3xl" />
          ) : (
            <>
              {toggle ? (
                <AiFillHeart
                  className="cursor-pointer hover:text-methinks-darkgray duration-300"
                  onClick={handleUnlike}
                />
              ) : (
                <AiOutlineHeart
                  className="cursor-pointer hover:text-methinks-darkgray duration-300"
                  onClick={handleLike}
                />
              )}
              <span className="text-2xl">{counter}</span>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default Post;
