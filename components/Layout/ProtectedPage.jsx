import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navigation from "../Navigation";

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [status, router]);

  console.log("session", session?.user, status);

  if (router.pathname === "/newUser") {
    return (
      <div className="bg-methinks-background">
        <>{children}</>
      </div>
    );
  }

  //   if (status === "loading") {
  //     return <p className="bg-red-500 h-screen w-screen text-8xl">Loading...</p>;
  //   }

  return (
    status !== "loading" &&
    status === "authenticated" && (
      <div className="bg-methinks-background">
        <>
          <Navigation />
          {children}
        </>
      </div>
    )
  );
};

export default ProtectedPage;
