// ── Type Definitions ──

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  available: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  affiliation: string;
  year: string;
  score: string;
  current: boolean;
}

export interface SkillCategories {
  web: string[];
  app: string[];
  programming: string[];
  databases: string[];
  tools: string[];
  concepts: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  year: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
  link: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationEntry[];
  skills: SkillCategories;
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  experience: ExperienceEntry[];
  achievements: string[];
  marqueeItems: string[];
}

// ── Portfolio Data ──

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vivek Patel",
    title: "CSE Student — Web & App Developer",
    tagline: "Building the web, one line at a time.",
    bio: "Enthusiastic Computer Science Engineering student at GGITS Jabalpur with a strong passion for web and mobile app development. Skilled in HTML, CSS, JavaScript, and Python. Quick learner who loves building real-world projects.",
    location: "Jabalpur, Madhya Pradesh, India",
    email: "vk2480407@gmail.com",
    phone: "+91 7828456700",
    github: "https://github.com/vivekpatel",
    linkedin: "https://linkedin.com/in/vivekpatel",
    twitter: "https://twitter.com/vivekpatel",
    website: "https://vivekpatel.dev",
    available: true,
  },

  education: [
    {
      degree: "B.Tech — Computer Science Engineering",
      institution: "GGITS, Jabalpur",
      affiliation: "RGPV",
      year: "2024–2028",
      score: "Pursuing",
      current: true,
    },
    {
      degree: "Class 12th — Science (PCM)",
      institution: "Sarvodaya English H.S. School, Lakhnadon",
      affiliation: "MPBSE",
      year: "2024",
      score: "87%",
      current: false,
    },
    {
      degree: "Class 10th",
      institution: "Sarvodaya English H.S. School, Lakhnadon",
      affiliation: "MPBSE",
      year: "2022",
      score: "90.6%",
      current: false,
    },
  ],

  skills: {
    web: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
    app: ["Android Studio", "React Native", "Java", "XML Layouts", "UI/UX"],
    programming: ["C++", "Python", "C"],
    databases: ["MySQL", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Linux"],
    concepts: ["OOP", "DSA", "Problem Solving", "Debugging", "Version Control"],
  },

  projects: [
    {
      id: "01",
      title: "Personal Portfolio Website",
      description:
        "Fully responsive portfolio built with HTML5 and CSS3, hosted on GitHub Pages.",
      tech: ["HTML5", "CSS3"],
      github: "#",
      live: "#",
      year: "Jan 2025",
    },
    {
      id: "02",
      title: "Student Result Management System",
      description:
        "Web app for real-time grade calculation with DOM manipulation and JavaScript logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      year: "Mar 2025",
    },
    {
      id: "03",
      title: "To-Do List Android App",
      description:
        "Android app with CRUD operations, SharedPreferences storage, and Material Design UI.",
      tech: ["Android Studio", "Java", "XML"],
      github: "#",
      live: null,
      year: "Apr 2025",
    },
    {
      id: "04",
      title: "Weather App UI Clone",
      description:
        "Pixel-perfect responsive weather UI with Flexbox, card components, and CSS animations.",
      tech: ["HTML5", "CSS3"],
      github: "#",
      live: "#",
      year: "Feb 2025",
    },
    {
      id: "05",
      title: "Basic Calculator",
      description:
        "Console calculator in Python and C++ demonstrating core programming fundamentals.",
      tech: ["Python", "C++"],
      github: "#",
      live: null,
      year: "Dec 2024",
    },
  ],

  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2025",
      link: "#",
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera / University of Michigan",
      year: "2024",
      link: "#",
    },
    {
      name: "C++ Basics for Beginners",
      issuer: "Udemy",
      year: "2024",
      link: "#",
    },
    {
      name: "Introduction to Android Development",
      issuer: "Google",
      year: "2025",
      link: "#",
    },
    {
      name: "Git & GitHub Crash Course",
      issuer: "freeCodeCamp",
      year: "2025",
      link: "#",
    },
  ],

  experience: [
    {
      role: "Freelance Web Page Designer",
      org: "Personal Clients, Jabalpur",
      period: "Jan 2025 — Apr 2025",
      points: [
        "Designed and delivered static web pages for 2 local clients.",
        "Gathered requirements, created wireframes, iterated based on feedback.",
        "Translated designs into clean HTML/CSS meeting client specifications.",
      ],
    },
  ],

  achievements: [
    "Scored 90.6% in Class 10th — top performer at school level.",
    "Scored 87% in Class 12th (Science — PCM).",
    "Cleared JEE Mains and secured B.Tech CSE at GGITS Jabalpur.",
    "Completed 30-Day Coding Challenge on HackerRank.",
    "Participated in college-level Hackathon at GGITS (2024).",
    "Represented school at District-Level Science Exhibition.",
  ],

  marqueeItems: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PYTHON",
    "C++",
    "REACT NATIVE",
    "GIT",
    "ANDROID",
    "UI/UX",
    "OPEN SOURCE",
    "PROBLEM SOLVING",
    "NODE.JS",
  ],
};
