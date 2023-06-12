import React, { useState, useEffect } from "react";

const Fleeting = ({ text, setText }) => {
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
    <div className="w-full h-full bg-methinks-purple rounded-xl relative z-[5] p-6 shadow-2xl">
      <div className="flex justify-between items-baseline w-full">
        <p className="text-methinks-black text-2xl font-bold pb-0">
          Fleeting Thought
        </p>
        <div className="text-lg font-medium bg-white rounded-md px-3">2:00</div>
      </div>
      <textarea
        name="thought"
        value={text}
        placeholder="Quick, first thought that comes to mind!"
        className="focus:outline-none resize-none w-full h-2/3 text-3xl font-normal bg-methinks-purple text-methinks-black"
        onChange={(e) => setText(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        disabled
      />
      {displayCount && (
        <div className="my-[14%] text-right text-sm text-black font-medium">
          {text.length} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Fleeting;
