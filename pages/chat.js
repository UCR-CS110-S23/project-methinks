import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import io from "socket.io-client";
import { useSession } from "next-auth/react";

import ScrollToBottom from "react-scroll-to-bottom";
import { chatRooms } from "@/public/data/tags";
import { FiSend } from "react-icons/fi";

let socket;

const Chat = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("#general");

  useEffect(() => {
    socketInitializer();
    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    axios
      .get(`/api/getMessages`)
      .then(({ data }) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       author: "momo",
  //       message: "ONE",
  //       room: "#general",
  //       uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
  //     },
  //     {
  //       author: "momo",
  //       message: "TWO",
  //       room: "#general",
  //       uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
  //     },
  //     {
  //       author: "momo",
  //       message: "ONE",
  //       room: "#news",
  //       uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
  //     },
  //     {
  //       author: "momo",
  //       message: "TWO",
  //       room: "#news",
  //       uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
  //     },
  //   ]);
  //   console.log("change");
  // }, [room]);

  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket = io(undefined, {
      path: "/api/socket_io",
    });

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        {
          author: msg.author,
          uid: msg.uid,
          image: msg.image,
          message: msg.message,
          room: msg.room,
        },
      ]);
    });

    return true;
  };

  const sendMessage = async () => {
    if (message) {
      socket.emit("createdMessage", {
        author: session.user.username,
        uid: session.user.uid,
        image: session.user.image,
        message,
        room,
      });
      const addMessage = {
        author: session.user.username,
        uid: session.user.uid,
        image: session.user.image,
        message,
        room,
      };
      axios
        .post("/api/addMessage", addMessage)
        .then(({ data }) => {
          if (data.success) {
            setMessages((currentMsg) => [
              ...currentMsg,
              {
                author: session.user.username,
                uid: session.user.uid,
                image: session.user.image,
                message,
                room,
              },
            ]);
          }
        })
        .catch((error) => {
          console.log("[Chat-Error]", error);
        });
      setMessage("");
      return true;
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  const handleRoomChange = (thisRoom) => {
    if (room !== thisRoom) {
      socket.emit("leaveRoom", room);
      // setMessages([
      //   {
      //     author: "momo",
      //     message: "ONE",
      //     room: "#general",
      //     uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
      //   },
      //   {
      //     author: "momo",
      //     message: "TWO",
      //     room: "#general",
      //     uid: "45a6246a-2b58-4343-8950-5e891523e8e6",
      //   },
      // ]);
      setRoom(thisRoom);
      socket.emit("joinRoom", thisRoom);
    }
  };
  console.log(messages);
  return (
    <div className="min-h-screen h-full w-full flex items-center justify-center p-5">
      <div className="h-[37em]">
        <div className="h-full w-full gap-y-5 flex flex-col justify-center items-center rounded-3xl rounded-r-none p-3 bg-methinks-black">
          {chatRooms.map((thisRoom, index) => {
            return (
              <div
                key={index}
                className={`${
                  room === thisRoom
                    ? `bg-methinks-lightgray text-methinks-black`
                    : `text-methinks-lightgrayHover hover:text-methinks-white`
                } p-2 px-7 rounded-3xl cursor-pointer w-full duration-100`}
                onClick={() => handleRoomChange(thisRoom)}
              >
                <p className="m-0 font-semibold text-lg">{thisRoom}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[55%]">
        <div className="bg-methinks-lightblack w-full p-5 flex flex-col justify-between rounded-xl rounded-l-none">
          <p className="text-methinks-purple flex justify-center font-semibold text-xl rounded-3xl">
            {room}
          </p>
          <div>
            <ScrollToBottom className="flex h-[30.1rem] flex-col gap-y-3 overflow-y-auto">
              {messages.map((msg, index) => {
                if (msg.room === room) {
                  return (
                    <div
                      key={index}
                      className={`${
                        msg.author === session.user.username
                          ? `justify-end`
                          : ``
                      } flex gap-x-2 mb-3 items-end`}
                    >
                      {msg.author === session.user.username ? (
                        ``
                      ) : (
                        <Link
                          href={`/profile/${msg.uid}`}
                          className="rounded-full"
                        >
                          <Image
                            src={msg.image}
                            alt="hot hot henry"
                            referrerPolicy="no-referrer"
                            className="rounded-full hover:opacity-70 duration-300 cursor-pointer"
                            width="40"
                            height="40"
                            draggable={false}
                          />
                        </Link>
                      )}
                      <div className={`flex flex-col gap-y-1`}>
                        <p
                          className={`${
                            msg.author === session.user.username
                              ? `text-right`
                              : `text-left`
                          } text-methinks-white`}
                        >
                          {msg.author}
                        </p>
                        <div
                          className={`p-2 px-3 rounded-xl text-methinks-black text-center ${
                            msg.author === session.user.username
                              ? `bg-methinks-green`
                              : `bg-methinks-lightgray`
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </ScrollToBottom>
            <div className="flex items-center text-methinks-white border-b-2 border-b-methinks-white py-2 px-4">
              <input
                name="message"
                type="text"
                value={message}
                placeholder="Message..."
                autoComplete={"off"}
                className="w-full bg-methinks-lightblack focus:outline-none"
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeypress}
              />
              <FiSend
                className="text-lg cursor-pointer hover:text-methinks-darkgray duration-300"
                onClick={() => {
                  sendMessage();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
