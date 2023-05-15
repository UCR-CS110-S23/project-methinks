import React from "react";

const Tag = ({ name, isSelected, handleSelected }) => {
  return (
    <button
      onClick={() => handleSelected(name)}
      className={`cursor-pointer text-black p-1 px-4 rounded-3xl font-medium text-lg ${
        isSelected ? `bg-[#F7DEED]` : `bg-white`
      }`}
    >
      {name}
    </button>
  );
};

export default Tag;
