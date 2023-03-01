import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import aibLogo from "@/images/ai_icon.png";

const variants: Variants = {
  offscreen: (isOdd) => ({
    x: isOdd ? -100 : 100,
    opacity: 0.3,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 p-4 md:p-5 pb-10"
    >
      <h2 className="text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400">
        Experience
      </h2>
      <div className="w-[95%] sm:w-[80%] mx-auto mt-9 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 flex flex-col gap-16 items-center lg:items-start">
        <div className="w-full flex justify-between gap-7">
          <ExperienceCard index={1}>
            <div className="h-14 lg:h-16 flex items-center justify-start gap-3 lg:gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-md bg-[#223862] flex items-center justify-center">
                <Image
                  src={aibLogo}
                  alt="AI Busters logo"
                  className="w-[80%]"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="font-anton text-[#94b9ff] text-2xl lg:text-[1.7rem] font-[400] tracking-[1px]">
                  <a
                    href="https://www.linkedin.com/company/aibusters/"
                    className="hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AI Busters
                  </a>
                </h3>
                <p className="text-[#4a6497]">jun 2021 - oct 2022 | remote</p>
              </div>
            </div>
            <p className="mt-4 pl-7 pr-2 text-[#5574b0] relative before:block before:w-1 before:h-full before:absolute before:top-0 before:left-2 before:bg-[#2a4372]">
              An engine for automating customer service department processes.
              Based on artificial intelligence algorithms.
              <br />
              AI Busters{"'"} engine performs massive, advanced message analysis
              (NLP) in online communication channels, e.g. emails, website
              forms, chat rooms, and helps reduce average handling time,
              streamline the process, support consultants or automate
              communication.
            </p>
          </ExperienceCard>
          <motion.p
            className="hidden lg:flex items-center text-center font-unbounded font-[500] text-[#5574b0] text-2xl xl:text-3xl tracking-wider xl:tracking-widest 2xl:pr-10"
            variants={variants}
            custom={true}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
          >
            About the company
          </motion.p>
        </div>
        <div className="w-full flex justify-between gap-7">
          <motion.p
            className="hidden lg:flex items-center text-center font-unbounded font-[500] text-[#5574b0] text-2xl xl:text-3xl tracking-wider xl:tracking-widest 2xl:pl-10"
            variants={variants}
            custom={false}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
          >
            My role
          </motion.p>
          <ExperienceCard index={2}>
            <h4 className="font-anton text-[#94b9ff] text-2xl lg:text-[1.7rem] font-[400] tracking-[1px]">
              Responsibilities
            </h4>
            <p className="mt-4 text-[#5574b0]">
              At AI Busters, I was responsible for building an administration
              panel that provided insight into all aspects of the data analysis
              system. The tech stack I used during this project was React (SPA)
              and Typescript connected with Django REST API.
            </p>
            <ul className="mt-5 text-[#5574b0] pl-5 flex flex-col gap-1 relative before:block before:w-1 before:h-full before:absolute before:top-0 before:left-1 before:bg-[#2a4372]">
              <li>New features</li>
              <li>Bug fixes</li>
              <li>Code maintenance</li>
              <li>Commitment to project development</li>
            </ul>
          </ExperienceCard>
        </div>
        <div className="w-full flex justify-between gap-7">
          <ExperienceCard index={3}>
            <h4 className="font-anton text-[#94b9ff] text-2xl lg:text-[1.7rem] font-[400] tracking-[1px]">
              Reference
            </h4>
            <p className="mt-4 text-[#5574b0]">
              {'"'}
              <span className="italic">
                ...Miłosz stands out above all for his high level of commitment,
                conscientiousness, ability to solve problems quickly and
                establish friendly relations with colleagues. His greatest
                success was the implementation from scratch of the analytical
                layer and a dedicated reporting panel in the system we supplied.
                I am sure that Miłosz will be a good employee and will do an
                excellent job, just as he did while working for our company.
              </span>
              {'"'}
            </p>
            <a
              href="https://www.linkedin.com/in/nfijalek/"
              className="inline-block mt-2 self-end text-[#5574b0] font-[500] hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              - Norbert Fijałek,
              <br />
              CEO of AI Busters
            </a>
          </ExperienceCard>
          <motion.p
            className="hidden lg:flex items-center text-center font-unbounded font-[500] text-[#5574b0] text-2xl xl:text-3xl tracking-wider xl:tracking-widest 2xl:pr-10"
            variants={variants}
            custom={true}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
          >
            CEO{"'"}s opinion
          </motion.p>
        </div>
      </div>
    </section>
  );
};
