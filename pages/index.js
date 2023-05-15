// import { Inter } from "@next/font/google";

import Feed from "./Feed.js";

// eslint-disable-next-line new-cap
// const inter = Inter({ subsets: ["latin"] });

// import Post from "./post";

export default function Home() {
  return (
    <div className="">
      {/* <Post /> */}
      {/* {authenticated ? Landing : <Post />} */}
      <Feed />
    </div>
  );
}
