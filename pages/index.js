// import { Inter } from "@next/font/google";

import Post from "./ww";

// eslint-disable-next-line new-cap
// const inter = Inter({ subsets: ["latin"] });

// import Post from "./post";

export default function Home() {
  return (
    <div className="h-full">
      {/* <Post /> */}
      {/* {authenticated ? Landing : <Post />} */}
      <Post />
    </div>
  );
}
