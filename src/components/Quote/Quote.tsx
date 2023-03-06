import Image from "next/image";
import { ParallaxText } from "./ParallaxText";
import GithubIcon from "@/images/svg/github-icon-yellow.svg";

export const Quote = () => {
  return (
    <div className="lg:min-h-[30vh] mt-10 py-10 bg-gradient-to-b from-hero-bg via-black to-black flex flex-col justify-center border-t-2 border-b-2 border-stone-800 border-dashed">
      <ParallaxText baseVelocity={-2}>
        Talk is cheap, show me the code.
      </ParallaxText>
      <ParallaxText baseVelocity={2}>
        ~Linus Torvalds, or Kanye West
      </ParallaxText>
      <div className="mt-10 pr-3 lg:pr-10 flex justify-end items-center">
        <a
          className="flex gap-2 font-unbounded text-yellow-100 text-lg lg:text-2xl hover:underline active:underline"
          href="https://github.com/mvjl000"
          rel="noreferrer"
          target="_blank"
        >
          check out my github profile
          <Image src={GithubIcon} className="w-8 h-8" alt="Github icon" />
        </a>
      </div>
    </div>
  );
};
