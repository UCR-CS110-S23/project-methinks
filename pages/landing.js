import React, { useState } from "react";
import Cloud from "@/public/assets/landing_cloud.svg";
import Image from "next/image";
import { TbMoodLookRight } from "react-icons/tb";
import { TbMoodSing } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";

const Landing = () => {
  const { data: session, status } = useSession();

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleUnclick = () => {
    setIsHover(false);
    setIsClicked(false);
  };

  // const handleClick = () => {
  //   setIsClicked(true);
  //   signIn();
  // };

  console.log("Session: ", session, status);
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
            onClick={() => signIn()}
            // onClick={() => setIsClicked(true)}
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
