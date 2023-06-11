import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Comment from "./Comment";
import { FiSend } from "react-icons/fi";

const Comments = ({ postID, commentsData }) => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleComment = () => {
    if (text) {
      const newComment = {
        tid: postID,
        text,
      };

      axios
        .post("/api/addComment", newComment)
        .then(({ data }) => {
          if (data.success) {
            setText("");
            router.reload();
          }
        })
        .catch((error) => {
          console.log("[Comment-Error]", error);
        });
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (text) {
        handleComment();
      }
    }
  };

  return (
    <div className="bg-[#1C1C1C] p-5 px-7 rounded-xl">
      <div className="flex w-full flex-col gap-y-8">
        <p className="font-semibold text-2xl text-white">Comments</p>
        {commentsData?.length === 0 ? (
          <div className="h-[10rem] flex justify-center items-center">
            <div className="text-methinks-darkgray text-center text-2xl flex flex-col font-semibold">
              <p>The minds are calm and quiet...</p>
              <p>Be the first to build on this thought!</p>
            </div>
          </div>
        ) : (
          <div className="max-h-[28rem] overflow-y-auto">
            <div className="gap-y-5 flex flex-col">
              {commentsData?.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        )}
        <div className="bg-methinks-lightblack border-b-2 border-b-white text-white flex items-center w-full h-full px-4 py-2 mb-2">
          <input
            name="comment"
            type="text"
            value={text}
            placeholder="Expand this thought..."
            autoComplete={"off"}
            className="w-full bg-methinks-lightblack focus:outline-none"
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyUp={handleKeypress}
          />
          <FiSend
            className="text-lg cursor-pointer hover:text-methinks-darkgray duration-300"
            onClick={handleComment}
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
