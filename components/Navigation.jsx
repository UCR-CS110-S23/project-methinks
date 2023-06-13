import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { BsPerson } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import Cloud from "@/public/assets/cloud.svg";

const Navigation = () => {
  const { data: session } = useSession();
  const [profileLink, setProfileLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (session) {
      setProfileLink(`/profile/${session.user.uid}`);
    }
  }, [session]);

  return (
    <div className="flex relative justify-between items-start text-methinks-white px-5 py-4 font-publicSans">
      <Link
        href={"/feed"}
        className="flex gap-x-2 justify-center items-center text-2xl font-bold text-methinks-white"
      >
        <div className="w-14">
          <Image src={Cloud} alt="Cloud" />
        </div>
        meThinks...
      </Link>
      <div className="flex items-center justify-center gap-x-5">
        <Link
          href={"/feed"}
          className="font-bold text-methinks-white hover:text-methinks-lightgray cursor-pointer"
        >
          Feed
        </Link>
        <Link
          href={"/chat"}
          className="font-bold text-methinks-white hover:text-methinks-lightgray cursor-pointer"
        >
          Chat
        </Link>
        <div className="relative flex flex-col gap-y-3 justify-center items-end">
          <Image
            src={session.user.image}
            alt="hot hot henry"
            referrerPolicy="no-referrer"
            className="rounded-full hover:opacity-70 duration-300 cursor-pointer"
            width="35"
            height="35"
            draggable={false}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute z-[1000] right-0 top-12 bg-methinks-lightblack text-methinks-white p-5 py-3 rounded-xl gap-y-3 flex flex-col justify-center items-start w-[140px]">
              <Link
                href={profileLink}
                className="flex items-center gap-x-3 text-methinks-white hover:text-methinks-lightgray cursor-pointer"
              >
                <BsPerson className="" />
                <p className="m-0 font-publicSans">Profile</p>
              </Link>
              <div className="flex items-center text-methinks-white gap-x-3 hover:text-methinks-lightgray cursor-pointer">
                <RxExit className="text-sm" />
                <p
                  className="m-0 font-publicSans"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut({
                      callbackUrl: "/signin",
                    });
                  }}
                >
                  Sign Out
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
