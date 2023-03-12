import { AnimatePresence, motion, Variants } from "framer-motion";
import { useOpenMenu } from "@/hooks";
import { CloseBurger } from "@/components/Navigation/Burger";
import { Panels } from "@/components/Navigation/Panels";
import { isMenuOpenAtom } from "@/store";
import { useAtom } from "jotai";

type Section = "experience" | "projects" | "skills";

const menuVariants: Variants = {
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

const buttonsVariants: Variants = {
  exit: {
    visibility: "hidden",
    transition: { delay: 0.5 },
  },
};

export const Navigation = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);
  const { handleToggleMenu } = useOpenMenu();

  const handleScroll = (section: Section) => {
    const selectedSection = document.getElementById(section);
    if (!selectedSection) return;

    const clickedButton = document.activeElement as HTMLButtonElement;

    if (clickedButton) {
      // prevents animations overlaping
      clickedButton.blur();
    }

    selectedSection.scrollIntoView();
    handleToggleMenu();
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.nav
            className="fixed inset-0 flex justify-center items-center z-40 overflow-hidden bg-black"
            variants={menuVariants}
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
                <motion.button
                  value="Experience"
                  className="font-unbounded text-yellow-400 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl uppercase relative after:content-[attr(value)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:text-black after:bg-yellow-400 after:overflow-hidden after:w-full after:h-0 hover:after:h-full focus-visible:after:h-full after:transition-all after:duration-[450ms] after:ease-in-out"
                  onClick={() => handleScroll("experience")}
                  variants={buttonsVariants}
                  exit="exit"
                >
                  Experience
                </motion.button>
              </li>
              <li className="border-y-2 py-5 border-stone-900">
                <motion.button
                  value="Projects"
                  className="font-unbounded text-yellow-400 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl uppercase relative after:content-[attr(value)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:text-black after:bg-yellow-400 after:overflow-hidden after:w-full after:h-0 hover:after:h-full focus-visible:after:h-full  after:transition-all after:duration-[450ms] after:ease-in-out"
                  onClick={() => handleScroll("projects")}
                  variants={buttonsVariants}
                  exit="exit"
                >
                  Projects
                </motion.button>
              </li>
              <li>
                <motion.button
                  value="Skills"
                  className="font-unbounded text-yellow-400 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl uppercase relative after:content-[attr(value)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:text-black after:bg-yellow-400 after:overflow-hidden after:w-full after:h-0 hover:after:h-full focus-visible:after:h-full  after:transition-all after:duration-[450ms] after:ease-in-out"
                  onClick={() => handleScroll("skills")}
                  variants={buttonsVariants}
                  exit="exit"
                >
                  Skills
                </motion.button>
              </li>
            </ul>
          </motion.nav>
          <Panels />
        </>
      )}
    </AnimatePresence>
  );
};
