import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaChevronLeft } from "react-icons/fa";
import Cloud from "@/public/assets/landing_cloud.svg";
import { generateRandomUID } from "@/lib/generate_uid";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!name || !username || !email || !password) {
      setError("Please Complete your Information!");
    } else {
      const newUser = {
        name,
        email,
        image: "public/henry2.jpg",
        uid: generateRandomUID(),
        username,
        password,
        provider: "credentials",
      };

      console.log(newUser);

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.userExists) {
        setError(data.message);
      } else {
        setError("");
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");

        handleSignin();
      }
    }
  };

  const handleSignin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/feed",
    });
  };

  return (
    <div className="h-screen w-full bg-methinks-black flex justify-center items-center font-publicSans">
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
            Create an Account
          </p>
          <input
            placeholder="Name"
            type="text"
            autoComplete="none"
            value={name}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            autoComplete="none"
            value={username}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            type="text"
            autoComplete={"" + Math.random()}
            value={email}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            autoComplete={"" + Math.random()}
            value={password}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="w-full bg-methinks-white hover:bg-methinks-green text-xl text-methinks-black hover:text-methinks-black py-2 rounded-xl duration-300"
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
