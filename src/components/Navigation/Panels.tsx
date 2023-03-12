import { motion, Variants } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const leftPanelVariants: Variants = {
  initial: {
    height: 0,
  },
  animate: (height) => ({
    height: [0, height, 0],
    bottom: [height, 0, 0],
  }),
  exit: (height) => ({
    height: [0, height, 0],
    top: [null, 0, 0],
  }),
};

const rightPanelVariants: Variants = {
  initial: {
    height: 0,
  },
  animate: (height) => ({
    height: [0, height, 0],
    bottom: [0, 0, height],
  }),
  exit: (height) => ({
    height: [0, height, 0],
    bottom: [null, 0, 0],
  }),
};

export const Panels = () => {
  return (
    <>
      <motion.div
        className="h-screen w-[50vw] fixed left-0 z-[100] bg-gray-800"
        variants={leftPanelVariants}
        custom={window.innerHeight}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
      <motion.div
        className="h-screen w-[50vw] fixed right-0 z-[100] bg-gray-800"
        variants={rightPanelVariants}
        custom={window.innerHeight}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
    </>
  );
};
