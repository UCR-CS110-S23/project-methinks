import React from "react";
import Image from "next/image";
import Posts from "../Feed/Posts";
import { BsChat } from "react-icons/bs";
import Link from "next/link";

const FriendsProfile = ({ user, todayPosts, previousPosts }) => {
  return (
    <div
      className={`w-full h-full min-h-screen flex justify-center items-start bg-methinks-background py-4 pb-20`}
    >
      <div className="w-[40%] h-full flex flex-col justify-start items-center gap-y-8">
        <div className="gap-y-1 flex flex-col justify-center items-center">
          <Image
            referrerPolicy="no-referrer"
            src={user.image}
            alt="Profile Picture"
            width={120}
            height={120}
            quality={100}
            className="rounded-full bg-methinks-darkgray "
          />
          <p className="text-methinks-white m-0 font-bold text-4xl">
            {user.name}
          </p>
          <p className="text-methinks-lightgray m-0 font-medium text-2xl">
            @{user.username}
          </p>
          <p className="text-methinks-lightgray m-0 font-medium text-lg">
            Feelin Supersonic
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-3 gap-y-5">
          <div className="flex w-full justify-between items-center">
            <p className="text-methinks-white m-0 font-bold text-4xl pl-4">
              Today
            </p>
            <Link
              href="/chat"
              className="flex items-center gap-x-4 m-0 p-1 px-4 rounded-3xl font-medium text-lg text-black bg-methinks-green  hover:text-methinks-black duration-300 cursor-pointer hover:drop-shadow-glow"
            >
              <p className="m-0">Message</p>
              <p className="m-0">
                <BsChat />
              </p>
            </Link>
          </div>

          <div className="w-full h-full flex flex-col gap-y-5 bg-methinks-gray p-4 rounded-xl">
            {todayPosts.length === 0 ? (
              <p>No thoughts yet, just vibes!</p>
            ) : (
              <Posts postData={todayPosts} type="today" />
            )}
          </div>
        </div>
        {previousPosts.length === 0 ? (
          <>
            <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
              This Week
            </p>
            <div className="w-full h-1/12 flex flex-col gap-y-5 bg-methinks-gray p-4 rounded-xl">
              <p>{"Head empty all week :("} </p>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-5 mb-5">
            <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
              This Week
            </p>
            <div className="w-full max-h-[750px] bg-methinks-gray p-4 rounded-xl overflow-y-auto">
              <div className="flex flex-col gap-y-5">
                <Posts postData={previousPosts} type="previous" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsProfile;
