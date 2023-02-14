import Image from "next/image";
import diduLogo from "@/images/svg/didu.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@/images/svg/ArrowsSvgs";
import LinkIcon from "@/images/svg/link-icon.svg";

export const Project = () => {
  return (
    <div className="mt-6 md:mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-projects md:grid-rows-projects gap-[1px] lg:gap-[2px]">
      <div className="bg-hero-bg pr-4 pb-4">
        <div className="flex justify-center bg-white rounded-md h-full min-h-[300px]">
          <Image src={diduLogo} className="w-[60%]" alt="project logo" />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="my-6 lg:mt-0 lg:mb-11 font-unbounded text-indigo-200 text-5xl sm:text-6xl 2xl:text-7xl text-center">
          <a
            href="https://didu-website.vercel.app/"
            className="hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            didu
            <span className="inline-block ml-1">
              <Image src={LinkIcon} alt="Link icon" className="w-8" />
            </span>
          </a>
        </h3>
        <div>
          <p className="text-indigo-200 font-anton text-2xl md:text-3xl 2xl:text-4x;">
            Tech stack:
          </p>
          <ul className="mt-4 flex flex-wrap items-start justify-start text-gray-200 gap-1.5 md:gap-2">
            <li className="bg-[#262837] p-2 rounded-md">React Native</li>
            <li className="bg-[#262837] p-2 rounded-md">Typescript</li>
            <li className="bg-[#262837] p-2 rounded-md">Firebase</li>
            <li className="bg-[#262837] p-2 rounded-md">Expo</li>
            <li className="bg-[#262837] p-2 rounded-md">Something.js</li>
            <li className="bg-[#262837] p-2 rounded-md">AppleStore</li>
            <li className="bg-[#262837] p-2 rounded-md">GooglePlay</li>
            <li className="bg-[#262837] p-2 rounded-md">Xyz.js</li>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <p className="font-unbounded p-4 text-indigo-200 text-base md:text-lg xl:text-xl 2xl:text-2xl tracking-[0px] text-justify">
          Take your household chores to a new level. Less effort, faster
          communication, always done. App designed for making your life easier.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          adipisci aspernatur, cupiditate quaerat molestiae odio nihil optio
          consequuntur modi assumenda! Dolor ratione beatae maiores ab,
          distinctio laborum blanditiis eligendi!
        </p>
      </div>
      <div className="text-white min-h-[100px] flex gap-1 lg:gap-2">
        <button className="w-[50%] h-full bg-hero-bg hover:bg-stone-900 font-unbounded flex flex-col gap-3 items-center justify-center">
          PREVIOUS
          <ArrowLeftIcon />
        </button>
        <button className="w-[50%] h-full bg-hero-bg hover:bg-stone-900 font-unbounded flex flex-col gap-3 items-center justify-center">
          NEXT
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
