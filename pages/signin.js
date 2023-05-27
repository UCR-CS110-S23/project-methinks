import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Cloud from "@/public/assets/landing_cloud.svg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Signin = () => {
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogle = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/feed",
    });
  };

  const handleCredentials = async () => {
    if (!email || !password) {
      setError("Incorrect username or password!");
    } else {
      await signIn("credentials", {
        // redirect: false,
        email,
        password,
        // email,
        // password,
        redirect: true,
        callbackUrl: "/feed",
      }).catch((error) => {
        console.log("[Signin-Error]:", error);
      });
      // ADD .then to check if response is null and error is account cant be found
      setError("");
      setEmail("");
      setPassword("");
    }
  };

  console.log("session", session, status);
  console.log(email, password, error);
  return (
    <div className="h-screen w-full bg-methinks-black flex justify-center items-center font-publicSans">
      <div className="w-1/4 h-full flex flex-col justify-center py-20 items-center gap-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src={Cloud} alt="cloud" draggable="false" className="mb-10" />
          <div className="flex flex-col gap-y-3 w-full text-xl">
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
            <button
              className="bg-methinks-white hover:bg-methinks-green text-xl text-methinks-black hover:text-methinks-black py-2 rounded-xl duration-300"
              onClick={handleCredentials}
            >
              Sign in
            </button>
          </div>
        </div>
        <p className="text-methinks-white text-sm">OR</p>
        <button
          className="bg-methinks-white hover:bg-methinks-green w-full text-xl text-methinks-black hover:text-methinks-black py-2 rounded-xl flex items-center justify-center gap-x-3 duration-300"
          onClick={handleGoogle}
        >
          <span>
            <FcGoogle className="text-2xl" />
          </span>
          Continue with Google
        </button>
        <Link href="/signup" className="self-start">
          <p className="text-methinks-lightgray">
            {`Don't`} Have an Account?{" "}
            {/* <span className="text-methinks-green hover:text-methinks-greenHover cursor-pointer underline underline-offset-2 duration-300">
              Sign Up
            </span> */}
            <span
              className="text-methinks-green hover:text-methinks-greenHover cursor-pointer underline underline-offset-2 duration-300"
              onClick={() => signOut()}
            >
              Sign Out
            </span>
          </p>
        </Link>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
      </div>
    </div>
    // <div className="flex flex-col w-1/4 gap-x-5">
    //   <p className="text-methinks-white text-lg">signin</p>
    //   <div className="flex gap-x-10">
    //     <button
    //       className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black"
    //       onClick={handleCredential}
    //     >
    //       Credential
    //     </button>
    //     <button
    //       className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black"
    //       onClick={handleGoogle}
    //     >
    //       Google
    //     </button>
    //     <button
    //       className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black w-fit"
    //       onClick={() => signOut()}
    //     >
    //       Sign Out
    //     </button>
    //   </div>
    // </div>
  );
};

export default Signin;
