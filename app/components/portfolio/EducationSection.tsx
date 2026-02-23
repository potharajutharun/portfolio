import { FaGraduationCap } from "react-icons/fa";
import { EducationItem } from "./types";

type EducationSectionProps = {
  education: EducationItem;
};

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="bg-[#252525] px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaGraduationCap />
        Education
      </h2>
      <div className="mx-auto max-w-4xl">
        <article className="rounded-lg bg-[#1a1a1a] p-6">
          <h3 className="text-xl font-semibold text-pink-400">
            {education.degree}
          </h3>
          <p className="text-gray-300">{education.institution}</p>
          <p className="mt-1 text-sm text-gray-500">{education.period}</p>
        </article>
      </div>
    </section>
  );
}
