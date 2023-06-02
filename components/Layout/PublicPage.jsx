import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const PublicPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && status === "authenticated") {
      router.replace("/feed");
    }
  }, [status, router]);

  // if (status === "loading") {
  //   return <p className="bg-red-500 h-screen w-screen">Loading...</p>;
  // }

  console.log("session", session?.user, status);

  return (
    status !== "loading" &&
    status === "unauthenticated" && (
      <div className="bg-methinks-background">
        <>{children}</>
      </div>
    )
  );
};

export default PublicPage;
