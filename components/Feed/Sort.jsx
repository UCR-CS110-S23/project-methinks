import React, { useState } from "react";

const Sort = () => {
  const [sortFilter, setSortFilter] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  return (
    <div className="flex flex-col gap-y-3">
      <div
        className="w-[100px] cursor-pointer p-1 px-3 rounded-3xl font-medium text-xl bg-methinks-darkgray text-methinks-white hover:text-methinks-white flex items-center justify-center"
        onClick={() => setSortDropDown(!sortDropDown)}
      >
        <span>LL</span>
        Sort
      </div>
      {sortDropDown && (
        <div
          className="w-[200px] bg-methinks-darkgray flex flex-col rounded-xl items-start justify-center text-base text-methinks-white hover:text-methinks-white p-5 py-2"
          //   onClick={() => setSortDropDown(!sortDropDown)}
        >
          <p>Latest</p>
          <p>Highest Rating</p>
        </div>
      )}
    </div>
  );
};

export default Sort;
