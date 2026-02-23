export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export type ContactInfo = {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  relocation: string;
};

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};
