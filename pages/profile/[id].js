import React from "react";
// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";

import { getAllUserIds, getUserData } from "@/lib/users";

export default function Profile({ userData }) {
  const user = JSON.parse(userData)[0];
  console.log("profile", user);
  return (
    user && (
      <>
        <FriendsProfile user={user} />
      </>
    )
  );
}

// check for valid dynamic routes
export async function getStaticPaths() {
  const paths = await getAllUserIds();
  return {
    paths,
    fallback: false,
  };
}

// gets current route id's data
// localhost:3000/feed/[id]
export async function getStaticProps({ params }) {
  const userData = await getUserData(params.id);
  console.log("back", userData);
  return {
    props: {
      userData,
    },
  };
}
