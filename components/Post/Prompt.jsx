import React, { useState, useEffect } from "react";

const PromptPost = ({ text, setText }) => {
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
    <div className="w-full h-full text-methinks-black bg-methinks-lightgray rounded-xl relative z-[5] p-6 shadow-2xl">
      <p className="text-2xl font-bold pb-0">Prompt</p>
      <p className="text-2xl font-semibold pb-0">What makes a bad friend?</p>
      <textarea
        name="thought"
        value={text}
        placeholder="________________."
        className="focus:outline-none resize-none w-full h-2/3 text-3xl font-serif bg-methinks-lightgray"
        onChange={(e) => setText(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        disabled
      />
      {displayCount && (
        <div className="my-10 text-right text-sm text-black font-medium">
          {text.length} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default PromptPost;
