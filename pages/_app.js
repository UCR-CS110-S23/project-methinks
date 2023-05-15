import Layout from "@/components/Layout";
import "../styles/globals.css";
/* eslint-disable camelcase */
import { Public_Sans } from "@next/font/google";

/* eslint-disable new-cap */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${publicSans.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
