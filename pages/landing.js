import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Cloud from "@/public/assets/landing_cloud.svg";
import { TbMoodLookRight } from "react-icons/tb";
import { TbMoodSing } from "react-icons/tb";

const Landing = () => {
  const { data: session, status } = useSession();

  const [isHover, setIsHover] = useState(false);

  console.log("Session: ", session, status);
  return (
    <div className="bg-methinks-black w-full h-screen flex flex-col justify-center items-center">
      <Image src={Cloud} alt="Cloud" draggable="false" />
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover && (
          <TbMoodLookRight className="text-methinks-white text-8xl stroke-[1px]" />
        )}
        {isHover && (
          <Link href="/signin">
            <TbMoodSing className="text-methinks-white text-8xl stroke-[1px] cursor-pointer" />
          </Link>
        )}
      </span>
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log("HELLLOOOOOOOO");
//   const session = await getSession({ req: context.req });

//   if (session) {
//     console.log("session");
//     return {
//       redirect: {
//         destination: "/feed",
//         permanent: false,
//       },
//     };
//   }
//   console.log("no session");
//   return {
//     props: { session },
//   };
// };

export default Landing;
