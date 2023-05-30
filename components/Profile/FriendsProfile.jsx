import React from "react";
import Image from "next/image";

const FriendsProfile = ({ user }) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-methinks-background py-4">
      <div className="w-[40%] flex flex-col justify-center items-center gap-y-8">
        <div className="gap-y-1 flex flex-col justify-center items-center">
          <Image
            // src={"/henry2.jpg"}
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
          <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
            Today
          </p>
          <div className="w-full h-full flex flex-col gap-y-5 bg-methinks-gray p-4 rounded-xl">
            <div className="w-full h-[180px] bg-white rounded-xl"></div>
            <div className="w-full h-[180px] bg-white rounded-xl"></div>
            <div className="w-full h-[180px] bg-white rounded-xl"></div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-5 mb-5">
          <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
            Previous
          </p>
          <div className="w-full h-[750px] bg-methinks-gray p-4 rounded-xl overflow-y-auto">
            <div className="flex flex-col gap-y-5">
              <div className="w-full h-[180px] bg-white rounded-xl" />
              <div className="w-full h-[180px] bg-white rounded-xl" />
              <div className="w-full h-[180px] bg-white rounded-xl" />
              <div className="w-full h-[180px] bg-white rounded-xl" />
              <div className="w-full h-[180px] bg-white rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsProfile;
