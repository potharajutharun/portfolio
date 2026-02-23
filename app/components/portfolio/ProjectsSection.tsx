import { FaCode } from "react-icons/fa";
import { Project } from "./types";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-[#252525] px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaCode />
        Projects
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg bg-[#1a1a1a] p-6">
            <h3 className="text-2xl font-semibold text-pink-400">
              {project.title}
            </h3>
            <p className="mb-3 mt-1 text-sm text-gray-400">{project.subtitle}</p>
            <p className="mb-4 text-sm text-gray-500">
              Tech: {project.tech.join(", ")}
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-pink-400"
                >
                  Live Link
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-cyan-400 px-3 py-2 text-sm font-semibold text-cyan-400 transition-colors hover:border-pink-400 hover:text-pink-400"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
