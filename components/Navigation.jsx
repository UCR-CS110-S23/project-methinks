import React, { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                    font-public-sans font-semibold text-xs leading-4 cursor-pointer justify-between flex-row"
              >
                <Image 
                src = "./dropdown_profile.svg"
                alt ="sign out icon"
                width={13.5}
                height = {13.5}
                viewBox="0 0 16 16"
                className=" h-4 w-4"
              />
                <span className="">Profile</span>
              </a>
              <a
                href="#"
                className="block px-4 py-2 w-48 h-14 text-white hover:underline text-12px no-underline 
                    font-public-sans font-semibold text-xs leading-4 cursor-pointer
                    flex-row justify-between"
              >
              <Image 
                src = "./dropdown_signout.svg"
                alt ="sign out icon"
                width={13.5}
                height={13.5}
                className="mr-2"
                viewBox="0 0 24 24"
              />
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
