import React from "react";

const Tag = ({ name, isSelected, handleSelected }) => {
  return (
    <button
      onClick={() => handleSelected(name)}
      className={`cursor-pointer text-black p-1 px-3 rounded-3xl font-medium text-sm ${
        isSelected
          ? `bg-black text-white hover:text-methinks-white`
          : `bg-white text-methinks-black hover:text-methinks-black hover:bg-methinks-lightgray duration-300`
      }`}
    >
      {name}
    </button>
  );
};

export default Tag;
