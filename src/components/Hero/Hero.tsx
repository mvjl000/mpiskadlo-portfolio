import { AboutMe } from "./AboutMe";
import { motion } from "framer-motion";
import { DownButton } from "./DownButton";

export const Hero = () => {
  const age = new Date().getFullYear() - 2004;
  return (
    <section
      id="hero"
      className="min-h-screen p-4 pt-10 md:p-5 md:pt-12 bg-gradient-to-b from-hero-bg to-gray-900 relative"
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
        className="mt-20 text-2xl text-indigo-200 font-unbounded tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.75 }}
      >
        Self taught
        <br />
        <span className="text-3xl">frontend developer</span>
      </motion.p>
      <DownButton />
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
