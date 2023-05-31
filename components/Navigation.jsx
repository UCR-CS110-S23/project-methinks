import React, { useState } from "react";
import Image from 'next/image'

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full flex justify-center items-center ">
      <nav className="px-3 bg-gray-800 w-full flex justify-between items-center">
        <p className="mb-0 text-white text-2xl font-bold leading-8 pr-px">
          Feed
        </p>
        <p className="text-white text-2xl font-bold mb-0">meThinks...</p>
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full h-8 w-8 m-2"
            src="/henry2.jpg"
            alt="Profile Photo"
            width={64}
            height={64}
            onClick={profileClick}
          />

          {isDropdownOpen && (
            <div className="absolute mt-2 py-2 w-48 bg-[1C1C1C] rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-white hover:bg-gray-200"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
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
