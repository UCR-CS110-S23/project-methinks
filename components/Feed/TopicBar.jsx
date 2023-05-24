import React from "react";
import SortButton from "./SortButton";
import BasicExample from "./Dropdown";

const TopicBar = () => {
  return (
    <div className="flex   items-center justify-center  -translate-y-24  ">
      <div className="   flex justify-center  ">
        <button className="bg-white hover:!bg-black hover:text-white rounded-full py-2 px-4 m-1 ">
          All
        </button>
        <button className="bg-white rounded-full py-2 px-4 m-1"> News</button>
        <button className="bg-white rounded-full py-2 px-4 m-1">
          Entertainment
        </button>
        <button className="bg-white rounded-full py-2 px-4 m-1">
          Political
        </button>
        <button className="bg-white rounded-full py-2 px-4 m-1">
          Lifestyle
        </button>
        <button className="bg-white rounded-full py-2 px-4 m-1">School</button>
        <button className="bg-white rounded-full py-2 px-4 m-1">Culture</button>
        <button className="bg-white rounded-full py-2 px-4 m-1">Random</button>
      </div>
      <div className=" flex m-1 ">
        <BasicExample />
      </div>
    </div>
  );
};

export default TopicBar;
