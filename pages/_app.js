import Layout from "@/components/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

/* eslint-disable camelcase */
import { Public_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <SessionProvider session={pageProps.session}>
      <main className={`${publicSans.variable} ${outfit.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}
