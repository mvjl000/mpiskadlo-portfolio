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
      className="min-h-screen py-4 md:py-5 pb-32 mt-20 lg:mt-28 bg-black"
    >
      <h2 className="px-4 text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400 flex justify-between">
        Skills
      </h2>
      <div className="flex flex-col gap-14 lg:gap-24 mt-14">
        <div className="flex flex-col gap-12 md:flex-row md:items-start pb-5 md:py-10 [contain:paint]">
          <p className="lg:w-6/12 text-indigo-200 pr-4 pl-10 font-unbounded text-lg md:text-xl xl:text-2xl 2xl:text-3xl md:sticky md:top-10">
            Mainly focused on{" "}
            <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-indigo-900 before:skew-x-6 before:skew-y-2 before:-z-[1]">
              fronted
            </span>{" "}
            and that
            {"'"}s the area I want to master first.
          </p>
          <div className="flex justify-center flex-grow px-3 lg:px-0">
            <SkillCard data={MOCK_SKILLS[0]} index={1} />
            <SkillCard data={MOCK_SKILLS[1]} index={2} />
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:items-start pb-5 md:py-10 [contain:paint]">
          <p className="lg:w-6/12 text-yellow-200 pr-4 pl-10 font-unbounded text-lg md:text-xl xl:text-2xl 2xl:text-3xl md:sticky md:top-10">
            However I know some{" "}
            <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-yellow-900 before:-skew-x-[10deg] before:-z-[1]">
              backend
            </span>{" "}
            related stuff and I would love to move towards becoming a fullstack
            developer one day (most likely in the JS ecosystem).
          </p>
          <div className="flex justify-center flex-grow px-3 lg:px-0">
            <SkillCard data={MOCK_SKILLS[2]} index={2} />
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:items-start pb-5 md:py-10 [contain:paint] mb-36">
          <p className="lg:w-6/12 text-emerald-200 pr-4 pl-10 font-unbounded text-lg md:text-xl xl:text-2xl 2xl:text-3xl md:sticky md:top-10">
            Besides of that I{"'"}m super hyped about mobile apps and{" "}
            <span className="inline-block relative z-[2] before:absolute before:w-full before:h-full before:bg-emerald-900 before:skew-x-6 before:-skew-y-1 before:-z-[1]">
              React Native
            </span>
            , a lot of knowledge to acquire, everything can be done with time{" "}
            {";)"}
          </p>
          <div className="flex justify-center flex-grow px-3 lg:px-0">
            <SkillCard data={MOCK_SKILLS[3]} index={1} />
            <SkillCard data={MOCK_SKILLS[4]} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};
