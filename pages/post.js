import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Cards from "@/components/Post/Cards";
import Tags from "@/components/Post/Tags";
// import Navigation from "@/components/Navigation";

const Post = () => {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [publicToggle, setPublicToggle] = useState(true);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (!text) {
      setError("You need to write something!");
    } else if (!tag) {
      setError("Attach a tag!");
    } else {
      const newPost = {
        text,
        tag,
        public: publicToggle,
      };

      axios
        .post("/api/addPost", newPost)
        .then(({ data }) => {
          if (data.success) {
            setError("");
            setText("");
            setTag("");
            setPublicToggle(false);
            router.replace("/feed");
          }
        })
        .catch((error) => {
          console.log("[Post-Error]", error);
        });
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
              onClick={() => setPublicToggle(!publicToggle)}
            />
          </div>
          <div className="w-full h-[30px] flex justify-center items-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
        <p
          className="self-end bg-[#FFFFFF] p-1 px-5 rounded-3xl font-medium text-lg text-black hover:bg-methinks-green  hover:text-methinks-black duration-300 cursor-pointer hover:drop-shadow-glow"
          onClick={handleSubmit}
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default Post;
