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

// // check for valid dynamic routes
// export async function getStaticPaths() {
//   const paths = await getAllUserIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// // gets current route id's data
// // localhost:3000/post/[id]
// export async function getStaticProps({ params }) {
//   const userData = await getUserData(params.id);
//   return {
//     props: {
//       userData,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = await getUserData(params.id);
  return {
    props: {
      userData,
    },
  };
}
