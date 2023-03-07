import { AboutMe } from "./AboutMe";
import {
  motion,
  Variants,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

export const Hero = () => {
  const age = new Date().getFullYear() - 2004;
  return (
    <section
      id="hero"
      className="min-h-screen p-4 pt-10 md:p-5 md:pt-12 bg-hero-bg relative overflow-hidden"
    >
      <div className="flex items-center justify-start md:justify-center">
        <motion.h1
          className="font-unbounded font-[500] text-[2.8rem] sm:text-6xl lg:text-7xl 2xl:text-8xl bg-gradient-to-r from-indigo-600 via-indigo-300 to-blue-300 text-transparent bg-clip-text select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          @mpiskadlo
        </motion.h1>
      </div>
      <motion.p
        className="mt-10 text-3xl text-indigo-200 font-unbounded tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.75 }}
      >
        Self taught
        <br />
        <span className="text-4xl">frontend developer</span>
      </motion.p>
      <motion.div className="mt-16 w-[300px] h-[300px] border-2 border-indigo-300 rounded-full relative">
        <p className="text-white font-mono text-xl">
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[6deg]">
            G
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[12deg]">
            e
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[18deg]">
            t
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[24deg]">
            {" "}
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[30deg]">
            t
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[36deg]">
            o
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[42deg]">
            {" "}
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[48deg]">
            k
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[54deg]">
            n
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[60deg]">
            o
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[66deg]">
            w
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[72deg]">
            {" "}
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[78deg]">
            m
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[84deg]">
            e
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[90deg]">
            {" "}
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[96deg]">
            b
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[104deg]">
            e
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[110deg]">
            t
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[116deg]">
            t
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[122deg]">
            e
          </span>
          <span className="h-[150px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[128deg]">
            r
          </span>
        </p>
      </motion.div>
      {/* <motion.p
        className="mt-8 text-xl text-indigo-200 font-unbounded text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.5 }}
      >
        I am a {age} y.o. self taught frontend developer. I have been
        programming since the beginning of 2020 🦠 (such a great time to start
        coding 😅).
      </motion.p> */}
      {/* <AboutMe /> */}
    </section>
  );
};
