import React, { useState } from "react";
import Tag from "./Tag";
import { tagsList } from "@/public/data/tags";
import SortButton from "@/components/Feed/SortButton";

const Tags = () => {
  const feedTags = ["All", ...tagsList];

  const [selectedTags, setSelectedTags] = useState(["All"]);

  const handleTagSelection = (tagName) => {
    if (tagName === "All") {
      setSelectedTags(["All"]);
    } else {
      if (selectedTags.includes(tagName)) {
        setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
      } else {
        setSelectedTags((prevTags) => {
          const updatedTags = prevTags.filter((tag) => tag !== "All");
          return [...updatedTags, tagName];
        });
      }
    }
  };

  return (
    <div className="flex items-baseline justify-center w-full gap-x-8">
      <div className="flex flex-wrap gap-3">
        {feedTags.map((tag, index) => (
          <Tag
            key={index}
            name={tag}
            handleTagSelection={handleTagSelection}
            selectedTags={selectedTags}
          />
        ))}
      </div>
      <div className="relative">
        <SortButton />
      </div>
    </div>
  );
};

export default Tags;
