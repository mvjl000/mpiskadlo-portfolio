export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-4 md:py-5 bg-gradient-to-b from-hero-bg via-[#000] to-[#000]"
    >
      <h2 className="px-4 text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400 flex justify-between">
        Skills
      </h2>
      <div className="h-[600px] w-full mt-20 px-10 flex items-center gap-3 overflow-x-scroll">
        <div className="min-w-[300px] w-[300[px] h-[450px] bg-[#f86a1a] border-black border-4 rounded-lg p-4 rotate-6 z-[5]">
          <h3 className="text-4xl font-unbounded flex flex-col">
            Frontend{" "}
            <span className="inline-block text-sm">
              Languages {"&"} frameworks
            </span>
          </h3>
          <ul className="mt-6 flex flex-col gap-3 font-unbounded text-xl">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vue</li>
            <li>Astro</li>
          </ul>
        </div>
        <div className="min-w-[300px] w-[300[px] h-[450px] bg-[#00f89e] border-black border-4 rounded-lg p-4 -rotate-[5deg] -translate-y-6 z-[4]">
          <h3 className="text-4xl font-unbounded flex flex-col">
            Frontend
            <span className="inline-block text-sm">Styling & others</span>
          </h3>
          <ul className="mt-6 flex flex-col gap-3 font-unbounded text-xl">
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Styled Components</li>
            <li>Storybook</li>
            <li>React Testing Library</li>
            <li>Framer Motion</li>
          </ul>
        </div>
        <div className="min-w-[300px] w-[300[px] h-[450px] bg-[#dbff06] border-black border-4 rounded-lg p-4 rotate-[5deg] translate-y-2 z-[3]">
          <h3 className="text-4xl font-unbounded">Backend</h3>
          <ul className="mt-6 flex flex-col gap-3 font-unbounded text-xl">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>tRPC</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div className="min-w-[300px] w-[300[px] h-[450px] bg-[#00e9f8] border-black border-4 rounded-lg p-4 -rotate-6 -translate-y-1 z-[2]">
          <h3 className="text-4xl font-unbounded">Tools</h3>
          <ul className="mt-6 flex flex-col gap-3 font-unbounded text-xl">
            <li>Linux</li>
            <li>Mac OS</li>
            <li>Windows</li>
            <li>Figma</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="min-w-[300px] w-[300[px] h-[450px] bg-[#d2ecee] border-black border-4 rounded-lg p-4 rotate-[7deg] translate-y-4 z-[1]">
          <h3 className="text-4xl font-unbounded">Others</h3>
          <ul className="mt-6 flex flex-col gap-3 font-unbounded text-xl">
            <li>React Native</li>
            <li>Polish (Native)</li>
            <li>English (B2+)</li>
            <li>Team Player</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
