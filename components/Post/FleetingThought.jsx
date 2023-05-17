import React from "react";

const Fleeting = () => {
  return (
    <div className="w-full h-full bg-methinks-purple rounded-xl relative z-[5]">
      <p className="text-methinks-black text-2xl font-bold p-6 pb-0">
        Fleeting Thought
      </p>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal bg-methinks-purple text-methinks-black"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default Fleeting;
