// import { Inter } from "@next/font/google";

// eslint-disable-next-line new-cap
// const inter = Inter({ subsets: ["latin"] });

import Feed from "@/pages/Feed";
// import Post from "./Post";
export default function Home() {
  return (
    <div className="">
      {/* <Post /> */}
      {/* {authenticated ? Landing : <Post />} */}
      <Feed />
    </div>
  );
}
