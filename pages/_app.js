import Layout from "@/components/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

/* eslint-disable camelcase */
import { Public_Sans } from "next/font/google";

/* eslint-disable new-cap */
import { Outfit } from "next/font/google";

/* eslint-disable new-cap */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={`${publicSans.variable} ${outfit.variable}`}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  );
}
