import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { useSession } from "next-auth/react";
// import { useSession, signOut } from "next-auth/react";
import { BsFillPersonFill } from "react-icons/Bs";
import { BsChat } from "react-icons/Bs";
import { RxExit } from "react-icons/Rx";

import UserProfile from "./Profile/UserProfile";

const Navigation = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileLink, setProfileLink] = useState("");

  const profileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickFeed = () => {
    window.location.href = './feed'; 
  }; 
  // const handleClickProfile = () => {
  //   window.location.href = './[id]]'; 
  // }; 
  // const handleClickMessages = () => {
  //   window.location.href = './feed'; 
  // }; 
  const handleClickSignOut = () => {
    window.location.href = './signin'; 
  }; 

  useEffect(() => {
    if (session) {
      setProfileLink(`/profile/${session.user.uid}`);
    }
  }, [session]);

  console.log(profileLink);

  return (
    <div className="w-full flex justify-center items-center">
      <nav className="px-3 bg-[24292F] w-full flex justify-between items-center">
        <p className="mb-0 text-white text-2xl font-bold leading-8 pr-px cursor-pointer"
          onClick = {handleClickFeed} >
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
            <div className=" bg-[#1C1C1C] absolute flex flex-col justify-center right-0 bg-black w-[129px] h-[110px] rounded-[12px] ">
              <div
                className="flex flex-row items-center space-x-4 mt-2 cursor-pointer"
                onClick = {<UserProfile/>}>
                <BsFillPersonFill className="cursor-pointer ml-4 fill-white"/>
                <p 
                  className="cursor-pointer ml-2 text-white text-[12px] font-semibold "
                  onClick = {profileLink}
                >Profile</p>
              </div>

              <div
                className="cursor-pointer flex flex-row items-center space-x-4 mt-2">
                <BsChat className="ml-4 fill-white font-bold "/>
                <span className="ml-2 text-white text-[12px] font-semibold cursor-pointer">Messages</span>
              </div>

              {/* flex flex-row justify-between items-center */}
              <div className=" cursor-pointer flex flex-row items-center space-x-4 mt-2"
                  onClick = {handleClickSignOut} >
                

                <div className="text-white ml-4 ">
                  <RxExit />
                </div>
                  <span className="ml-2 text-white text-[12px] font-semibold cursor-pointer">Sign Out</span>
                </div>
              
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
