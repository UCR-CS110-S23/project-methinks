import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillPersonFill, BsChat } from "react-icons/bs";
// import { RiExitFill } from "react-icons/ri";
// import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileLink, setProfileLink] = useState("");

  const profileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickFeed = () => {
    window.location.href = "./feed";
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
        <p
          className="mb-0 text-white text-2xl font-bold leading-8 pr-px cursor-pointer"
          onClick={handleClickFeed}
        >
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

          {isDropdownOpen && (
            <div className="bg-[#1C1C1C] absolute flex flex-col justify-center right-0 bg-black w-[129px] h-[110px] rounded-[12px] ">
              <ul>
                <Link
                  href={profileLink}
                  className="cursor-pointer ml-2 text-white text-[12px] font-semibold flex items-center"
                >
                  <BsFillPersonFill className="ml-4 fill-white font-bold" />
                  <span className="ml-2 text-white text-[12px] font-semibold">
                    Profile
                  </span>
                </Link>

                <Link
                  href="/messages"
                  className="cursor-pointer ml-2 text-white text-[12px] font-semibold flex items-center"
                >
                  <BsChat className="ml-4 fill-white font-bold" />
                  <span className="ml-2 text-white text-[12px] font-semibold">
                    Messages
                  </span>
                </Link>

                {/* <Link
                  href={"/signin"}
                  className="cursor-pointer ml-2 text-white text-[12px] font-semibold flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut({
                      callbackUrl: "/signin",
                    });
                  }}
                >
                  <RiExitFill className="ml-4 fill-white font-bold" />
                  <span className="ml-2 text-white text-[12px] font-semibold">
                    Sign Out
                  </span>
                </Link> */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
