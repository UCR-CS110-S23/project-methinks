import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const { data: session } = useSession();

  const [profileLink, setProfileLink] = useState("");

  useEffect(() => {
    if (session) {
      setProfileLink(`/profile/${session.user.uid}`);
    }
  }, [session]);

  return (
    <div className="text-white flex items-center justify-end px-40 py-5 pb-0 gap-x-5">
      <Link
        className="cursor-pointer hover:text-methinks-lightgray"
        href="/feed"
      >
        Feed
      </Link>
      <Link
        className="cursor-pointer hover:text-methinks-lightgray"
        href={profileLink}
      >
        Profile
      </Link>
    </div>
  );
};

export default Navigation;
