import React from "react";
import ThoughtPost from "./ThoughtPost";
import Tags from "./Tags";

const Post = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center gap-y-20 pt-20">
      <div className="w-[55%] h-1/2 flex">
        <ThoughtPost />
        <div className="bg-[#77818A] h-full min-w-[10%] flex items-start justify-end pt-6 pr-4 rounded-xl rounded-l-none relative translate-x-4 z-[3]">
          <p
            className="text-white text-start relative font-bold text-3xl rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Prompt
          </p>
        </div>
        <div className="bg-[#BABFF6] h-full min-w-[10%] flex items-start justify-end pt-6 pr-4 rounded-xl rounded-l-none relative translate-x-2 z-[2]">
          <p
            className="text-start text-black relative font-bold text-3xl rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Fleeting Thought
          </p>
        </div>
        <div className="bg-[#1C1C1C] h-full min-w-[10%] flex items-start justify-end pt-6 pr-4 rounded-xl rounded-l-none">
          <p
            className="text-white text-start relative font-bold text-3xl rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Thinking Out Loud
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <Tags />
        <div className="flex flex-col gap-y-10 w-full">
          <div className="flex justify-between items-center">
            <p className="text-white font-semibold text-2xl">
              Make this thought private?
            </p>
            <input
              type="checkbox"
              className="toggle toggle-custom-primary bg-white checked:bg-[#BABFF6]"
            />
          </div>
          {/* <button className="self-end bg-white p-1 px-10 rounded-3xl font-medium text-2xl">
            Post
          </button> */}
        </div>
      </div>
      <button className="self-end bg-[#F7DEED] p-1 px-10 rounded-3xl font-medium text-2xl -translate-x-40 -translate-y-10 text-black">
        Post
      </button>
    </div>
  );
};

export default Post;
