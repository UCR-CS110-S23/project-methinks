import React from "react";
import ThoughtPost from "./ThoughtPost";

const Post = () => {
  return (
    <div className="h-screen w-full bg-[#24292F] flex justify-center items-center">
      <ThoughtPost />
      {/* <div className="bg-[#77818A] h-1/2 min-w-[5%] flex items-start rounded-xl rounded-l-none relative translate-x-5 z-[5]">
        <p className="text-white writing-mode-sideways-rl transform -rotate-90 w-full text-start relative translate-y-14 font-bold text-3xl">
          Prompt
        </p>
      </div>
      <div className="bg-[#BABFF6] h-1/2 min-w-[5%] flex items-start rounded-xl rounded-l-none relative translate-x-2">
        <p className="text-white writing-mode-sideways-rl transform -rotate-90 w-full text-start relative translate-y-14 font-bold text-3xl bg-red-200">
          Fleeting
        </p>
      </div> */}
      <div className="bg-[#77818A] h-1/2 min-w-[5%] flex items-start justify-center pt-5 rounded-xl rounded-l-none relative translate-x-5 z-[2]">
        <p
          className="text-white text-start relative font-bold text-3xl rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Prompt
        </p>
      </div>
      <div className="bg-[#BABFF6] h-1/2 min-w-[5%] flex items-start justify-center pt-5 rounded-xl rounded-l-none relative translate-x-2">
        <p
          className="text-start relative font-bold text-3xl rotate-180 text-black"
          style={{ writingMode: "vertical-rl" }}
        >
          Fleeting
        </p>
      </div>
      <div className="bg-[#1C1C1C] h-1/2 min-w-[5%] flex items-start justify-center pt-5 rounded-xl rounded-l-none">
        <p
          className="text-white text-start relative font-bold text-3xl rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Thinking Out Loud
        </p>
        {/* <p className="text-white writing-mode-sideways-rl transform -rotate-90 w-full text-start relative translate-y-14 font-bold text-3xl">
          Think Out Loud
        </p> */}
      </div>
    </div>
  );
};

export default Post;
