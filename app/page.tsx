import AboutSection from "./components/portfolio/AboutSection";
import ContactSection from "./components/portfolio/ContactSection";
import { contactInfo, education, experience, navItems, projects, resumeUrl, skills } from "./components/portfolio/data";
import EducationSection from "./components/portfolio/EducationSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import Footer from "./components/portfolio/Footer";
import HeroSection from "./components/portfolio/HeroSection";
import Navbar from "./components/portfolio/Navbar";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import SkillsSection from "./components/portfolio/SkillsSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1a1a1a] font-sans text-white">
      <Navbar navItems={navItems} resumeUrl={resumeUrl} />
      <HeroSection contactInfo={contactInfo} />
      <AboutSection contactInfo={contactInfo} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <ContactSection contactInfo={contactInfo} />
      <Footer />
    </div>
  );
}
