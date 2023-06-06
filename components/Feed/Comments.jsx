import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Comment from "./Comment";
import { FiSend } from "react-icons/fi";

const Comments = () => {
  const { data: session } = useSession();

  const [text, setText] = useState();
  const [commentData, setCommentData] = useState([]);

  const handleComment = () => {
    if (text) {
      const newComment = {
        uid: session?.user?.uid,
        image: session?.user?.image,
        username: session?.user?.username,
        date: new Date().toLocaleTimeString([], {
          timeStyle: "medium",
        }),
        text,
      };
      setCommentData([...commentData, newComment]);
    }
  };

  return (
    <div className="bg-[#1C1C1C] p-5 px-7 rounded-xl">
      <div className="flex w-full flex-col gap-y-8">
        <p className="font-semibold text-2xl text-white">Comments</p>
        {commentData.length === 0 ? (
          <div className="h-[20rem] flex justify-center items-center">
            <div className="text-white text-center text-2xl flex flex-col font-semibold">
              <p>The minds are calm and quiet...</p>
              <p>Be the first to build on this thought!</p>
            </div>
          </div>
        ) : (
          <div className="max-h-[28rem] overflow-y-auto">
            <div className="gap-y-5 flex flex-col">
              {commentData.map((comment, index) => (
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
            className="w-full bg-methinks-lightblack focus:outline-none"
            onChange={(e) => {
              setText(e.target.value);
            }}
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
