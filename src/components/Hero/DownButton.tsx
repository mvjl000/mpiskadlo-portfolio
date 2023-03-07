import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "@/images/svg/ArrowsSvgs";

const variants: Variants = {
  initial: {
    x: "-50%",
    y: "85%",
    opacity: 0.5,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      delay: 2.1,
    },
  },
};

export const DownButton = () => {
  const handleScroll = () => {
    const experienceSection = document.getElementById("experience");
    if (!experienceSection) return;

    experienceSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="absolute bottom-[10%] left-[50%]"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.button
        type="button"
        onClick={handleScroll}
        className="block w-[200px] h-[200px] border-2 border-white rounded-full hover:bg-slate-900 transition-colors relative cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <p className="text-white font-mono text-xl origin-center">
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-80deg]">
            G
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-72deg]">
            e
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-64deg]">
            t
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-56deg]">
            {" "}
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-48deg]">
            t
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-40deg]">
            o
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-32deg]">
            {" "}
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-24deg]">
            k
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-16deg]">
            n
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[-8deg]">
            o
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[0deg]">
            w
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[8deg]">
            {" "}
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[16deg]">
            m
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[24deg]">
            e
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[32deg]">
            {" "}
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[40deg]">
            b
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[48deg]">
            e
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[56deg]">
            t
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[64deg]">
            t
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[72deg]">
            e
          </span>
          <span className="h-[100px] absolute top-0 left-1/2 translate-x-[-50%] origin-bottom rotate-[80deg]">
            r
          </span>
        </p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
          <ArrowRightIcon />
        </div>
      </motion.button>
    </motion.div>
  );
};
