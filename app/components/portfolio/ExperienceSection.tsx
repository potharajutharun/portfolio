import { FaBriefcase } from "react-icons/fa";
import { ExperienceItem } from "./types";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaBriefcase />
        Experience
      </h2>
      <div className="mx-auto max-w-4xl space-y-8">
        {experience.map((item) => (
          <article key={item.role} className="rounded-lg bg-[#252525] p-6">
            <h3 className="text-xl font-semibold text-pink-400">{item.role}</h3>
            <p className="text-gray-300">
              {item.company} | {item.location}
            </p>
            <p className="mb-4 text-sm text-gray-500">{item.period}</p>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
