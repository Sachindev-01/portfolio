import { projects } from "../../utils/constant";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-44 px-2 lg:px-14">
      <div>
        <div className="flex gap-2 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#3f9eee] w-[2em] lg:w-[2em]"
          >
            <path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"></path>
            <path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"></path>
          </svg>
          <h1 className="text-2xl lg:text-4xl text-[#d4e9fb] font-font-calibre">
            Projects
          </h1>
        </div>
        <div className="mt-12">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
