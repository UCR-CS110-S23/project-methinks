import React from "react";

const ThoughtPost = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl relative translate-x-6 z-[5]">
      {/* <div className="bg-white w-1/2 h-1/2 rounded-xl relative translate-x-8 z-[10]"> */}
      <p className="text-[#1C1C1C] text-3xl font-bold p-8">Thought</p>
      <textarea
        name="thought"
        id=""
        className="focus:outline-none resize-none w-full h-2/3 px-8 text-4xl font-normal bg-white text-[#1C1C1C]"
        // className="focus:outline-none resize-none w-full h-2/3 px-8 text-4xl font-normal text-[#77818A]"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default ThoughtPost;
