import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";

import { Unbounded, Anton, Montserrat } from "@next/font/google";
import { Layout } from "@/components/Layout";
import Head from "next/head";

const unbounded = Unbounded({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Miłosz Piskadło</title>
        <meta
          name="description"
          content="Miłosz Piskadło, frontend developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} ${unbounded.variable} ${anton.variable} font-sans`}
      >
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}
