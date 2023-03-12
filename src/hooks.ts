import { useState } from "react";
import { useAtom } from "jotai";
import { isMenuOpenAtom } from "./store";

export const useOpenMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  };

  return {
    handleToggleMenu,
  };
};

export const useIsAnimating = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSetAnimate = (starting: boolean) => {
    if (starting) {
      document.documentElement.classList.add("no-scroll-x");
    } else {
      document.documentElement.classList.remove("no-scroll-x");
    }
    setIsAnimating(!isAnimating);
  };

  return { isAnimating, handleSetIsAnimating: handleSetAnimate };
};
