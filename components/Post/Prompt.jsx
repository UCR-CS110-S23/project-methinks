import React from "react";

const PromptPost = () => {
  return (
    <div className="w-full h-full bg-[#77818A] rounded-xl relative z-[5]">
      <p className="text-white text-2xl font-bold p-6 pb-0">Prompt</p>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal bg-[#77818A] text-white"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default PromptPost;
