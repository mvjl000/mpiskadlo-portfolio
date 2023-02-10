import { AboutMe } from "./AboutMe";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-10 p-4 md:p-5 md:pt-24 bg-gradient-to-b from-hero-bg via-hero-bg to-gray-900">
      <h1 className="font-unbounded font-[500] text-center text-[2.8rem] sm:text-6xl lg:text-7xl 2xl:text-8xl bg-gradient-to-r from-indigo-600 via-indigo-300 to-blue-300 text-transparent bg-clip-text select-none">
        @mpiskadlo
      </h1>
      <AboutMe />
    </section>
  );
};
