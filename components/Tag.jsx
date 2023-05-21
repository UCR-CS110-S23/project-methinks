import React from "react";

const Tag = ({ name, isSelected, handleSelected }) => {
  return (
    <button
      onClick={() => handleSelected(name)}
      className={`cursor-pointer text-black p-1 px-3 rounded-3xl font-medium text-sm ${
        isSelected ? `bg-black text-white` : `bg-white`
      }`}
    >
      {name}
    </button>
  );
};

export default Tag;
