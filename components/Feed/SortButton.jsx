import { useState } from "react";
import React from "react";
import { FaArrowDown, FaCircle } from "react-icons/fa";

const SortButton = () => {
  const [sortFilter, setSortFilter] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  return (
    <div className="w-full flex items-end">
      <div className="w-full flex flex-col gap-y-4 items-end">
        <button
          className="bg-methinks-darkgray rounded-full px-4 py-2 text-white flex items-center w-fit "
          onClick={() => {
            setSortDropDown(!sortDropDown);
          }}
        >
          <FaArrowDown className="text-lg mr-2" />
          <div className="text-lg">Sort </div>
        </button>
        {sortDropDown && (
          <button className="bg-methinks-darkgray rounded-xl p-3 text-white  flex flex-col text-md w-full">
            <div
              className=" w-full  flex justify-between items-baseline hover:text-methinks-darkgray"
              onClick={() => {
                setSortFilter(false);
              }}
            >
              Latest {!sortFilter && <FaCircle className="text-xs" />}
            </div>
            <div
              className=" w-full flex  justify-between items-baseline hover:text-methinks-darkgray"
              onClick={() => {
                setSortFilter(true);
              }}
            >
              Highest Rating {sortFilter && <FaCircle className="text-xs" />}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SortButton;
