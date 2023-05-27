import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Cloud from "@/public/assets/landing_cloud.svg";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Signup = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

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
        email,
        image: "@/public/henry2.jpg",
        name,
        password,
        provider: "credential",
        username,
      };

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
        // router.push("/feed");
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

  console.log(name, username, email, password);
  //   console.log("session", session, status);
  return (
    <div className="h-screen w-full bg-methinks-black flex justify-center items-center font-publicSans">
      <Link
        href="/signin"
        className="absolute left-[10%] top-[20%] flex items-center text-methinks-lightgray hover:text-methinks-lightgrayHover duration-300 cursor-pointer text-lg"
      >
        <FaChevronLeft className="text-2xl" />
        <span>Back to Login</span>
      </Link>
      <div className="w-1/4 h-full flex flex-col justify-center py-20 items-center gap-y-8">
        {/* <div className="w-full flex flex-col justify-center items-center"> */}
        <Image src={Cloud} alt="cloud" draggable="false" />
        <div className="flex flex-col gap-y-5 w-full text-xl">
          <p className="self-start text-methinks-white text-4xl font-bold">
            Create an Account
          </p>
          <input
            placeholder="Name"
            type="text"
            value={name}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            value={username}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            type="text"
            value={email}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-methinks-white hover:bg-methinks-green text-xl text-methinks-black hover:text-methinks-black py-2 rounded-xl duration-300"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
        {/* </div> */}
        {/* <p className="text-methinks-white text-sm">OR</p> */}
        {/* <button className="bg-methinks-white hover:bg-methinks-green w-full text-xl text-methinks-black hover:text-methinks-black py-2 rounded-xl flex items-center justify-center gap-x-3">
          <span>
            <FcGoogle className="text-2xl" />
          </span>
          Continue with Google
        </button> */}
        {/* <div className="self-start">
          <p className="text-methinks-lightgray">
            {`Don't`} Have an Account?{" "}
            <span className="text-methinks-green hover:text-methinks-white cursor-pointer underline underline-offset-2">
              Sign Up
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
