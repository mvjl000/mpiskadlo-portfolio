import { useOpenMenu } from "@/hooks";
import { Section } from "@/types";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  exit: {
    visibility: "hidden",
    transition: { delay: 0.5 },
  },
};

interface NavigationButtonProps {
  sectionName: Section;
}

export const NavigationButton = ({ sectionName }: NavigationButtonProps) => {
  const { handleToggleMenu } = useOpenMenu();

  const handleScroll = (section: Section) => {
    const selectedSection = document.getElementById(section);
    if (!selectedSection) return;

    selectedSection.scrollIntoView();
    handleToggleMenu();
  };

  return (
    <motion.button
      value={sectionName}
      className="font-unbounded text-yellow-400 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl uppercase relative after:content-[attr(value)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:text-black after:bg-yellow-400 after:overflow-hidden after:w-full after:h-0 hover:after:h-full focus-visible:after:h-full after:transition-all after:duration-[450ms] after:ease-in-out"
      onClick={() => handleScroll(sectionName)}
      variants={variants}
      exit="exit"
    >
      {sectionName}
    </motion.button>
  );
};
