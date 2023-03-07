import { useState } from "react";

export const useIsAnimating = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSetAnimate = (starting: boolean) => {
    if (starting) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
    setIsAnimating(!isAnimating);
  };

  return { isAnimating, handleSetIsAnimating: handleSetAnimate };
};
