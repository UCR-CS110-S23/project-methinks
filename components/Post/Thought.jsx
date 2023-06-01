import React, { useState, useEffect } from "react";

const ThoughtPost = ({ text, setText }) => {
  const [displayCount, setDisplayCount] = useState(false);
  const maxLength = 400;

  const handleFocus = () => {
    setDisplayCount(true);
  };

  const handleBlur = () => {
    if (text.trim().length === 0) {
      setDisplayCount(false);
    }
  };

  useEffect(() => {
    if (!displayCount) {
      setText("");
    }
  }, [displayCount]);

  return (
    <div className="w-full h-full bg-methinks-white rounded-xl relative z-[6] shadow-2xl">
      <p className="text-methinks-lightblack text-2xl font-bold p-6 pb-0">
        Thought
      </p>
      <textarea
        name="thought"
        value={text}
        placeholder="What's on your mind?"
        className="bg-white focus:outline-none resize-none w-full h-2/3 px-6 text-3xl font-normal  text-methinks-lightblack"
        onChange={(e) => setText(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
      />
      {displayCount && (
        <div className="my-10 mx-6 text-right text-sm text-black font-medium">
          {text.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default ThoughtPost;
