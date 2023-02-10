import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Unbounded, Anton, Montserrat } from "@next/font/google";

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
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={`${montserrat.variable} ${unbounded.variable} ${anton.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
