import {
  ContactInfo,
  EducationItem,
  ExperienceItem,
  Project,
  SkillGroup,
} from "./types";

export const resumeUrl =
  "https://drive.google.com/file/d/1LBBoEoBKLOLpDvofHBblYQmC0j3FGRjg/view?usp=sharing";

export const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export const contactInfo: ContactInfo = {
  phone: "+91 63037 48354",
  email: "potharajutharun0@gmail.com",
  linkedin: "https://www.linkedin.com/in/tharun-potharaju",
  github: "https://github.com/potharajutharun",
  location: "Hyderabad, India",
  relocation: "Open to relocation, 30-day notice period",
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "SQL", "Java", "Python"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "Validation Middleware",
      "Structured Logging",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Protected Routes",
      "Pagination",
      "Forms",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    items: [
      "MySQL",
      "Schema Design",
      "Indexing",
      "Query Optimization",
      "Hostinger MySQL",
      "AWS RDS",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS S3",
      "Ubuntu/Linux",
      "Nginx",
      "PM2",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Hostinger",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise Hiring Portal",
    subtitle: "Sole Developer, Live in Production",
    tech: ["Next.js", "React", "Node.js", "Express", "MySQL", "AWS S3"],
    highlights: [
      "Built recruiter and candidate workflows end to end, including job posting, resume upload, search, and role-based dashboards.",
      "Implemented JWT authentication, token validation middleware, and role-based access across frontend and backend.",
      "Designed indexed MySQL schema with pagination for smooth handling of 10K+ record datasets.",
      "Integrated AWS S3 with pre-signed URLs for 300+ secure document uploads.",
    ],
  },
  {
    title: "AI Document Q&A System",
    subtitle: "Sole Developer, Live in Production",
    tech: ["Next.js", "Node.js", "Express", "AWS S3", "AI APIs"],
    highlights: [
      "Built full-stack PDF upload, preview, and conversational Q&A interface with protected routes.",
      "Created backend pipeline for PDF ingestion, content extraction, AI API integration, caching, and request validation.",
      "Used pre-signed S3 URLs for secure stateless document storage without exposing server credentials in the client.",
    ],
  },
  {
    title: "Booxpert Dashboard",
    subtitle: "Live Project",
    tech: ["Dashboard", "Web App"],
    highlights: [
      "Production-deployed dashboard application.",
      "Accessible live demo link added to portfolio.",
    ],
    liveUrl: "https://booxpert.vercel.app/dashboard",
  },
  {
    title: "Admin Portal",
    subtitle: "In Progress · Full Stack · Work in Progress",
    tech: ["React", "Node.js", "Admin Dashboard", "Authentication"],
    highlights: [
      "Centralized admin portal being built to manage and monitor all personal projects from one place. Features authentication, dashboard access controls and modular design to support future project integrations.",
    ],
    liveUrl: "https://adminportal-2r3x.vercel.app/auth/login",
  },
  {
    title: "TinyURL",
    subtitle: "Live Project",
    tech: ["Utility App", "URL Shortener"],
    highlights: [
      "Deployed URL shortening application.",
      "Live URL included for quick recruiter access.",
    ],
    liveUrl: "https://tinyurl-bice.vercel.app/",
  },
  {
    title: "HUmen Nalanda Task",
    subtitle: "Backend Project · Node.js",
    tech: ["Node.js", "Express", "REST API", "Backend"],
    highlights: [
      "Backend service built for a bookkeeping admin system. Handles data management and business logic for administrative operations. Built with Node.js — source code available on GitHub.",
    ],
    repoUrl: "https://github.com/potharajutharun/HUmen-_nalanda_Task",
  },
  {
    title: "Auth Service",
    subtitle: "In Progress · Microservice · Work in Progress",
    tech: ["Node.js", "JWT", "Microservices", "REST API"],
    highlights: [
      "Authentication microservice designed to handle user registration, login and token management across multiple personal projects. Built as a standalone service so future projects can plug into it without rebuilding auth from scratch. Work in progress.",
    ],
    repoUrl: "https://github.com/potharajutharun/auth_service",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer - Full Stack (React, Node.js)",
    company: "Techno Communications Global Pvt Ltd",
    location: "Hyderabad, India",
    period: "Jul 2024 - Present",
    points: [
      "Built recruiter dashboards in React/Next.js with protected routes, filters, and paginated loaders for 10K+ records.",
      "Developed Node.js and Express REST APIs with JWT auth, validation middleware, and structured error handling.",
      "Optimized MySQL schemas with indexing and pagination for faster filtered data retrieval.",
      "Integrated AWS S3 end to end using pre-signed URLs for secure document upload and retrieval.",
      "Deployed and managed backend services on Ubuntu using Nginx and PM2, including restarts and log monitoring.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Technology in Information Technology",
  institution:
    "University College of Engineering, Kakatiya University, Kothagudem, India",
  period: "2019 - 2023 | CGPA: 8.2 / 10",
};

export const aboutFocusAreas = [
  "Scalable React and Next.js dashboards",
  "Node.js and Express REST APIs",
  "MySQL optimization for large datasets",
  "AWS S3 secure upload and retrieval flows",
];
