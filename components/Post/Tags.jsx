import React, { useState } from "react";
import Tag from "../Tag";
import { tagsList } from "@/public/data/tags";

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tagName) => {
    setSelectedTag(tagName);
  };
  console.log(selectedTag);
  return (
    <div className="flex items-center gap-x-5 mb-10 w-full">
      <p className="text-white font-semibold text-xl">Tags:</p>
      <div
        className={`
        ${tagsList.length > 6 ? `w-5/6` : ``}
        flex gap-4 overflow-x-auto scrollbar-none`}
      >
        {tagsList.map((tag, index) => (
          <Tag
            key={index}
            name={tag}
            isSelected={selectedTag === tag}
            handleSelected={handleTagClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
