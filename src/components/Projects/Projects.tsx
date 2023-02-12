import { Project } from "@/components/Projects/Project";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen p-4 md:p-5 bg-gradient-to-b from-gray-900 via-hero-bg to-hero-bg"
    >
      <h2 className="text-5xl sm:text-6xl md:text-7xl mt-6 md:mt-8 md:mx-4 font-unbounded font-[400] text-indigo-400 flex justify-between">
        Projects
      </h2>
      <div className="mt-3">
        <Project />
      </div>
    </section>
  );
};

export default Projects;
