import Image from "next/image";
import diduLogo from "@/images/didu.svg";

export const Project = () => {
  return (
    <div className="mt-6 md:mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-projects gap-[1px] lg:gap-[2px] bg-neutral-700">
      <div className="bg-hero-bg p-4">
        <div className="h-[350px] flex justify-center bg-white rounded-md">
          <Image src={diduLogo} className="w-[60%]" alt="project logo" />
        </div>
      </div>
      <div className="p-4 bg-hero-bg">
        <p className="text-indigo-200 font-anton text-2xl md:text-3xl">
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
      <div className="text-white bg-hero-bg">
        <p className="font-unbounded p-4 text-indigo-200 text-base md:text-lg xl:text-xl 2xl:text-2xl tracking-[0px]">
          Take your household chores to a new level. Less effort, faster
          communication, always done. App designed for making your life easier.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          adipisci aspernatur, cupiditate quaerat molestiae odio nihil optio
          consequuntur modi assumenda! Dolor ratione beatae maiores ab,
          distinctio laborum blanditiis eligendi!
        </p>
      </div>
      <div className="text-white min-h-[100px] flex gap-[1px] lg:gap-[2px] bg-neutral-700">
        <button className="w-[50%] h-full bg-hero-bg">L</button>
        <button className="w-[50%] h-full bg-hero-bg">R</button>
      </div>
    </div>
  );
};
