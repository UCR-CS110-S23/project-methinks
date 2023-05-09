// import { Inter } from "@next/font/google";

// eslint-disable-next-line new-cap
// const inter = Inter({ subsets: ["latin"] });

import Hello from "@components/Hello";
export default function Home() {
  return (
    <div className="text-3xl font-bold underline bg-slate-400">
      <Hello />
    </div>
  );
}
