import React from "react";

const PromptPost = () => {
  return (
    <div className="w-full h-full text-methinks-black bg-methinks-lightgray rounded-xl relative z-[5] p-6">
      <p className="text-2xl font-bold pb-0">Prompt</p>
      <p className="text-2xl font-semibold pb-0">What makes a bad friend?</p>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-2/3 text-3xl font-normal bg-methinks-lightgray"
        placeholder="________________."
      />
    </div>
  );
};

export default PromptPost;
