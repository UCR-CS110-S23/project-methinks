import React from "react";

const PromptPost = ({ text, setText }) => {
  const maxCharLength = 100;

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  return (
    <div className="w-full h-full text-methinks-black bg-methinks-lightgray rounded-xl relative z-[5] p-6 shadow-2xl">
      <p className="text-2xl font-bold pb-0">Prompt</p>
      <p className="text-2xl font-semibold pb-0">What makes a bad friend?</p>
      <textarea
        name="thought"
        value={text}
        placeholder="________________."
        className="focus:outline-none resize-none w-full h-2/3 text-3xl font-serif bg-methinks-lightgray"
        onChange={handleChange}
        maxCharLength={maxCharLength}
      />
      <div className="text-sm text-black">
        {text.length}/{maxCharLength}
      </div>
    </div>
  );
};

export default PromptPost;
