import { useState } from "react";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";

const SortButton = ({ sortFilter, setSortFilter }) => {
  const [sortDropDown, setSortDropDown] = useState(false);
  return (
    <div className="w-[150px] flex flex-wrap text-methinks-white hover:text-methinks-white select-none">
      <div className="w-full flex flex-col gap-y-4 items-start">
        <div
          className="bg-methinks-darkgray rounded-3xl px-4 py-1 text-white flex items-center justify-center w-fit cursor-pointer hover:text-methinks-lightgrayHover duration-300 gap-x-2"
          onClick={() => {
            setSortDropDown(!sortDropDown);
          }}
        >
          <HiSortDescending className="text-base" />
          <p className="text-lg">Sort </p>
        </div>
        {sortDropDown && (
          <div className="bg-methinks-darkgray rounded-xl p-3 text-white flex flex-col w-[170px]">
            <p
              className=" w-full  flex justify-between items-baseline text-methinks-white hover:text-methinks-lightgrayHover cursor-pointer duration-300"
              onClick={() => {
                setSortFilter("latest");
              }}
            >
              Latest Posts
              {sortFilter === "latest" && <FaCircle className="text-xs" />}
            </p>
            <p
              className=" w-full flex  justify-between items-baseline text-methinks-white hover:text-methinks-lightgrayHover cursor-pointer duration-300"
              onClick={() => {
                setSortFilter("oldest");
              }}
            >
              Oldest Posts
              {sortFilter === "oldest" && <FaCircle className="text-xs" />}
            </p>
            {/* <p
              className=" w-full flex  justify-between items-baseline text-methinks-white hover:text-methinks-lightgrayHover cursor-pointer duration-300"
              onClick={() => {
                setSortFilter("highest");
              }}
            >
              Highest Rating{" "}
              {sortFilter === "highest" && <FaCircle className="text-xs" />}
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortButton;
