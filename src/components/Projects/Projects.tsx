import { Project } from "@/components/Projects/Project";
import { type ProjectType } from "@/pages/index";
import { useMemo, useState } from "react";
import { AnimatePresence, AnimationOptions } from "framer-motion";

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  const [visibleProjectIndex, setVisibleProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | undefined>(
    undefined
  );
  const project = useMemo(
    () => projects[visibleProjectIndex],
    [visibleProjectIndex]
  );

  const handleChangeIndex = (action: "next" | "prev") => {
    setDirection(action);
    switch (action) {
      case "next":
        visibleProjectIndex === projects.length - 1
          ? setVisibleProjectIndex(0)
          : setVisibleProjectIndex(visibleProjectIndex + 1);
        break;
      case "prev":
        visibleProjectIndex === 0
          ? setVisibleProjectIndex(projects.length - 1)
          : setVisibleProjectIndex(visibleProjectIndex - 1);
        break;
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen p-4 md:p-5 bg-gradient-to-b from-gray-900 via-hero-bg to-hero-bg"
    >
      <h2 className="text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400 flex justify-between">
        Projects
      </h2>
      <div className="mt-3 relative">
        <AnimatePresence initial={false} custom={direction}>
          <Project
            data={project}
            key={project.id}
            handleChangeIndex={handleChangeIndex}
            direction={direction}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
