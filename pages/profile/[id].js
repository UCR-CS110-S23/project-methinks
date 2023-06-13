import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// import UserProfile from "@/components/Profile/UserProfile";
import FriendsProfile from "@/components/Profile/FriendsProfile";
import { getUserData } from "@/lib/users";
import { getProfilePosts, getAnotherUsersProfilePosts } from "@/lib/posts";
import mintcloud from "@/public/mintcloud.svg";
import hovercloud from "@/public/hovercloud.svg";

export default function Profile({ userData, todayPosts, previousPosts }) {
  const router = useRouter();
  const user = JSON.parse(userData)[0];
  const [newPostToggle, setNewPostToggle] = useState(false);

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
      <Link
        href="/post"
        className="fixed right-[12%] bottom-[10%] z-[20] hover:drop-shadow-glow duration-300"
      >
        <div className="hover:text-methinks-darkgray">
          {newPostToggle ? (
            <Image
              src={hovercloud}
              alt="hover cloud img"
              className="cursor-pointer scale-95 duration-[400ms]"
              onMouseLeave={() => setNewPostToggle(false)}
            />
          ) : (
            <Image
              src={mintcloud}
              alt="mint cloud img"
              className="cursor-pointer scale-105 duration-[400ms]"
              onMouseEnter={() => setNewPostToggle(true)}
            />
          )}
        </div>
      </Link>
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
