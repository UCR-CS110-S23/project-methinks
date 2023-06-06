import React from "react";
import { useRouter } from "next/router";
// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";
import { getUserData } from "@/lib/users";
import { getProfilePosts } from "@/lib/posts";

export default function Profile({ userData, todayPosts, previousPosts }) {
  const router = useRouter();
  const user = JSON.parse(userData)[0];

  if (!user) {
    router.replace("/404");
    return;
  }
  console.log(todayPosts, previousPosts);
  return (
    <>
      <FriendsProfile
        user={user}
        todayPosts={todayPosts}
        posts={previousPosts}
      />
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
  const { todayPosts, previousPosts } = JSON.parse(
    JSON.stringify(await getProfilePosts(params.id))
  );
  return {
    props: {
      userData,
      todayPosts: todayPosts.reverse(),
      previousPosts: previousPosts.reverse(),
    },
  };
}
