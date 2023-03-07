import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxTextProps {
  children: ReactNode;
  baseVelocity: number;
}

export const ParallaxText = ({ children, baseVelocity }: ParallaxTextProps) => {
  const directionFactor = useRef<number>(1);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * x is handling text wrapping
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * Changes the direction while scrolling
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className={`flex flex-nowrap whitespace-nowrap ${
          baseVelocity > 0 ? "text-yellow-100" : "text-yellow-300"
        } text-4xl lg:text-6xl font-unbounded font-[500] uppercase tracking-tighter`}
        style={{ x }}
      >
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
      </motion.div>
    </div>
  );
};
