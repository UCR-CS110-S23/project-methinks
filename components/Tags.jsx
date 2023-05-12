import React, { useState } from "react";
import Tag from "./Tag";
// import { tagsList } from "@/public/data/tagsList";

const Tags = () => {
  const tagsList = ["Politics", "Music", "Culture", "School", "Random"];
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tagName) => {
    setSelectedTag(tagName);
  };
  console.log(selectedTag);
  return (
    <div className="flex items-center gap-x-5 mb-10">
      <p className="text-white font-semibold text-2xl">Tags:</p>
      {tagsList.map((tag, index) => (
        <Tag
          key={index}
          name={tag}
          isSelected={selectedTag === tag}
          handleSelected={handleTagClick}
        />
      ))}
    </div>
  );
};

export default Tags;
