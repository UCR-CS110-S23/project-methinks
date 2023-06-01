import React from "react";
import { useRouter } from "next/router";
// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";

import { getUserData } from "@/lib/users";

export default function Profile({ userData }) {
  const user = JSON.parse(userData)[0];
  const router = useRouter();

  if (!user) {
    router.replace("/404");
    return;
  }
  return (
    user && (
      <>
        <FriendsProfile user={user} />
      </>
    )
  );
}

export async function getServerSideProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = await getUserData(params.id);
  return {
    props: {
      userData,
    },
  };
}
