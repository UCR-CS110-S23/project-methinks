import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Image from "next/image";
import Posts from "../Feed/Posts";
import { FaChevronLeft } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import { useSession } from "next-auth/react";

const FriendsProfile = ({ user, todayPosts, previousPosts }) => {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [mouseHover, setMouseHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);

  useEffect(() => {
    if (session && session?.user.uid === user.uid) {
      setName(session?.user?.name);
      setUsername(session?.user?.username);
      setBio(session?.user?.bio);
    }
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
    setName(session?.user?.name);
    setUsername(session?.user?.username);
    setBio(session?.user?.bio);
    setError("");
  };

  const handleSave = () => {
    if (!name || !username || !bio) {
      setError("Please complete your profile!");
    } else {
      const newProfile = {
        name,
        username: username.toLowerCase(),
        bio,
      };
      axios
        .post("/api/editProfile", newProfile)
        .then(({ data }) => {
          if (data.success) {
            setError("");
            setIsEditing(false);
            update({ name, username: username.toLowerCase(), bio });

            setName(name);
            setUsername(username.toLowerCase());
            setBio(bio);
          }
          console.log(data);
        })
        .catch((error) => {
          if (error?.response?.data.userAlreadyExists) {
            setError(error?.response?.data.message);
            return;
          }
          console.log("[EditProfile-Error]", error);
        });
    }
  };
  return (
    <div
      className={`w-full h-full min-h-screen flex justify-center items-start bg-methinks-background py-4 pb-20 mt-10`}
    >
      <p className="absolute left-[20%] top-[10%] flex items-center text-methinks-lightgray hover:text-methinks-lightgrayHover duration-300 cursor-pointer text-lg">
        <FaChevronLeft className="text-2xl" />
        <span onClick={() => router.back()}>Back</span>
      </p>
      <div className="w-[40%] h-full flex flex-col justify-center items-center gap-y-8">
        <div
          className="flex w-full justify-center items-center relative"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          <div className="flex">
            <div className="flex flex-col gap-y-1 justify-center items-center">
              <Image
                referrerPolicy="no-referrer"
                src={user.image}
                alt="Profile Picture"
                width={120}
                height={120}
                quality={100}
                className="rounded-full bg-methinks-darkgray "
              />
              {isEditing && user.uid === session.user.uid ? (
                <>
                  <input
                    value={name}
                    placeholder="_________________________"
                    className="text-methinks-white m-0 font-bold text-4xl bg-methinks-background text-center w-full focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    value={username}
                    placeholder="@____________________________"
                    className="text-methinks-lightgray m-0 font-medium text-2xl bg-methinks-background text-center focus:outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    value={bio}
                    placeholder="____________________________"
                    className="text-methinks-lightgray m-0 font-medium text-lg bg-methinks-background text-center w-full focus:outline-none"
                    onChange={(e) => setBio(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p className="text-methinks-white m-0 font-bold text-4xl text-center">
                    {name}
                  </p>
                  <p className="text-methinks-lightgray m-0 font-medium text-2xl text-center">
                    @{username}
                  </p>
                  <p className="text-methinks-lightgray m-0 font-medium text-lg text-center">
                    {bio}
                  </p>
                </>
              )}
            </div>
            <div className="absolute top-0 right-0">
              {mouseHover && !isEditing && user.uid === session.user.uid && (
                <p
                  className="text-lg text-methinks-white hover:text-methinks-darkgray m-0"
                  // onClick={handleName}
                >
                  <BsPen
                    className="text-3xl cursor-pointer"
                    onClick={() => setIsEditing(true)}
                  />
                </p>
              )}
            </div>
          </div>
          <div className="flex h-[25px] gap-x-3 absolute -bottom-10 right-0 text-methinks-lightgray">
            {isEditing && (
              <>
                <p
                  className="hover:text-methinks-lightgrayHover cursor-pointer"
                  onClick={handleCancel}
                >
                  Cancel
                </p>
                <p
                  className="hover:text-methinks-lightgrayHover cursor-pointer"
                  onClick={handleSave}
                >
                  Save
                </p>
              </>
            )}
          </div>
        </div>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-3 gap-y-5">
          <div className="flex w-full justify-between items-center">
            <p className="text-methinks-white m-0 font-bold text-4xl pl-4">
              Today
            </p>
          </div>

          <div className="w-full h-full flex flex-col gap-y-5 bg-methinks-gray p-4 rounded-xl text-methinks-lightgray">
            {todayPosts.length === 0 ? (
              <p>No thoughts yet, just vibes!</p>
            ) : (
              <Posts postData={todayPosts} type="today" />
            )}
          </div>
        </div>
        {previousPosts.length === 0 ? (
          <>
            <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
              This Week
            </p>
            <div className="w-full h-1/12 flex flex-col gap-y-5 bg-methinks-gray p-4 rounded-xl text-methinks-lightgray">
              <p>{"Head empty all week :("} </p>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-5 mb-5">
            <p className="self-start text-methinks-white m-0 font-bold text-4xl pl-4">
              This Week
            </p>
            <div className="w-full max-h-[750px] bg-methinks-gray p-4 rounded-xl overflow-y-auto">
              <div className="flex flex-col gap-y-5">
                <Posts postData={previousPosts} type="previous" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsProfile;
