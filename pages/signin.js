import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cloud from "@/public/assets/landing_cloud.svg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

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
      try {
        const response = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (response.status === 200) {
          console.log("[Signin-Success]:", response);

          setError("");
          setEmail("");
          setPassword("");

          router.replace("/feed");
        } else {
          setError("Incorrect username or password!");
          console.log("[Signin-Error]:", response);
        }
      } catch (error) {
        console.log("[Signin-Error]:", error);
      }
    }
  };

  console.log("session", session, status);
  return (
    <div className="h-screen w-full bg-methinks-black flex justify-center items-center font-publicSans">
      <div className="w-1/4 h-full flex flex-col justify-center py-20 items-center gap-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <Link href="/landing">
            <Image
              src={Cloud}
              alt="cloud"
              draggable="false"
              className="mb-10"
            />
          </Link>
          <div className="flex flex-col gap-y-3 w-full text-xl">
            <input
              placeholder="Email"
              type="text"
              value={email}
              className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none duration"
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
            <span className="text-methinks-green hover:text-methinks-greenHover cursor-pointer underline underline-offset-2 duration-300">
              Sign Up
            </span>
          </p>
        </Link>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
