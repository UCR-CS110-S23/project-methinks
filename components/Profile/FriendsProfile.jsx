import React from "react";

const FriendsProfile = () => {
  return (
    <div className="w-full flex justify-center items-center bg-methinks-background my-4">
      <div className="w-[40%] flex flex-col justify-center items-center gap-y-8">
        <div className="gap-y-2 flex flex-col justify-center items-center">
          <div className="rounded-full bg-methinks-darkgray pr-1 w-[120px] h-[120px]" />
          <p className="text-methinks-white m-0 font-bold text-4xl">Name</p>
          <p className="text-methinks-lightgray m-0 font-medium text-2xl">
            @blah
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
