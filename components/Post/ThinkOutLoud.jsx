import React from "react";

const Fleeting = () => {
  return (
    <div className="w-full h-full bg-methinks-lightblack rounded-xl relative z-[5]">
      <p className="text-white text-2xl font-bold p-6 pb-0">
        Thinking Out Loud
      </p>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal text-methinks-white bg-methinks-lightblack text-whhite"
        placeholder="Speak now or forever hold your peace!"
      />
    </div>
  );
};

export default Fleeting;
