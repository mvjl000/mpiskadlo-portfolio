import { motion, Variants } from "framer-motion";
import { DownButton } from "@/components/Hero/DownButton";
import { useIsAnimating } from "@/hooks";

const variantsP1: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
};
const variantsP2: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 1,
      type: "tween",
    },
  },
};
const variantsP3: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 1.5,
      type: "tween",
    },
  },
};

export const Hero = () => {
  const { handleSetIsAnimating } = useIsAnimating("hero");

  return (
    <section
      id="hero"
      className="min-h-screen p-4 pt-10 md:p-5 md:pt-12 bg-gradient-to-b from-hero-bg to-gray-900 relative flex flex-col justify-start"
    >
      <div className="flex items-center justify-start">
        <motion.h1 className="font-unbounded font-[500] text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-900 to-gray-700 text-transparent bg-clip-text">
          @mpiskadlo
        </motion.h1>
      </div>
      <div className="mt-[22vh] md:mt-[16vh] max-w-[1280px] w-full xs:w-10/12 sm:w-9/12 lg:w-7/12 xs:mx-auto flex flex-col flex-grow items-star font-unbounded">
        <motion.p
          className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide text-white"
          variants={variantsP1}
          initial="initial"
          animate="animate"
        >
          Self taught
        </motion.p>
        <motion.p
          className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl tracking-tighter text-yellow-300"
          variants={variantsP2}
          initial="initial"
          animate="animate"
        >
          FRONTEND
        </motion.p>
        <motion.p
          className="ml-auto text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl tracking-tighter text-yellow-100"
          variants={variantsP3}
          initial="initial"
          animate="animate"
          onAnimationStart={() => handleSetIsAnimating(true)}
          onAnimationComplete={() => handleSetIsAnimating(false)}
        >
          DEVELOPER
        </motion.p>
      </div>
      <DownButton />
    </section>
  );
};
