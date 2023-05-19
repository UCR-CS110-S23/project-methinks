import React, { useState } from "react";
import Cards from "@/components/Post/Cards";
import Tags from "@/components/Post/Tags";

const Post = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  console.log(text);
  const handleSubmit = () => {
    if (!text) {
      setError(true);
    } else {
      setError(false);
      setText("");
    }
  };
  return (
    <div className="bg-methinks-background h-full w-full flex flex-col justify-center items-center font-publicSans">
      <div className="w-[55%] h-full flex flex-col justify-center items-center gap-y-10">
        <Cards text={text} setText={setText} />
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Tags />
          <div className="flex w-full justify-between items-center">
            <p className="text-white font-semibold text-lg">
              Make this thought private?
            </p>
            <input
              type="checkbox"
              className="toggle toggle-custom-primary bg-gray-400 checked:bg-methinks-green"
            />
          </div>
          <div className="w-full h-[30px] flex justify-center items-center">
            {error && (
              <p className="text-red-500">Please complete your thought!</p>
            )}
          </div>
        </div>
      </div>
      <button
        className="self-end bg-[#FFFFFF] p-1 px-5 rounded-3xl font-medium text-lg text-black hover:bg-methinks-green -translate-x-32 -translate-y-14"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default Post;
