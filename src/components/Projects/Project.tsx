import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/images/svg/ArrowsSvgs";
import LinkIcon from "@/images/svg/link-icon.svg";
import GithubIcon from "@/images/svg/github-icon.svg";
import { ProjectType } from "@/pages";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface ProjectProps {
  data: ProjectType;
  handleChangeIndex: (action: "next" | "prev") => void;
  direction: "next" | "prev" | undefined;
}

const variants: Variants = {
  initial: (direction) => {
    return {
      x: direction === "next" ? "110%" : "-110%",
    };
  },
  animate: {
    x: 0,
  },
  exit: (direction) => {
    return {
      x: direction === "next" ? "-110%" : "110%",
    };
  },
};

export const Project = ({
  data,
  handleChangeIndex,
  direction,
}: ProjectProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      className="h-full flex flex-col justify-start md:grid md:grid-cols-projects md:grid-rows-projects gap-[1px] lg:gap-[2px] absolute"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      transition={{ duration: 0.75 }}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div className="hidden md:block px-4 py-4 md:pt-0">
        <div className="w-full h-full min-h-[300px] flex justify-center items-center p-4 bg-white rounded-md">
          <div className="w-full h-full  overflow-hidden relative">
            <Image
              src={data.gallery[0].url}
              alt="project logo"
              fill={true}
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="my-6 lg:mt-0 lg:mb-11 font-unbounded text-indigo-200 text-5xl sm:text-6xl 2xl:text-7xl text-center">
          <a
            href={data.projectUrl}
            className="hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {data.title}
            <span className="inline-block ml-1">
              <Image src={LinkIcon} alt="Link icon" className="w-8" />
            </span>
          </a>
        </h3>
        <div>
          <div className="flex justify-center md:justify-between">
            <p className="hidden md:block text-indigo-200 font-anton text-2xl md:text-3xl 2xl:text-4x;">
              Tech stack:
            </p>
            {data.repoUrl ? (
              <a
                className="text-white flex items-center justify-center w-11 h-11 rounded-md hover:bg-stone-700"
                href="https://github.com/mvjl000"
              >
                <Image
                  src={GithubIcon}
                  className="w-10 h-10"
                  alt="Github icon"
                />
                <span className="visually-hidden">See the repo</span>
              </a>
            ) : null}
          </div>
          <ul className="mt-4 flex flex-wrap items-start justify-start text-gray-200 gap-1.5 md:gap-2">
            {data.techStack.data.map((item, index) => (
              <li key={index} className="bg-[#262837] p-2 rounded-md">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-white">
        <p className="font-unbounded p-4 text-indigo-200 text-base md:text-lg xl:text-xl 2xl:text-2xl tracking-[0px] text-justify">
          {data.description}
        </p>
      </div>
      <div className="text-white min-h-[100px] mt-auto md:mt-0 flex gap-1 lg:gap-2">
        <button
          type="button"
          disabled={isAnimating}
          onClick={() => handleChangeIndex("prev")}
          className="w-[50%] h-full bg-hero-bg hover:bg-stone-900 font-unbounded flex flex-col gap-3 items-center justify-center disabled:hover:bg-hero-bg disabled:cursor-default"
        >
          PREVIOUS
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          disabled={isAnimating}
          onClick={() => handleChangeIndex("next")}
          className="w-[50%] h-full bg-hero-bg hover:bg-stone-900 font-unbounded flex flex-col gap-3 items-center justify-center disabled:hover:bg-hero-bg disabled:cursor-default"
        >
          NEXT
          <ArrowRightIcon />
        </button>
      </div>
    </motion.div>
  );
};
