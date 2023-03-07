import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/images/svg/ArrowsSvgs";
import LinkIcon from "@/images/svg/link-icon.svg";
import GithubIcon from "@/images/svg/github-icon.svg";
import { ProjectType } from "@/pages";
import { motion, Variants } from "framer-motion";
import { useIsAnimating } from "@/hooks/useIsAnimating";

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

const buttonsVariants: Variants = {
  whileHover: (direction) => {
    if (direction === "next")
      return {
        paddingLeft: 15,
        transition: { duration: 0.5, type: "spring", stiffness: 400 },
      };

    return {
      paddingRight: 15,
      transition: { duration: 0.5, type: "spring", stiffness: 400 },
    };
  },
};

export const Project = ({
  data,
  handleChangeIndex,
  direction,
}: ProjectProps) => {
  const { isAnimating, handleSetIsAnimating } = useIsAnimating();

  return (
    <motion.div
      className="h-full flex flex-col justify-start lg:grid lg:grid-cols-projects lg:grid-rows-projects gap-[1px] lg:gap-[2px] absolute"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      transition={{ duration: 0.75 }}
      onAnimationStart={() => handleSetIsAnimating(true)}
      onAnimationComplete={() => handleSetIsAnimating(false)}
    >
      <div className="hidden lg:block px-4 py-4 lg:pt-0">
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
          <div className="md:my-5 lg:my-0 flex justify-center lg:justify-between">
            <p className="hidden lg:block text-indigo-200 font-anton text-2xl lg:text-3xl 2xl:text-4x;">
              Tech stack:
            </p>
            {data.repoUrl ? (
              <a
                className="text-white flex items-center justify-center w-11 h-11 rounded-md hover:bg-stone-800"
                href={data.repoUrl}
                rel="noreferrer"
                target="_blank"
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
          <ul className="mt-4 flex flex-wrap items-start justify-start text-gray-200 gap-1.5 lg:gap-2">
            {data.techStack.data.map((item, index) => (
              <li key={index} className="bg-[#262837] p-2 rounded-md">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="font-unbounded p-4 text-indigo-200 text-base md:text-lg xl:text-xl 2xl:text-2xl tracking-[0px] text-justify">
        {data.description}
      </p>
      <div className="text-white min-h-[100px] mt-auto lg:mt-0 flex gap-1 lg:gap-2">
        <motion.button
          type="button"
          disabled={isAnimating}
          onClick={() => handleChangeIndex("prev")}
          className="w-[50%] h-full flex flex-col gap-3 items-center justify-center relative bg-hero-bg hover:bg-[#111] focus:bg-[#111] disabled:hover:bg-hero-bg disabled:opacity-50 disabled:cursor-default font-unbounded rounded-md transition-colors"
          variants={buttonsVariants}
          whileHover="whileHover"
          whileFocus="whileHover"
          custom="prev"
        >
          PREVIOUS
          <ArrowLeftIcon />
        </motion.button>
        <motion.button
          type="button"
          disabled={isAnimating}
          onClick={() => handleChangeIndex("next")}
          className="w-[50%] h-full flex flex-col gap-3 items-center justify-center relative bg-hero-bg hover:bg-[#111] focus:bg-[#111] disabled:hover:bg-hero-bg disabled:opacity-50 disabled:cursor-default font-unbounded rounded-md transition-colors"
          variants={buttonsVariants}
          whileHover="whileHover"
          whileFocus="whileHover"
          custom="next"
        >
          NEXT
          <ArrowRightIcon />
        </motion.button>
      </div>
    </motion.div>
  );
};
