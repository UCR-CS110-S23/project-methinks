import React from "react";
import { useRouter } from "next/router";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";
import { getUserData } from "@/lib/users";
import { getProfilePosts, getAnotherUsersProfilePosts } from "@/lib/posts";

export default function Profile({ userData, todayPosts, previousPosts }) {
  const router = useRouter();
  const user = JSON.parse(userData)[0];

  if (!user) {
    router.replace("/404");
    return;
  }
  return (
    <>
      <FriendsProfile
        user={user}
        todayPosts={todayPosts}
        previousPosts={previousPosts}
      />
      {/* <UserProfile /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const userData = await getUserData(context.params.id);

  if (!userData) {
    return {
      props: {
        userData: null,
        postsData: null,
      },
    };
  }

  const session = await getServerSession(context.req, context.res, authOptions);

  let profileData = "";
  if (context.params.id !== session?.user?.uid) {
    profileData = await getAnotherUsersProfilePosts(context.params.id);
  } else {
    profileData = await getProfilePosts(context.params.id);
  }

  const { todayPosts, previousPosts } = JSON.parse(JSON.stringify(profileData));

  todayPosts.map((post) => {
    return (post.date = new Date(post.date).toLocaleTimeString([], {
      timeStyle: "medium",
    }));
  });

  previousPosts.map((post) => {
    return (post.date = new Date(post.date)
      .toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join("-"));
  });
  return {
    props: {
      userData,
      todayPosts: todayPosts.reverse(),
      previousPosts: previousPosts.reverse(),
    },
  };
}
