import React from "react";
import { useRouter } from "next/router";
// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";

import { getUserData } from "@/lib/users";
import { getAllPostsByUser } from "@/lib/posts";

export default function Profile({ userData, postsData }) {
  const router = useRouter();
  const user = JSON.parse(userData)[0];

  if (!user) {
    router.replace("/404");
    return;
  }
  return (
    <>
      <FriendsProfile user={user} posts={postsData} />
      {/* <UserProfile /> */}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const userData = await getUserData(params.id);

  if (!userData) {
    return {
      props: {
        userData: null,
        postsData: null,
      },
    };
  }
  const postsData = await getAllPostsByUser(params.id);
  return {
    props: {
      userData,
      postsData: postsData.reverse(),
    },
  };
}
