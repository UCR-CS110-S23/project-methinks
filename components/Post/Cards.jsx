import React, { useState } from "react";
import Thought from "@/components/Post/Thought";
import Prompt from "@/components/Post/Prompt";
import FleetingThought from "@/components/Post/FleetingThought";
import ThinkOutLoud from "@/components/Post/ThinkOutLoud";

const Cards = () => {
  const [current, setCurrent] = useState("thought");

  return (
    <div className="w-full h-1/2 flex justify-center items-center">
      {current === "thought" ? (
        <>
          <div className="w-full h-full translate-x-3 z-[6]">
            <Thought />
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-methinks-white h-full w-[15%] flex items-start justify-start pt-6 pl-4 rounded-xl rounded-r-none relative cursor-pointer translate-x-3 z-[3]"
            onClick={() => setCurrent("thought")}
          >
            <p
              className="text-methinks-lightblack text-start relative font-bold text-2xl rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Thought
            </p>
          </div>
        </>
      )}

      {current === "prompt" ? (
        <>
          <Prompt />
        </>
      ) : (
        <>
          <div
            className={`bg-methinks-darkgray h-full w-[15%] flex items-start cursor-pointer rounded-xl ${
              current === "fleeting" || current === "loud"
                ? `justify-start pl-4 pt-6 rounded-r-none z-[4] translate-x-0`
                : `justify-end pr-4 pt-6 rounded-l-none z-[5] -translate-x-0`
            }`}
            onClick={() => setCurrent("prompt")}
          >
            <p
              className="text-methinks-white text-start relative font-bold text-2xl rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Prompt
            </p>
          </div>
        </>
      )}

      {current === "fleeting" ? (
        <div className="w-full h-full -translate-x-3 z-[4]">
          <FleetingThought />
        </div>
      ) : (
        <>
          <div
            className={`bg-methinks-purple h-full w-[15%] flex items-start z-[4] cursor-pointer rounded-xl ${
              current === "loud"
                ? `justify-start pl-4 pt-6 rounded-r-none -translate-x-3`
                : `justify-end pr-4 pt-6 rounded-l-none -translate-x-3`
            }`}
            onClick={() => setCurrent("fleeting")}
          >
            <p
              className="text-methinks-black text-start relative font-bold text-2xl rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Fleeting Thought
            </p>
          </div>
        </>
      )}

      {current === "loud" ? (
        <>
          <div className="w-full h-full -translate-x-6 z-[4]">
            <ThinkOutLoud />
          </div>
        </>
      ) : (
        <>
          <div
            className={`bg-methinks-lightblack h-full w-[15%] flex items-start 
            justify-end pr-4 pt-6 rounded-xl rounded-l-none relative -translate-x-6 z-[3] cursor-pointer`}
            onClick={() => setCurrent("loud")}
          >
            <p
              className="text-methinks-white text-start relative font-bold text-2xl rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Thinking Out Loud
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
