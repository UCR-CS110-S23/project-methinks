import { useState } from "react";
import React from "react";
import { FaArrowDown, FaCircle } from "react-icons/fa";

const SortButton = () => {
  let [sortFilter, setSortFilter] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  return (
    <div className="w-full p-4">
      <div className="w-full flex-col">
        <button
          className="bg-methinks-darkgray rounded-full px-4 py-2 text-white flex items-center "
          onClick={() => {
            setSortDropDown(!sortDropDown);
          }}
        >
          <FaArrowDown className="text-lg mr-2" />
          <div className="text-lg">Sort </div>
        </button>
        {sortDropDown && (
          <button className="bg-methinks-darkgray rounded-xl p-3 w-2/3 text-white  flex flex-col text-md m-2">
            <div
              className=" w-full  flex justify-between items-baseline"
              onClick={() => {
                setSortFilter((sortFilter = false));
              }}
            >
              Latest {!sortFilter && <FaCircle className="text-xs" />}
            </div>
            <div
              className=" w-full flex  justify-between items-baseline"
              onClick={() => {
                setSortFilter((sortFilter = true));
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
