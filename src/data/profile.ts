export type SectionPath = "/" | "/about" | "/projects" | "/skills" | "/experience" | "/education" | "/contact" | "/stats";

export const sections: { label: string; path: SectionPath }[] = [
  { label: "Introduction", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills & Tools", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
  { label: "Stats", path: "/stats" },
];

export const profile = {
  name: "Kyalo Isaac Kimeu",
  brandName: "kimeu dev",
  role: "Web Developer | Algorithmic Systems & Data Analysis",
  email: "ikyalokimeu@gmail.com",
  location: "Nairobi, Kenya",
  github: "https://github.com/MrKimeu",
  introduction: "I am a results-driven Web Developer focused on algorithmic systems and data analysis. I enjoy building responsive web applications with HTML5, CSS3, Tailwind CSS, JavaScript and PHP, backed by MySQL and T-SQL, while integrating AI/ML models and deploying with Docker. I am currently deepening my expertise in Python and C++ to deliver production-grade, data-centric solutions.",
  professionalSummary: "Results-driven software developer with a strong focus on high-frequency algorithms, data analysis, and decision-making systems. Experienced in web application development, network-adjacent software, and AI/ML model integration. Currently deepening expertise in Python and C++ with a determined focus on delivering production-grade algorithmic and data-centric solutions. Immediately available and open to remote, hybrid, or on-site opportunities.",
  careerObjective: "To leverage expertise in software development and algorithmic modeling — utilizing Python, C++, and data analysis techniques — to architect innovative, scalable systems. Committed to translating complex data trends into measurable improvements and contributing to high-performance engineering teams.",
  about: [
    "I am a software developer based in Nairobi, Kenya, with a strong focus on high-frequency algorithms, data analysis and decision-making systems. I have been building for clients since 2021, from responsive web apps to real-time and geolocation-powered features.",
    "My experience spans web application development, network-adjacent software, and AI/ML model integration. I design relational database schemas optimized for query performance and data integrity, and I ship containerized applications with Docker.",
    "I am currently advancing my Python and C++ skills while finishing my Diploma in Computer Science. I am immediately available and open to remote, hybrid or on-site roles, and I want to contribute to high-performance engineering teams that turn complex data trends into measurable improvements.",
  ],
  technicalAchievements: [
    "Designed and implemented complex relational database schemas optimized for query performance and data integrity.",
    "Deployed containerized web applications, demonstrating proficiency in modern DevOps practices.",
    "Integrated AI/ML models into live applications, bridging the gap between data science and software engineering.",
  ],
  additionalInfo: {
    availability: "Immediately available",
    workMode: "Open to remote, hybrid, or on-site",
    github: "github.com/MrKimeu",
  },
  summaryHighlights: [
    { label: "Role & Focus", value: "Web Developer · Algorithmic Systems & Data Analysis" },
    { label: "Current Position", value: "Swap Executive · Flexi Personel (Nairobi, Kenya)" },
    { label: "Client Delivery", value: "Self-Employed Web Developer (4+ Years Since 2021)" },
    { label: "Education", value: "Diploma in Computer Science · The Ol'Lessos National Polytechnic" },
    { label: "Availability", value: "Immediately Available · Remote, Hybrid, or On-site" },
  ],
  sectionPreviews: [
    {
      title: "About Me",
      path: "/about" as SectionPath,
      summary: "High-frequency algorithms, data-driven decision systems, and containerized Docker deployments.",
      tag: "Background",
    },
    {
      title: "Projects",
      path: "/projects" as SectionPath,
      summary: "Client web applications, GeoTrack real-time mapping, AI model integrations, and DB designs.",
      tag: "5 Solutions",
    },
    {
      title: "Skills & Tools",
      path: "/skills" as SectionPath,
      summary: "Python, C++, PHP, Tailwind CSS, Docker, MySQL, T-SQL, AI/ML, and Algorithmic Modeling.",
      tag: "15+ Tools",
    },
    {
      title: "Experience",
      path: "/experience" as SectionPath,
      summary: "Flexi Personnel (Latest), Fluid Intelligence Networks internship, and 4+ years freelancing.",
      tag: "Career",
    },
    {
      title: "Education",
      path: "/education" as SectionPath,
      summary: "Diploma in Computer Science at The Ol'Lessos National Polytechnic (2023–2026 Expected).",
      tag: "Academics",
    },
    {
      title: "Contact",
      path: "/contact" as SectionPath,
      summary: "Reach out via validated direct form or direct mailto link for projects and roles.",
      tag: "Get in Touch",
    },
    {
      title: "Stats",
      path: "/stats" as SectionPath,
      summary: "Live GitHub activity heatmap, repository counts, followers, and portfolio metrics.",
      tag: "Live Data",
    },
  ],
};
