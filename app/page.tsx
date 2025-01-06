"use client";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaInstagram, FaGitlab, FaRegUser, FaEnvelope, FaGraduationCap, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-5 animate__animated animate__fadeIn">
      <Navbar />

      {/* Sub Navbar with Links and Icons */}
      <div className="bg-[#2c3e50] fixed w-full top-0 left-0 z-40 shadow-md py-2 animate__animated animate__slideInDown">
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-6">
          <Link href="#about" className="text-white flex items-center space-x-2 hover:text-[#3498db] transition-colors duration-200">
            <FaRegUser size={24} />
            <span className="hidden sm:inline">About</span>
          </Link>
          <Link href="#contact" className="text-white flex items-center space-x-2 hover:text-[#3498db] transition-colors duration-200">
            <FaEnvelope size={24} />
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-2">
        {/* Social Profiles Section */}
        <div className="flex justify-center space-x-6 lg:space-x-12 py-6 animate__animated animate__fadeIn animate__delay-1s">
          <a
            href="/education"
            className="text-[#0077b5] hover:text-[#0a66c2] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaGraduationCap className="text-4xl" />
            <span className="hidden sm:inline">Education</span>
          </a>
          <a
            href="/Projects"
            className="text-[#0077b5] hover:text-[#0a66c2] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaProjectDiagram className="text-4xl" />
            <span className="hidden sm:inline">Projects</span>
          </a>
          <a
            href="/experience"
            className="text-[#0077b5] hover:text-[#0a66c2] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaBriefcase className="text-4xl" />
            <span className="hidden sm:inline">Experience</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tharun-potharaju/"
            target="_blank"
            className="text-4xl text-[#0077b5] hover:text-[#0a66c2] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/potharajutharun"
            target="_blank"
            className="text-4xl text-[#333] hover:text-[#24292f] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/potharajutharunrana"
            target="_blank"
            className="text-4xl text-[#e24329] hover:text-[#f5655d] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaGitlab />
          </a>
          <a
            href="https://www.instagram.com/tharunranapotharaju/"
            target="_blank"
            className="text-4xl text-[#E1306C] hover:text-[#C13584] transition-colors duration-200 transform hover:scale-110 animate__animated animate__pulse animate__infinite"
          >
            <FaInstagram />
          </a>
        </div>

        {/* About Me Section */}
        <div id="about" className="text-center py-12 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">About Me</h2>
          <Image
            src="/portimg-removebg-preview.png"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-4 animate__animated animate__zoomIn"
          />
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            🚀 As an aspiring Full-Stack Developer, Im passionate about crafting innovative web applications that tackle real-world challenges. My skills span a variety of modern technologies, including HTML, CSS, TypeScript, Angular, SQL, JDBC, Spring Boot, and Bootstrap. Im dedicated to creating responsive, user-friendly interfaces and robust, secure backends.
            <br />
            <br />
            🎯 <b className="bg-warning">Professional Highlights:</b>
            <ul className="list-disc list-inside text-left animate__animated animate__fadeInUp animate__delay-2s">
              <li>Full-Stack Development: Proficient in both frontend and backend development, ensuring seamless integration across the entire stack.</li>
              <li>Frontend Excellence: Leveraging Angular and TypeScript to create dynamic, interactive interfaces, complemented by Bootstrap for responsive design.</li>
              <li>Backend Proficiency: Utilizing Spring Boot and SQL to build scalable, secure server-side applications, with efficient database management using JDBC.</li>
            </ul>
            <br />
            💡 <b>Personal Attributes:</b>
            <ul className="list-disc list-inside text-left animate__animated animate__fadeInUp animate__delay-2s">
              <li>Detail-Oriented: I meticulously attend to every detail, ensuring projects are executed to the highest standards.</li>
              <li>Problem Solver: I thrive on tackling complex challenges and discovering innovative solutions to enhance functionality and user experience.</li>
              <li>Lifelong Learner: Constantly updating my skills and knowledge to keep pace with the rapidly evolving field of web development.</li>
            </ul>
            <br />
            🛠️ <b>Skills:</b>
            <ul className="list-disc list-inside text-left animate__animated animate__fadeInUp animate__delay-2s">
              <li>React.js & React Hooks: Building interactive UIs with React, leveraging hooks for state and side-effect management.</li>
              <li>Prisma ORM: Using Prisma for efficient database management and query building.</li>
              <li>JavaScript & TypeScript: Proficient in modern JavaScript (ES6+) and TypeScript for type-safe development.</li>
              <li>MERN Stack: Skilled in MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.</li>
              <li>Spring Boot & Java: Building secure and scalable backend services with Java and Spring Boot.</li>
              <li>Angular: Building dynamic, scalable front-end applications using Angular.</li>
              <li>Prisma & Mongoose: Using Prisma and Mongoose for database modeling and data manipulation in web applications.</li>
              <li>Redux & Redux Thunk: Managing application state with Redux and handling asynchronous actions with Redux Thunk.</li>
              <li>Git & GitHub: Version control with Git and collaborating on projects using GitHub.</li>
              <li>Responsive Web Design: Designing mobile-first, responsive websites using CSS, Bootstrap, and Flexbox.</li>
              <li>Database Management: Experience with SQL, MongoDB, and NoSQL databases for data storage and retrieval.</li>
              <li>Problem-Solving & Algorithm Design: Strong analytical skills in problem-solving and designing efficient algorithms for better performance.</li>
            </ul>
            <br />
            🤝 Lets connect and explore how we can work together to create amazing digital experiences!
            <br />
            - Tharun Potharaju
          </p>
        </div>
        {/* Contact Information Section */}
        <div id="contact" className="bg-green py-12 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-6">Contact Information</h2>
          <div className="text-center text-lg sm:text-xl text-gray-700 max-w-xl mx-auto animate__animated animate__fadeInUp">
            <p>Email: <a href="mailto:potharajutharunrana@gmail.com" className="text-[#3498db]">potharajutharunrana@gmail.com</a></p>
            <p>Phone: <span className="text-[#3498db]">+91 6303748354</span></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/tharun-potharaju/" target="_blank" className="text-[#3498db]">LinkedIn Profile</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
