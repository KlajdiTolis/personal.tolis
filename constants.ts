import { Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Klajdi Tolis",
  title: "Tech Lead | Full Stack Engineer",
  email: "info@tolis.al",
  phone: "+355 693350203",
  linkedin: "https://al.linkedin.com/in/klajdi-tolis-b2939b225",
  github: "https://github.com/KlajdiTolis",
  location: "Tirana, Albania",
  languages: [
    { name: "Albanian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Italian", level: "Basic" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "teamsystem",
    company: "TeamSystem",
    role: "Frontend Engineer",
    period: "2024 - Present",
    description: [
      "Led the migration of 12+ legacy frontend modules from jQuery to React, reducing technical debt across core product areas and cutting average bug resolution time by ~30%.",
      "Collaborated with backend teams on PHP-based enterprise systems and API integration.",
      "Refactored frontend architecture across core modules, achieving measurable improvements in load time and component reusability — contributing to a 2nd-place finish at the internal TeamSystem Hackathon.",
      "Worked within Agile workflows using Jira and GitLab CI/CD pipelines."
    ],
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "jQuery",
      "PHP",
      "GitLab CI/CD",
      "Jira"
    ],
    url: "https://www.teamsystem.com/",
    projects: [
      {
        title: "ERP Module Modernization",
        description: "Re-architecting core accounting modules from legacy stacks to modern React applications.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Enterprise Design System",
        description: "Developing a unified UI library to ensure visual consistency across all TeamSystem products.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "icharge",
    company: "iCharge.app",
    role: "Tech Lead | Full Stack Engineer",
    period: "2023 - 2025",
    description: [
      "Served as sole tech lead and primary engineer, making all architecture decisions and owning delivery from infrastructure to UI across a two-year roadmap.",
      "Led end-to-end development of Albania's largest EV charging platform, growing to 30,000+ registered users and 300+ active charge points — serving both individual drivers and enterprise fleet operators.",
      "Designed real-time charger communication systems using WebSockets and Firebase Realtime Database.",
      "Developed power allocation and load-balancing mechanisms to optimize charging efficiency.",
      "Managed cloud infrastructure and performance optimization using GCP, Redis, and Cloudflare."
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "WebSockets",
      "MongoDB",
      "Redis",
      "GCP",
      "Firebase",
      "Cloudflare",
      "OCPP 1.6/2.0"
    ],
    url: "https://icharge.app/",
    projects: [
      {
        title: "EV Charging Portal",
        description: "Real-time charger discovery and management platform serving 30,000+ registered users.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "xmedia",
    company: "X-Media",
    role: "React Native / Expo Developer",
    period: "2025",
    description: [
      "Developed a real-time news mobile application using React Native Expo.",
      "Built features for browsing, saving, and managing news articles.",
      "Developed responsive and reusable UI components with Tamagui.",
      "Managed server state and API data fetching using TanStack Query.",
      "Implemented smooth mobile animations and transitions using react-native-reanimated.",
      "Optimized app performance and user experience across mobile devices."
    ],
    techStack: [
      "React Native",
      "Expo",
      "Tamagui",
      "TanStack Query",
      "react-native-reanimated",
      "TypeScript"
    ],
    projects: [
      {
        title: "Real-Time News App",
        description: "Feature-rich mobile news application with real-time updates, article saving, and smooth animations.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "blitz",
    company: "Blitz Carwash",
    role: "Full Stack Engineer & Mobile Lead",
    period: "2024",
    description: [
      "Architected and developed a real-time management platform for monitoring and controlling car washing machines.",
      "Led mobile application development using React Native for operational staff workflows.",
      "Built backend services with Node.js and Express to process machine telemetry and remote commands.",
      "Developed analytics dashboards for monitoring machine status and business operations."
    ],
    techStack: [
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS"
    ],
    url: "https://blitzcarwash.al/",
    projects: [
      {
        title: "Blitz Management Platform",
        description: "Unified dashboard for machine control and operational monitoring.",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Staff Mobile App",
        description: "Expo-based mobile solution for real-time on-field machine management.",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "applay",
    company: "APPlay",
    role: "Full Stack Engineer",
    period: "2021 - 2023",
    description: [
      "Developed cross-platform Smart TV applications supporting LG webOS, Samsung Tizen, and Android TV.",
      "Built TV-optimized interfaces using SolidJS and React-based administration tools.",
      "Implemented backend services for content delivery, authentication, and platform-specific integrations.",
      "Optimized performance for constrained TV environments."
    ],
    techStack: [
      "SolidJS",
      "React",
      "React Admin",
      "TanStack Query",
      "shadcn/ui",
      "Node.js",
      "webOS",
      "Tizen",
      "Android TV",
      "IPTV/OTT"
    ],
    url: "https://applay.cloud/",
    projects: [
      {
        title: "Cross-Platform TV App",
        description: "Unified media streaming application for webOS, Tizen, and Android TV ecosystems.",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Content Management Hub",
        description: "Scalable admin dashboard for real-time content operations and user management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "magoware",
    company: "Magoware",
    role: "Frontend Engineer",
    period: "2020 - 2021",
    description: [
      "Contributed to the development of IPTV and OTT solutions with a strong focus on frontend technologies.",
      "Built responsive user interfaces using React, along with libraries such as React Admin and Material-UI (MUI).",
      "Collaborated with backend teams using Node.js and the NestJS framework.",
      "Gained experience with infrastructure technologies like Redis, Firebase, and Google Cloud Platform (GCP).",
      "Played a key role in improving usability and performance of media delivery interfaces."
    ],
    techStack: [
      "React",
      "React Admin",
      "MUI",
      "Node.js",
      "NestJS",
      "Firebase",
      "GCP",
      "Redis",
      "IPTV/OTT Tech"
    ],
    url: "https://www.magoware.tv/",
    projects: [
      {
        title: "OTT Web Player",
        description: "Optimized video streaming interface for cross-browser compatibility.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "SolidJS",
      "Redux",
      "TanStack Query",
      "Material UI",
      "Shadcn/UI",
      "TypeScript",
      "Tailwind CSS",
      "Expo",
      "Tamagui",
      "React Admin",
      "React Router",
      "Chart.js",
      "Figma"
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "OCPP 1.6/2.0 Integration",
      "Machine Telemetry & Control",
      "Stripe Payments",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase Realtime Database",
      "Firestore",
      "PHP"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform (GCP)",
      "Cloudflare",
      "GitLab CI/CD",
      "Firebase Functions",
      "Docker",
      "Linux",
      "Load Balancing",
      "Power Distribution",
      "IPTV / OTT Architecture"
    ]
  },
  {
    title: "Tools & AI",
    skills: [
      "Git",
      "Jira",
      "Figma",
      "Claude / Claude Code",
      "ChatGPT",
      "GitHub Copilot",
      "Cursor",
      "Gemini API",
      "Jest",
      "Playwright",
      "AI Prompt Engineering"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Computer Science",
    school: "Polytechnic University of Tirana",
    period: "2023 - 2025"
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Polytechnic University of Tirana",
    period: "2020 - 2023"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "EV Charge Show, Istanbul, 2025" },
  { name: "TeamSystem Conference (Milano, Italy, 2025)" },
  { name: "2nd Place — TeamSystem Hackathon (Rimini, Italy)" },
  { name: "OCPP Integration Certification (v1.6 / v2.0)" },
  { name: "Microsoft Azure AZ-900 & AZ-204" },
  { name: "TeamSystem Conference (Rimini, Italy, 2024)" },
  { name: "TeamSystem Conference (Pesaro, Italy, 2023)" }
];
