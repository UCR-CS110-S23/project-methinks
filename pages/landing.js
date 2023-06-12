import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { TbMoodLookRight } from "react-icons/tb";
import { TbMoodSing } from "react-icons/tb";
import Cloud from "@/public/assets/landing_cloud.svg";

const Landing = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="bg-methinks-background w-full min-h-screen h-full flex flex-col justify-center items-center">
      <motion.div
        animate={{ y: [5, -25, 5] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      >
        <Image src={Cloud} alt="Cloud" draggable="false" />
      </motion.div>
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
