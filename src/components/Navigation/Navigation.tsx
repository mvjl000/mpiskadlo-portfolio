import { useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useOpenMenu } from "@/hooks";
import { CloseBurger } from "./Burger";

const variants: Variants = {
  initial: {
    visibility: "hidden",
  },
  animate: {
    visibility: "visible",
    transition: { delay: 1 },
  },
  exit: {
    visibility: "hidden",
    transition: { delay: 1 },
  },
};

export const Navigation = () => {
  const { handleToggleMenu } = useOpenMenu();

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleToggleMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-40 overflow-hidden bg-white"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="absolute top-9 right-5">
          <CloseBurger />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
