import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Signin = () => {
  const { data: session, status } = useSession();

  const handleCredential = async () => {
    // await signIn("credentials", {
    //   username: "mika",
    //   password: "123",
    //   redirect: true,
    //   callbackUrl: "/",
    // });
    await signIn("credentials", {
      // redirect: false,
      email: "m@gmail.com",
      password: "123",
      redirect: true,
      callbackUrl: "/",
    });
    // .then((response) => {
    //   console.log("SIGNIN", response);
    //   // router.replace("/");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const handleGoogle = async () => {
    await signIn("google");
  };

  console.log("session", session, status);
  return (
    <div className="flex flex-col w-1/4 gap-x-5">
      <p className="text-methinks-white text-lg">signin</p>
      {/* <p className="text-methinks-white">email</p>
      <input type="text" placeholder="" />
      <p className="text-methinks-white">password</p>
      <input type="text" placeholder="" /> */}
      <div className="flex gap-x-10">
        <button
          className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black"
          onClick={handleCredential}
        >
          Credential
        </button>
        <button
          className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black"
          onClick={handleGoogle}
        >
          Google
        </button>
        <button
          className="bg-methinks-darkgray text-methinks-white hover:text-methinks-black w-fit"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Signin;
