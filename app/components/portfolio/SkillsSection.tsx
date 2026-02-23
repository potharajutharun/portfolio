import { FaCode } from "react-icons/fa";
import { SkillGroup } from "./types";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaCode />
        Technical Skills
      </h2>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-lg bg-[#252525] p-6">
            <h3 className="mb-3 text-xl font-semibold text-pink-400">
              {group.category}
            </h3>
            <p className="text-gray-300">{group.items.join(" | ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
