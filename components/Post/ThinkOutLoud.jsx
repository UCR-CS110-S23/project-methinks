import React from "react";
import { GiSoundWaves } from "react-icons/gi";

const Fleeting = () => {
  return (
    <div className="w-full h-full bg-methinks-lightblack rounded-xl relative z-[5] shadow-2xl">
      <p className="text-white text-2xl font-bold p-6 pb-0">
        Thinking Out Loud
      </p>
      <textarea
        name="thought"
        className="focus:outline-none resize-none w-full h-1/3 px-6 text-3xl font-normal text-methinks-white bg-methinks-lightblack text-whhite "
        placeholder="Speak now or forever hold your peace!"
        disabled
      />
      <div className="flex justify-center">
        <GiSoundWaves className=" text-9xl  " />
      </div>
    </div>
  );
};

export default Fleeting;
