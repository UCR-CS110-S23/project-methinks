import React from "react";

const Tag = ({ name, isSelected, handleSelected }) => {
  return (
    <button
      onClick={() => handleSelected(name)}
      className={`cursor-pointer text-methinks-black p-1 px-3 rounded-3xl font-medium text-sm ${
        isSelected
          ? `bg-black text-methinks-white hover:text-methinks-white`
          : `bg-white hover:text-methinks-black`
      }`}
    >
      {name}
    </button>
  );
};

export default Tag;
