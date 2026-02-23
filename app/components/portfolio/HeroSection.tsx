import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactInfo } from "./types";

type HeroSectionProps = {
  contactInfo: ContactInfo;
};

export default function HeroSection({ contactInfo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <Image
        src="/myn.jpeg"
        alt="Tharun Potharaju"
        width={230}
        height={230}
        className="mb-6 rounded-full border-4 border-cyan-400"
        priority
      />
      <h1 className="mb-3 text-4xl font-bold text-cyan-400 sm:text-5xl">
        Tharun Potharaju
      </h1>
      <p className="mb-4 max-w-3xl text-lg text-gray-300">
        Full-Stack Software Engineer with 1 year 8 months of production
        experience building Node.js REST APIs and React dashboards.
      </p>
      <p className="mb-8 text-sm text-gray-400">{contactInfo.relocation}</p>

      <div className="mb-8 flex gap-6">
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-3xl text-cyan-400 transition-colors hover:text-pink-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-3xl text-cyan-400 transition-colors hover:text-pink-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <a
        href="#contact"
        className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-[#1a1a1a] transition-colors hover:bg-pink-400"
      >
        Contact Me
      </a>
    </section>
  );
}
