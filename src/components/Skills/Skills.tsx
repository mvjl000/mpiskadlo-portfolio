import { SkillCard, SkillCardTypes } from "./SkillCard";

const MOCK_SKILLS: SkillCardTypes[] = [
  {
    id: 1,
    title: "Frontend",
    subtitle: "Languages & frameworks",
    items: ["Javascript", "Typescript", "React", "Next.js", "Vue", "Astro"],
    backgroundColorHex: "#f86a1a",
  },
  {
    id: 2,
    title: "Frontend",
    subtitle: "Styling & others",
    items: [
      "Tailwind",
      "Sass/Scss",
      "Styled Components",
      "Storybook",
      "React Testing Library",
      "Framer Motion",
    ],
    backgroundColorHex: "#00f89e",
  },
  {
    id: 3,
    title: "Backend",
    items: ["NodeJS", "ExpressJS", "tRPC", "Prisma"],
    backgroundColorHex: "#dbff06",
  },
  {
    id: 4,
    title: "Tools",
    items: ["Linux", "MacOS", "Windows", "Figma", "Visual Studio Code"],
    backgroundColorHex: "#00e9f8",
  },
  {
    id: 5,
    title: "Others",
    subtitle: "& soft skills",
    items: [
      "React Native",
      "Polish (Native)",
      "English (B2+)",
      "Team Player",
      "Self Development",
      "Curious",
    ],
    backgroundColorHex: "#d2ecee",
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-4 md:py-5 mt-20 lg:mt-28 bg-gradient-to-b from-hero-bg via-black to-black"
    >
      <h2 className="px-4 text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400 flex justify-between">
        Skills
      </h2>
      <div className="flex flex-col lg:flex-row">
        <p className="lg:w-6/12 lg:min-w-[600px] text-indigo-200 mt-16 px-4 lg:pl-8 lg:pr-0 font-unbounded text-base md:text-lg xl:text-xl 2xl:text-2xl">
          Mainly focused on{" "}
          <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-indigo-900 before:skew-x-6 before:skew-y-2 before:-z-[1]">
            fronted
          </span>{" "}
          and that
          {"'"}s the area I want to master first. However I know some{" "}
          <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-indigo-900 before:-skew-x-[10deg] before:-z-[1]">
            backend
          </span>{" "}
          related stuff and I would love to move towards becoming a fullstack
          developer one day (most likely in the JS ecosystem).
          <br />
          Besides of that I{"'"}m super hyped about mobile apps and{" "}
          <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-indigo-900 before:skew-x-6 before:-skew-y-1 before:-z-[1]">
            React Native
          </span>
          , a lot of knowledge to acquire, everything can be done with time ;)
        </p>
        <div className="h-[500px] lg:h-[600px] mt-8 lg:mt-0 lg:ml-16 px-10 flex items-center gap-3 overflow-x-scroll scrollbar-hide">
          {MOCK_SKILLS.map((skill) => (
            <SkillCard key={skill.id} data={skill} />
          ))}
          {/* <div className="min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[#f86a1a] border-black border-4 rounded-lg p-4 rotate-6 z-[5]">
            <h3 className="text-3xl lg:text-4xl font-unbounded flex flex-col">
              Frontend{" "}
              <span className="inline-block text-xs lg:text-sm">
                Languages {"&"} frameworks
              </span>
            </h3>
            <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Vue</li>
              <li>Astro</li>
            </ul>
          </div> */}
          {/* <div className="min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[#00f89e] border-black border-4 rounded-lg p-4 -rotate-[5deg] -translate-y-6 z-[4]">
            <h3 className="text-3xl lg:text-4xl font-unbounded flex flex-col">
              Frontend
              <span className="inline-block text-xs lg:text-sm">
                Styling & others
              </span>
            </h3>
            <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
              <li>Tailwind</li>
              <li>Sass</li>
              <li>Styled Components</li>
              <li>Storybook</li>
              <li>React Testing Library</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[#dbff06] border-black border-4 rounded-lg p-4 rotate-[5deg] translate-y-2 z-[3]">
            <h3 className="text-3xl lg:text-4xl font-unbounded">Backend</h3>
            <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>tRPC</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div className="min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[#00e9f8] border-black border-4 rounded-lg p-4 -rotate-6 -translate-y-1 z-[2]">
            <h3 className="text-3xl lg:text-4xl font-unbounded">Tools</h3>
            <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
              <li>Linux</li>
              <li>Mac OS</li>
              <li>Windows</li>
              <li>Figma</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[#d2ecee] border-black border-4 rounded-lg p-4 rotate-[7deg] translate-y-4 z-[1]">
            <h3 className="text-3xl lg:text-4xl font-unbounded flex flex-col">
              Others{" "}
              <span className="inline-block text-xs lg:text-sm">
                {"&"} soft skills
              </span>
            </h3>
            <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
              <li>React Native</li>
              <li>Polish (Native)</li>
              <li>English (B2+)</li>
              <li>Team Player</li>
              <li>Self Development</li>
              <li>Curious</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};
