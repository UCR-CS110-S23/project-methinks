import React from "react";

const Tag = ({ name, handleTagSelection, selectedTags }) => {
  const isSelected = selectedTags.includes(name);

  const handleButtonClick = () => {
    handleTagSelection(name);
  };

  return (
    <button
      className={`cursor-pointer p-1 px-5 rounded-3xl font-medium text-lg ${
        isSelected
          ? "bg-black text-white  hover:text-methinks-white"
          : "bg-white text-methinks-black hover:text-methinks-black hover:bg-methinks-lightgray duration-300"
      }`}
      onClick={handleButtonClick}
    >
      {name}
    </button>
  );
};

export default Tag;
