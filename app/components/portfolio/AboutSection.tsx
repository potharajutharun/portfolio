import { FaRocket, FaUser } from "react-icons/fa";
import { aboutFocusAreas } from "./data";
import { ContactInfo } from "./types";

type AboutSectionProps = {
  contactInfo: ContactInfo;
};

export default function AboutSection({ contactInfo }: AboutSectionProps) {
  return (
    <section id="about" className="bg-[#252525] px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaUser />
        About Me
      </h2>
      <div className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
        <p className="mb-6">
          Full-stack engineer focused on practical, production-ready systems. I
          have delivered two live products as a sole developer, owning the full
          lifecycle from architecture and development to deployment and
          production support.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-[#1a1a1a] p-6">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-cyan-400">
              <FaRocket />
              Focus Areas
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-base">
              {aboutFocusAreas.map((focusItem) => (
                <li key={focusItem}>{focusItem}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-[#1a1a1a] p-6">
            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
              Current Snapshot
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-base">
              <li>Location: {contactInfo.location}</li>
              <li>{contactInfo.relocation}</li>
              <li>Sole developer on two production systems</li>
              <li>Hands-on deployment with Ubuntu, Nginx, and PM2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
