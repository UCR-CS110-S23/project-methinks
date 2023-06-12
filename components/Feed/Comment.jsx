import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Comment = ({ comment }) => {
  const [formatDate, setFormattedDate] = useState();
  useEffect(() => {
    const commentDate = new Date(comment?.date);
    const today = new Date();
    let formattedDate = "";
    if (commentDate.toDateString() === today.toDateString()) {
      // Format the date as time only if it's today
      formattedDate = commentDate.toLocaleTimeString([], {
        timeStyle: "medium",
      });
    } else {
      // Format the date as "MM-DD-YYYY" if it's not today
      formattedDate = commentDate
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "-");
    }
    setFormattedDate(formattedDate);
  }, []);

  return (
    <div className="bg-gray-200 w-full flex flex-col rounded-xl gap-y-2 pt-4 pb-4 px-4">
      <div className="flex gap-x-4 items-center">
        <Link href={`/profile/${comment.uid}`}>
          <Image
            src={comment.image}
            alt="hot hot henry"
            referrerPolicy="no-referrer"
            className="rounded-full hover:opacity-70 duration-300 cursor-pointer"
            width="35"
            height="35"
            draggable={false}
          />
        </Link>
        <Link
          href={`/profile/${comment.uid}`}
          className="text-black font-medium text-lg p-0 m-0 hover:text-methinks-darkgray duration-300 cursor-pointer"
        >
          @{comment.username}
        </Link>
        <p className="text-methinks-darkgray text-base p-0 m-0">{formatDate}</p>
      </div>
      <div className="text-black text-xl pl-5 font-normal">{comment.text}</div>
    </div>
  );
};

export default Comment;
