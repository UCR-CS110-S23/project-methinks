import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { FaChevronLeft } from "react-icons/fa";
import Cloud from "@/public/assets/landing_cloud.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!name || !username || !email || !password) {
      setError("Please complete your information!");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
    } else if (!validateUsername(username)) {
      setError("Username can only contain alphanumeric characters!");
    } else {
      const newUser = {
        name,
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password,
      };

      axios
        .post("/api/auth/signup", newUser)
        .then(({ data }) => {
          if (data.success) {
            setError("");
            setName("");
            setUsername("");
            setEmail("");
            setPassword("");

            handleSignin();
          }
        })
        .catch((error) => {
          if (error.response.data.userAlreadyExists) {
            setError(error.response.data.message);
            return;
          }
          console.log("[Signup-Error]", error);
        });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  };

  console.log(error, name);
  const handleSignin = async () => {
    await signIn("credentials", {
      email: email.toLowerCase(),
      password,
      redirect: true,
      callbackUrl: "/feed",
    });
  };

  return (
    <div className="h-screen w-full bg-methinks-background flex justify-center items-center font-publicSans">
      <Link
        href="/signin"
        className="absolute left-[10%] top-[15%] flex items-center text-methinks-lightgray hover:text-methinks-lightgrayHover duration-300 cursor-pointer text-lg"
      >
        <FaChevronLeft className="text-2xl" />
        <span>Back to Login</span>
      </Link>
      <div className="w-1/4 h-full flex flex-col justify-center py-20 items-center gap-y-8">
        <Image src={Cloud} alt="cloud" draggable="false" />
        <form
          autoComplete="none"
          className="flex flex-col gap-y-5 w-full text-xl"
        >
          <p className="self-start text-methinks-white text-4xl font-bold">
            Create Your Account
          </p>
          <input
            placeholder="Name"
            type="text"
            autoComplete="none"
            value={name}
            className="border-b-2 border-methinks-white bg-methinks-background w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            autoComplete="none"
            value={username}
            className="border-b-2 border-methinks-white bg-methinks-background w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            type="text"
            autoComplete={"" + Math.random()}
            value={email}
            className="border-b-2 border-methinks-white bg-methinks-background w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            autoComplete={"" + Math.random()}
            value={password}
            className="border-b-2 border-methinks-white bg-methinks-background w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="w-full bg-methinks-white hover:bg-methinks-green text-xl text-methinks-black hover:text-methinks-darkgray py-2 rounded-xl duration-300 hover:drop-shadow-glow"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
