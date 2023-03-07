import { ReactNode, useMemo } from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  offscreen: (isOdd) => ({
    y: 30,
    rotate: isOdd ? -2 : 2,
    opacity: 0.8,
  }),
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface ExperienceCardProps {
  children: ReactNode;
  index: number;
}

export const ExperienceCard = ({ children, index }: ExperienceCardProps) => {
  const isOdd = useMemo(() => index % 2 === 1, []);

  return (
    <motion.div
      className="flex flex-col w-full min-w-[300px] lg:w-[70%] xl:w-[55%] pt-4 px-4 pb-7 lg:pt-8 lg:px-8 lg:pb-14 rounded-md bg-[#162239] font-montserrat relative z-10"
      variants={variants}
      custom={isOdd}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.85 }}
    >
      {children}
    </motion.div>
  );
};
