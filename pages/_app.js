import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { useSSR } from "@nextui-org/react";

import PublicPage from "@/components/Layout/PublicPage";
import ProtectedPage from "@/components/Layout/ProtectedPage";
import "../styles/globals.css";

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
  const { isBrowser } = useSSR();
  const router = useRouter();

  const publicPages = ["/landing", "/signin", "/signup"];
  const isPagePublic = publicPages.includes(router.pathname);

  console.log(isPagePublic, router.pathname);
  return (
    isBrowser && (
      <SessionProvider session={pageProps.session}>
        <main className={`${publicSans.variable} ${outfit.variable}`}>
          {isPagePublic ? (
            <PublicPage>
              <Component {...pageProps} />
            </PublicPage>
          ) : (
            <ProtectedPage>
              <Component {...pageProps} />
            </ProtectedPage>
          )}
        </main>
      </SessionProvider>
    )
  );
}
