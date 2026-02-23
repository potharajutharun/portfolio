import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { ContactInfo } from "./types";

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-bold text-cyan-400">
        <FaEnvelope />
        Contact
      </h2>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-[#252525] p-6 text-gray-300">
          <p className="mb-4 flex items-center gap-3">
            <FaPhone className="text-cyan-400" />
            {contactInfo.phone}
          </p>
          <p className="mb-4 flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-pink-400 transition-colors hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="mb-4 flex items-center gap-3">
            <FaLinkedin className="text-cyan-400" />
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 transition-colors hover:underline"
            >
              linkedin.com/in/tharun-potharaju
            </a>
          </p>
          <p className="mb-4 flex items-center gap-3">
            <FaGithub className="text-cyan-400" />
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 transition-colors hover:underline"
            >
              github.com/potharajutharunrana
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400" />
            {contactInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
}
