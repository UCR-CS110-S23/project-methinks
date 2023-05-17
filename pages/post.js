import React from "react";
import Cards from "@/components/Post/Cards";
import Tags from "@/components/Post/Tags";

const Post = () => {
  return (
    // <>
    <div className="bg-methinks-background h-full w-full flex flex-col justify-center items-center">
      <div className="w-[55%] h-full flex flex-col justify-center items-center gap-y-10">
        <Cards />
        <div className="flex flex-col justify-center items-center gap-y-10">
          <Tags />
          <div className="flex w-full justify-between items-center">
            <p className="text-white font-semibold text-lg">
              Make this thought private?
            </p>
            <input
              type="checkbox"
              className="toggle toggle-custom-primary bg-gray-400 checked:bg-methinks-green"
            />
          </div>
        </div>
      </div>
      <button className="self-end bg-[#FFFFFF] p-1 px-5 rounded-3xl font-medium text-lg text-black hover:bg-methinks-green -translate-x-32 -translate-y-14">
        Post
      </button>
    </div>
    // </>
  );
};

export default Post;
