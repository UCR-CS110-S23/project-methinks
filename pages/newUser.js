import React, { useState } from "react";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";

// import { authOptions } from "pages/api/auth/[...nextauth]";

import axios from "axios";

export default function NewUser() {
  const { data: session, status, update } = useSession();
  const [username, setUsername] = useState("");
  console.log("session", session.user, status);

  const handleSubmit = async () => {
    try {
      console.log("client", username);
      const response = await axios.post("/api/auth/updateUsername", {
        username,
      });
      const data = response.data;
      if (data.success) {
        console.log(data);
        // NextAuth function to update mutated session object attribute
        update({ username });
        setUsername("");
      }
    } catch (error) {
      if (error.response.data.userAlreadyExists) {
        // setError(error.response.data.message);
        console.log("user already exists");
      }
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col">
      <input
        value={username}
        placeholder="Enter username"
        className="bg-methinks-black text-methinks-white"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       user: session.user,
//     },
//   };
// }
