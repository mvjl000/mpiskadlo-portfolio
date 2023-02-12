import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

export const AboutMe = () => {
  const [hasHover, setHasHover] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const age = new Date().getFullYear() - 2004;

  return (
    <Tilt
      tiltEnable={!!hasHover}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={3000}
      className="mt-16 mx-auto w-[95%] max-w-[1200px] lg:w-[75%] 2xl:w-[65%] min-h-[300px] bg-neutral-900 border-neutral-800 border-2 rounded-lg flex flex-col justify-start overflow-hidden font-montserrat"
    >
      <div className="h-12 px-3 lg:px-5 flex justify-start items-center gap-2 relative">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <p className="text-default-font font-mono text-sm xl:text-md justify-self-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          mpiskadlo/README
        </p>
      </div>
      <div className="px-5 pb-10 text-default-font font-montserrat">
        <h2 className="mt-3 xl:mt-4 font-[500] text-lg lg:text-xl 2xl:text-2xl">
          Hi, Miłosz here 👋
        </h2>
        <p className="mt-2 xl:mt-3 text-md xl:text-lg">
          I am a {age} y.o. self taught frontend developer. I have been
          programming since the beginning of 2020 🦠 (such a great time to start
          coding 😅).
        </p>
        <h3 className="mt-3 xl:mt-4 font-[500] text-lg lg:text-xl">
          Some quick info:
        </h3>
        <ul className="mt-2 xl:mt-3 flex flex-col gap-3 pl-5 list-disc text-md 2xl:text-lg">
          <li>
            1.5 year of commercial experience in a fintech startup (JUN 2021 -
            OCT 2022)
          </li>
          <li>I am in my final year of secondary school (till May 2023)</li>
          <li>
            Currently polishing my coding skills & having fun with new and shiny
            JS frameworks 🤠 (just kidding, only useful stuff)
          </li>
        </ul>
      </div>
    </Tilt>
  );
};
