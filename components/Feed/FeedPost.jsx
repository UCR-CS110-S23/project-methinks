import React, { useState } from "react";
import Image from "next/image";
import BlueCloud from "@/components/SVGs/BlueCloud";
import BlackCloud from "../SVGs/BlackCloud";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FeedPost = () => {
  const [toggle, setToggle] = useState(false);
  const [newPostToggle, setPostToggle] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="bg-gray-200 w-1/2 flex flex-col rounded-xl gap-y-5 py-4 px-4 ">
        <div className="flex w-full">
          <div className="gap-x-4 w-3/4 flex justify-start items-center  ">
            <Image
              className="rounded-full"
              width="50"
              height="50"
              src={"/henry2.jpg"}
              alt="hot hot henry"
            />
            <div className="flex items-baseline gap-x-5">
              <div className=" text-black text-2xl font-semibold ">@mariam</div>
              <div className="text-[##77818A]  text-base ">8:30:05 PM</div>
            </div>
          </div>
          <div className="text-black text-2xl flex justify-end items-center w-full">
            Politics
          </div>
        </div>

        <div className="text-black text-4xl pl-5 font-normal">
          i am mariam and you are golwalla, we are 5 weeks from graduating
        </div>
        <div className=" flex justify-end text-3xl w-full  items-center">
          {toggle ? (
            <AiFillHeart
              className="hover: cursor-pointer"
              onClick={() => {
                setCounter(counter - 1);
                setToggle(!toggle);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="hover: cursor-pointer"
              onClick={() => {
                setCounter(counter + 1);
                setToggle(!toggle);
              }}
            />
          )}

          <div className="pl-2"> {counter}</div>
        </div>
      </div>
      {newPostToggle ? (
        <button onMouseLeave={() => setPostToggle(false)}>
          <BlackCloud />
        </button>
      ) : (
        <button onMouseEnter={() => setPostToggle(true)}>
          <BlueCloud />
        </button>
      )}
    </div>
  );
};

export default FeedPost;
