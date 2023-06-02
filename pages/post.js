import React, { useState } from "react";
import { useRouter } from "next/router";
import Cards from "@/components/Post/Cards";
import Tags from "@/components/Post/Tags";
// import Navigation from "@/components/Navigation";

const Post = () => {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  console.log(text);
  const handleSubmit = () => {
    if (!text) {
      setError("You need to write something!");
    } else if (!tag) {
      setError("Attach a tag!");
    } else {
      setError("");
      setText("");
      setTag("");
      router.replace("/feed");
    }
  };

  return (
    <div className="bg-methinks-background h-screen w-full flex flex-col justify-center items-center font-publicSans">
      <div className="w-[55%] h-full flex flex-col justify-center items-center gap-y-10">
        <Cards text={text} setText={setText} />
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Tags tag={tag} setTag={setTag} />
          <div className="flex w-full justify-between items-center">
            <p className="text-white font-semibold text-lg">
              Make this thought private?
            </p>
            <input
              type="checkbox"
              className="toggle toggle-custom-primary bg-gray-400 checked:bg-methinks-green duration-300"
            />
          </div>
          <div className="w-full h-[30px] flex justify-center items-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
        <p
          className="self-end bg-[#FFFFFF] p-1 px-5 rounded-3xl font-medium text-lg text-black hover:bg-methinks-green  hover:text-methinks-black duration-300 cursor-pointer"
          onClick={handleSubmit}
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default Post;
