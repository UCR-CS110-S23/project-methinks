import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
// import { getServerSession } from "next-auth/next";

// import { authOptions } from "pages/api/auth/[...nextauth]";

export default function NewUser() {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      const name = session.user.name.split(" ")[0];
      setDisplayName(
        name.charAt(0).toUpperCase() + name?.split(" ")[0].slice(1)
      );
    }
  }, [session]);

  // const sessionName = session?.user?.name.split(" ")[0];
  // const name =
  //   sessionName?.charAt(0).toUpperCase() + sessionName?.split(" ")[0].slice(1);

  const handleSubmit = () => {
    if (!username) {
      setError("Please enter a username!");
    } else {
      axios
        .post("/api/auth/setupUsername", {
          username,
        })
        .then(({ data }) => {
          if (data.success) {
            console.log(data);
            // NextAuth function to update mutated session object attribute
            update({ username });
            setUsername("");
            setError("");

            router.replace("/feed");
          }
        })
        .catch((error) => {
          if (error.response.data.userAlreadyExists) {
            setError(error.response.data.message);
            return;
          }
          console.log("[NewUser-Error]", error);
        });
    }
  };
  return (
    <div className="h-screen w-screen bg-methinks-black flex justify-center items-center">
      <div className="flex flex-col w-1/4 gap-y-3">
        <div>
          <p className="self-start text-methinks-white text-4xl font-bold">
            Welcome, {displayName}!
          </p>
          <p className="self-start text-methinks-lightGray text-lg font-medium ">
            {"Let's"} setup your username.
          </p>
        </div>
        <input
          value={username}
          type="text"
          placeholder="Username"
          className="border-b-2 border-methinks-white bg-methinks-black w-full py-2 px-1 text-methinks-white focus:outline-none text-xl"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-methinks-white hover:bg-methinks-green text-xl text-methinks-black hover:text-methinks-darkgray py-2 rounded-xl duration-300"
          onClick={handleSubmit}
        >
          Start Thinking...
        </button>
        <div className="w-full h-[30px] flex justify-center items-center">
          <p className="text-red-500">{error} </p>
        </div>
      </div>
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
