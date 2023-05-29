import React from "react";
import { useSession } from "next-auth/react";

const NewUser = () => {
  const { data: session, status } = useSession();
  console.log("session", session, status);

  return <div>newUser</div>;
};

export default NewUser;
