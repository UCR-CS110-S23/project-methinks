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
    <div className="flex items-baseline gap-x-4 w-full">
      <p className="text-white font-semibold text-lg">Tags:</p>
      {/* <div
        className={`
        ${tagsList.length > 6 ? `w-5/6` : ``}
        flex gap-4 overflow-x-auto scrollbar-none`}
      > */}
      <div className="flex flex-wrap gap-3">
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
    // </div>
  );
};

export default Tags;
