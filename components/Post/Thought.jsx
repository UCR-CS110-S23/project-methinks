import React from "react";

const ThoughtPost = ({ text, setText }) => {
  return (
    <div className="w-full h-full bg-methinks-white rounded-xl relative z-[6] shadow-2xl">
      <p className="text-methinks-lightblack text-2xl font-bold p-6 pb-0">
        Thought
      </p>
      <textarea
        name="thought"
        value={text}
        placeholder="What's on your mind?"
        className="bg-white focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal  text-methinks-lightblack"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ThoughtPost;
