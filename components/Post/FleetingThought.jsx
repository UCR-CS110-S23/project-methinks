import React from "react";

const Fleeting = () => {
  return (
    <div className="w-full h-full bg-methinks-purple rounded-xl relative z-[5] p-6">
      <div className="flex justify-between items-baseline w-full">
        <p className="text-methinks-black text-2xl font-bold pb-0">
          Fleeting Thought
        </p>
        <div className="text-lg font-medium bg-white rounded-md px-3">2:00</div>
      </div>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-2/3 text-3xl font-normal bg-methinks-purple text-methinks-black"
        placeholder="Quick, first thought that comes to mind!"
      />
    </div>
  );
};

export default Fleeting;
