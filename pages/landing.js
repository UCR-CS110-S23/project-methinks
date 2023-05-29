import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TbMoodLookRight } from "react-icons/tb";
import { TbMoodSing } from "react-icons/tb";
import Cloud from "@/public/assets/landing_cloud.svg";

const Landing = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="bg-methinks-black w-full h-screen flex flex-col justify-center items-center">
      <Image src={Cloud} alt="Cloud" draggable="false" />
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover && (
          <TbMoodLookRight className="text-methinks-white text-8xl stroke-[1px] hover:text-methinks-lightgray duration-300" />
        )}
        {isHover && (
          <Link href="/signin">
            <TbMoodSing className="text-methinks-white text-8xl stroke-[1px] cursor-pointer hover:text-methinks-lightgray duration-300" />
          </Link>
        )}
      </span>
    </div>
  );
};

export default Landing;
