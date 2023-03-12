import { AnimatePresence, motion, Variants } from "framer-motion";
import { CloseBurger } from "@/components/Navigation/Burger";
import { Panels } from "@/components/Navigation/Panels";
import { isMenuOpenAtom } from "@/store";
import { useAtom } from "jotai";
import { NavigationButton } from "./NavigationButton";

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
  const [isMenuOpen] = useAtom(isMenuOpenAtom);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.nav
            className="fixed inset-0 flex justify-center items-center z-40 overflow-hidden bg-black"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="absolute top-9 right-5"
              exit={{ visibility: "hidden" }}
              transition={{ delay: 0.3 }}
            >
              <CloseBurger />
            </motion.div>
            <ul className="flex flex-col gap-5">
              <li>
                <NavigationButton sectionName="experience" />
              </li>
              <li className="border-y-2 py-5 border-stone-900">
                <NavigationButton sectionName="projects" />
              </li>
              <li>
                <NavigationButton sectionName="skills" />
              </li>
            </ul>
          </motion.nav>
          <Panels />
        </>
      )}
    </AnimatePresence>
  );
};
