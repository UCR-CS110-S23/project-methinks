import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { useSession} from "next-auth/react";
// import { useSession, signOut } from "next-auth/react";
import {BsFillPersonFill} from "react-icons/Bs"; 
import {RxExit} from "react-icons/Rx"; 

const Navigation = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileLink, setProfileLink] = useState("");


  const profileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    if (session) {
      setProfileLink(`/profile/${session.user.uid}`);
    }
  }, [session]);

  console.log(profileLink)

  return (
    <div className="w-full flex justify-center items-center">
      <nav className="px-3 bg-[24292F] w-full flex justify-between items-center">
        <p className="mb-0 text-white text-2xl font-bold leading-8 pr-px">
          Feed
        </p>
        <p className="text-white text-2xl font-bold mb-0">meThinks...</p>
        <div className="relative">
          <Image
            className="rounded-full h-8 w-8 m-2 cursor-pointer"
            src="/henry2.jpg"
            alt="Profile Photo"
            width={64}
            height={64}
            onClick={profileClick}
          />

{/* bg-[1C1C1C]  */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 bg-black w-[129px] h-[74px] rounded-[12px] ">
                <a
                href="#"
                className="block px-4 py-2 text-white hover:underline text-12px no-underline
                    font-public-sans font-semibold text-xs leading-4 cursor-pointer justify-between flex flex-row"
              >
                <BsFillPersonFill
                // className=" h-4 w-4"
                />
                <span className="">Profile</span>
              </a>
              <a
                href="#"
                className="block px-4 py-2 w-48 h-14 text-white hover:underline text-12px no-underline 
                    font-public-sans font-semibold text-xs leading-4 cursor-pointer
                    flex  flex-row justify-between"
              >
              <RxExit/>
                Sign Out
              </a>
            </div>
          )}
        </div>
      </nav>


    </div>
  );
};

export default Navigation;
