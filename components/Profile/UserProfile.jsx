import React, { useState } from "react";
import Calendar from "@/components/Profile/Calendar";
import { BsPen } from "react-icons/bs";

const UserProfile = () => {
  const [name, setName] = useState("Mika");
  const [previousName, setPreviousName] = useState("");
  const [showNamePen, setShowNamePen] = useState(false);
  const [editName, setEditName] = useState(false);

  const [username, setUsername] = useState("@mikusroomonfire");
  const [previousUsername, setPreviousUsername] = useState("");
  const [showUsernamePen, setShowUsernamePen] = useState(false);
  const [editUsername, setEditUsername] = useState(false);

  const [bio, setBio] = useState("Feelin' Supersonic");
  const [previousBio, setPreviousBio] = useState("");
  const [showBioPen, setShowBioPen] = useState(false);
  const [editBio, setEditBio] = useState(false);

  // const [date, setDate] = useState("");

  const handleName = () => {
    setEditName(true);
    setPreviousName(name);
  };

  const handleUsernameEdit = () => {
    setEditUsername(true);
    setPreviousUsername(username);
  };

  const handleBioEdit = () => {
    setEditBio(true);
    setPreviousBio(bio);
  };

  const handleSave = () => {
    setEditName(false);
    setEditUsername(false);
    setEditBio(false);

    if (editName === "") {
      setName(previousName);
    }
    if (editUsername === "") {
      setUsername(previousUsername);
    }
    if (editBio === "") {
      setBio(previousBio);
    }
  };

  const handleCancel = () => {
    setEditName(false);
    setEditUsername(false);
    setEditBio(false);
    if (editName) {
      setName(previousName);
    }
    if (editUsername) {
      setUsername(previousUsername);
    }
    if (editBio) {
      setBio(previousBio);
    }
  };
  return (
    <div className="h-screen w-full flex justify-between bg-methinks-background p-10">
      <div className="flex flex-col w-1/2 m-10 gap-y-10">
        <div className="flex flex-col bg-methinks-gray p-7 pb-3 rounded-xl">
          <div className="flex items-center gap-x-5">
            <div className="rounded-full bg-methinks-darkgray pr-1 w-[120px] h-[120px]" />
            <div className="flex flex-col w-3/4">
              <div
                className="flex gap-x-2 items-center"
                onMouseEnter={() => setShowNamePen(true)}
                onMouseLeave={() => setShowNamePen(false)}
              >
                {!editName && (
                  <p className="m-0 pl-1 text-methinks-white font-bold text-4xl font-publicSans">
                    {name}
                  </p>
                )}
                {!editName && showNamePen && (
                  <p
                    className="text-lg text-methinks-white hover:text-methinks-darkgray m-0 cursor-pointer"
                    onClick={handleName}
                  >
                    <BsPen className="text-2xl" />
                  </p>
                )}
                {editName && (
                  <div className="flex gap-x-3 items-center w-full">
                    <input
                      type="text"
                      placeholder="__________________"
                      className="text-methinks-white pl-1 bg-methinks-gray focus:outline-none rounded-md w-full font-bold text-4xl"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div
                className="flex gap-x-2 items-center"
                onMouseEnter={() => {
                  setShowUsernamePen(true);
                }}
                onMouseLeave={() => {
                  setShowUsernamePen(false);
                }}
              >
                {!editUsername && (
                  <p className="m-0 pl-1 text-methinks-lightgray font-medium text-2xl font-publicSans">
                    {username}
                  </p>
                )}
                {!editUsername && showUsernamePen && (
                  <p
                    className="text-methinks-lightgray hover:text-methinks-darkgray m-0 cursor-pointer"
                    onClick={handleUsernameEdit}
                  >
                    <BsPen className="text-xl" />
                  </p>
                )}
                {editUsername && (
                  <div className="flex items-center w-full">
                    <span className="m-0 pl-1 text-methinks-lightgray font-medium text-2xl">
                      @
                    </span>
                    <input
                      type="text"
                      placeholder="___________________"
                      className="bg-methinks-gray focus:outline-none rounded-md w-full text-methinks-lightgray font-medium text-2xl"
                      onChange={(e) => setUsername("@" + e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div
                className="flex gap-x-2 items-center w-full"
                onMouseEnter={() => {
                  setShowBioPen(true);
                }}
                onMouseLeave={() => {
                  setShowBioPen(false);
                }}
              >
                {!editBio && (
                  <p className="m-0 pl-1 text-methinks-lightgray font-medium text-lg font-publicSans">
                    {bio}
                  </p>
                )}
                {!editBio && showBioPen && (
                  <p
                    className="text-methinks-lightgray hover:text-methinks-darkgray m-0 cursor-pointer"
                    onClick={handleBioEdit}
                  >
                    <BsPen className="text-xl" />
                  </p>
                )}
                {editBio && (
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      placeholder="_______________________________"
                      className="pl-1 bg-methinks-gray focus:outline-none rounded-md w-full text-methinks-lightgray font-medium text-lg"
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {!editName && !editUsername && !editBio && (
            <div className="h-full select-none">&nbsp;&nbsp;</div>
          )}
          {(editName || editUsername || editBio) && (
            <div className="self-end flex items-center gap-x-5 m-0 h-full font-publicSans font-medium">
              <p
                className="text-methinks-white m-0 cursor-pointer hover:text-methinks-lightgray"
                onClick={handleCancel}
              >
                Cancel
              </p>
              <p
                className="text-methinks-white m-0 cursor-pointer hover:text-methinks-lightgray"
                onClick={handleSave}
              >
                Save
              </p>
            </div>
          )}
        </div>
        <div className="!h-full !w-full mb-10 bg-slate-300">
          <Calendar />
          {/* <Calendar setDate={setdate} /> */}
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-y-10 m-10 font-publicSans">
        <div className="flex gap-x-7 items-end">
          <p className="text-methinks-white font-bold text-4xl m-0">Memories</p>
          <p className="text-methinks-darkgray text-2xl m-0">5.16.23</p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-5 text-methinks-white w-full px-4">
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-white pr-1 w-[20px] h-[20px]"></span>
            <p className="mb-0">Thought</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-darkgray pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Prompt</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-purple pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Fleeting Thought</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-black pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Think Out Loud</p>
          </div>
        </div>
        <div className="w-full h-[750px] bg-methinks-gray p-3 rounded-xl overflow-y-auto">
          <div className="flex flex-col gap-y-5 p-3">
            <div className=" h-[180px] w-full bg-white rounded-xl"></div>
            <div className=" h-[180px] w-full bg-white rounded-xl"></div>
            <div className=" h-[180px] w-full bg-white rounded-xl"></div>
            <div className=" h-[180px] w-full bg-white rounded-xl"></div>
            <div className=" h-[180px] w-full bg-white rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
