import React, { useState } from "react";
import Cloud from "@/public/assets/landing_cloud.svg";
import Image from "next/image";
import { TbMoodLookRight } from "react-icons/tb";
// import { TbMoodEmpty } from "react-icons/tb";
import { TbMoodSing } from "react-icons/tb";
// import { TbMoodUnamused } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";

const Landing = () => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleUnclick = () => {
    setIsHover(false);
    setIsClicked(false);
  };
  return (
    <div className="bg-methinks-black w-full h-screen flex flex-col justify-center items-center">
      <Image src={Cloud} alt="bird" draggable="false" />
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover && !isClicked && (
          <TbMoodLookRight className="text-methinks-white text-8xl stroke-[1px]" />
        )}
        {isHover && !isClicked && (
          <TbMoodSing
            className="text-methinks-white text-8xl stroke-[1px] cursor-pointer"
            onClick={() => setIsClicked(true)}
          />
        )}
        {isClicked && (
          <FaGoogle
            className="text-methinks-white text-8xl stroke-[2px] cursor-pointer"
            onMouseLeave={handleUnclick}
          />
        )}
      </span>
    </div>
  );
};

export default Landing;

{
  /* {isHover && (
  <FaGoogle className="text-methinks-white text-8xl stroke-[1px] cursor-pointer" />
)} */
}
