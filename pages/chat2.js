import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket;

export default function Home() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("general"); // New state for room

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket = io(undefined, {
      path: "/api/socket_io",
    });

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message, room: msg.room },
      ]);
    });

    return true;
  };

  const sendMessage = async () => {
    socket.emit("createdMessage", { author: chosenUsername, message, room });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message, room },
    ]);
    setMessage("");
    return true;
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  const handleRoomChange = (selectedRoom) => {
    if (room !== selectedRoom) {
      socket.emit("leaveRoom", room);
      setMessages([]);
      setRoom(selectedRoom);
      socket.emit("joinRoom", selectedRoom);
    }
  };

  return (
    <div className="flex items-center p-4 mx-auto min-h-screen justify-center bg-purple-500">
      <main className="gap-4 flex flex-col items-center justify-center w-full h-full">
        {!chosenUsername ? (
          <>
            <h3 className="font-bold text-white text-xl">
              How people should call you?
            </h3>
            <input
              type="text"
              placeholder="Identity..."
              value={username}
              className="p-3 rounded-md outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={() => {
                setChosenUsername(username);
              }}
              className="bg-white rounded-md px-4 py-2 text-xl"
            >
              Go!
            </button>
          </>
        ) : (
          <>
            <p className="font-bold text-white text-xl">
              Your username: {username}
            </p>
            <div className="flex flex-col justify-end bg-white h-[20rem] min-w-[33%] rounded-md shadow-md">
              <div className="h-full last:border-b-0 overflow-y-scroll">
                {messages.map((msg, i) => {
                  if (msg.room === room) {
                    // Only render messages for the current room
                    return (
                      <div
                        className="w-full py-1 px-2 border-b border-gray-200"
                        key={i}
                      >
                        {msg.author}: {msg.message}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="border-t border-gray-300 w-full flex rounded-bl-md">
                <input
                  type="text"
                  placeholder="New message..."
                  value={message}
                  className="outline-none py-2 px-2 rounded-bl-md flex-1"
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={handleKeypress}
                />
                <div className="border-l border-gray-300 flex justify-center items-center  rounded-br-md group hover:bg-purple-500 transition-all">
                  <button
                    className="group-hover:text-white px-3 h-full"
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className={`mr-2 ${room === "general" ? "bg-purple-500" : ""}`}
                onClick={() => handleRoomChange("general")}
              >
                General
              </button>
              <button
                className={`mr-2 ${room === "random" ? "bg-purple-500" : ""}`}
                onClick={() => handleRoomChange("random")}
              >
                Random
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
