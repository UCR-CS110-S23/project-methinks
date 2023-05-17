import Layout from "@/components/Layout";
import "../styles/globals.css";
/* eslint-disable camelcase */
import { Public_Sans } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

/* eslint-disable new-cap */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
