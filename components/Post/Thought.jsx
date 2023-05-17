import React from "react";

const ThoughtPost = () => {
  return (
    <div className="w-full h-full bg-methinks-white rounded-xl relative z-[6]">
      <p className="text-methinks-lightblack text-2xl font-bold p-6 pb-0">
        Thought
      </p>
      <textarea
        name="thought"
        className="bg-white focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal  text-methinks-lightblack"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default ThoughtPost;
