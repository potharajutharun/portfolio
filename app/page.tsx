"use client";
import { useEffect, useState } from "react";
import { 
  FaLinkedin, FaGithub, FaGitlab, FaEnvelope, FaPhone, FaCode, 
  FaRocket, FaUser, FaDownload, FaBriefcase, FaGraduationCap, FaLightbulb, FaBars, FaTimes 
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#252525] shadow-lg z-50 py-4 px-6 animate-fade-in-down">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-pulse">
          <Link href="/">Tharun Potharaju</Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#252525] md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <Link href="#home" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link href="#education" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Education
          </Link>
          <Link href="#certificates" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Certificates
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-105 animate-fade-in" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="/tharun.pdf"
            download="Tharun_Potharaju_CV.pdf"
            className="flex items-center gap-2 bg-cyan-400 text-[#1a1a1a] px-4 py-2 rounded-lg hover:bg-pink-400 transition-all duration-300 hover:scale-105 text-sm font-semibold animate-bounce"
            onClick={() => setIsOpen(false)}
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

// Main Portfolio Component
export default function Portfolio() {
  const contactInfo = {
    phone: "+91 6303748354",
    email: "potharajutharunrana@gmail.com",
    linkedin: "https://www.linkedin.com/in/tharun-potharaju/",
    location: "Warangal, Telangana, India",
  };

  const skills = [
    { name: "React Hooks", img: "/react.jpg" },
    { name: "Prisma", img: "/prisma.png" },
    { name: "TypeScript", img: "/typescript.png" },
    { name: "JavaScript", img: "/javascript.png" },
    { name: "Node.js", img: "/node.png" },
    { name: "SQL", img: "/sql.jpg" },
    { name: "HTML/CSS", img: "/images.png" },
    { name: "Bootstrap", img: "/bootstrap.svg" },
    { name: "Java", img: "/java.png" },
    { name: "MERN Stack", img: "/mern.avif" },
    { name: "Responsive Design", img: "/responsive.png" },
  ];

  const projects = [
    { 
      title: "E-Commerce Platform", 
      desc: "A full-stack e-commerce app built with MERN stack.", 
      tech: ["React", "Node.js", "MongoDB"], 
      link: "https://github.com/potharajutharun/ecommerce" 
    },
    { 
      title: "Portfolio Website", 
      desc: "A personal portfolio showcasing my skills and projects.", 
      tech: ["Next.js", "Tailwind CSS"], 
      link: "https://github.com/potharajutharun/portfolio" 
    },
    { 
      title: "Task Manager", 
      desc: "A task management tool with a responsive UI.", 
      tech: ["React", "TypeScript", "Prisma"], 
      link: "https://github.com/potharajutharun/task-manager" 
    },
  ];

  const certifications = ["Python", "Java Full Stack Developer", "Core Java", "SQL", "MERN Stack Developer"];

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 animate-fade-in-up">
        <Image
          src="/portimg-removebg-preview.png"
          alt="Tharun Potharaju"
          width={250}
          height={250}
          className="rounded-full border-4 border-cyan-400 mb-6 animate-spin-slow"
        />
        <h1 className="text-5xl font-bold text-cyan-400 mb-4 animate-bounce">Hello, I’m Tharun!</h1>
        <p className="text-xl text-gray-300 mb-6 animate-fade-in">
          Jr. Web Developer | Full-Stack Enthusiast | {contactInfo.location}
        </p>
        <div className="flex gap-6">
          <a href={contactInfo.linkedin} target="_blank" className="text-3xl text-cyan-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 animate-pulse">
            <FaLinkedin />
          </a>
          <a href="https://github.com/potharajutharun" target="_blank" className="text-3xl text-cyan-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 animate-pulse">
            <FaGithub />
          </a>
          <a href="https://gitlab.com/potharajutharunrana" target="_blank" className="text-3xl text-cyan-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 animate-pulse">
            <FaGitlab />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#252525] animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-left">
          <FaUser /> About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed animate-fade-in-up">
          <p className="mb-6">
            I’m an aspiring <span className="text-pink-400 font-semibold">Full-Stack Developer</span> passionate about building innovative web applications that tackle real-world challenges. With expertise in modern technologies, I create responsive, user-friendly interfaces and scalable backends.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
                <FaRocket /> Professional Highlights
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Full-Stack Development</li>
                <li>Frontend: React, JavaScript, Bootstrap</li>
                <li>Backend: Node.js, SQL</li>
              </ul>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
                <FaLightbulb /> Personal Attributes
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Detail-Oriented</li>
                <li>Problem Solver</li>
                <li>Lifelong Learner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-right">
          <FaCode /> Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#252525] p-4 rounded-lg shadow-lg hover:bg-pink-900 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-2 animate-spin-slow"
              />
              <span className="text-gray-300 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#252525] animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-left">
          <FaCode /> Projects
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-2 animate-pulse">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.tech.join(", ")}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 animate-bounce"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-right">
          <FaBriefcase /> Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-[#252525] p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold text-pink-400">Jr. Web Developer</h3>
            <p className="text-gray-300">Gaurav Consultancy Services, Hyderabad</p>
            <p className="text-sm text-gray-500">July 2024 - Present (9 months)</p>
            <p className="mt-2 text-gray-300">Developing web solutions at GCS.</p>
          </div>
          
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-[#252525] animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-left">
          <FaGraduationCap /> Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold text-pink-400">B.Tech, Information Technology</h3>
            <p className="text-gray-300">University College of Engineering, Kakatiya University</p>
            <p className="text-sm text-gray-500">July 2019 - May 2023</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold text-pink-400">XII, MPC</h3>
            <p className="text-gray-300">Krishnaveni Junior College</p>
            <p className="text-sm text-gray-500">June 2017 - May 2019</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold text-pink-400">X, SSC</h3>
            <p className="text-gray-300">Sri Harsha High School</p>
            <p className="text-sm text-gray-500">June 2016 - May 2017</p>
          </div>
        </div>
        <h2 id="certificates" className="text-4xl font-bold text-cyan-400 mt-12 mb-8 flex items-center gap-3 animate-slide-in-right">
          <FaCode /> Certifications
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert} className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg text-gray-300 animate-fade-in-up">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3 animate-slide-in-left">
          <FaEnvelope /> Contact Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-6 animate-fade-in-up">
          <p className="flex items-center gap-3">
            <FaPhone className="text-cyan-400 animate-spin-slow" /> {contactInfo.phone}
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400 animate-spin-slow" /> 
            <a href={`mailto:${contactInfo.email}`} className="text-pink-400 hover:underline transition-colors duration-300">{contactInfo.email}</a>
          </p>
          <p className="flex items-center gap-3">
            <FaLinkedin className="text-cyan-400 animate-spin-slow" /> 
            <a href={contactInfo.linkedin} target="_blank" className="text-pink-400 hover:underline transition-colors duration-300">LinkedIn Profile</a>
          </p>
        </div>
      </section>
    </div>
  );
}