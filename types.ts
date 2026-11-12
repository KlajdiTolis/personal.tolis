export interface Project {
  title: string;
  description: string;
  image?: string;
  specs?: string[];
}

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
  url?: string;
  projects?: Project[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}