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
  role: "Web Developer",
  email: "ikyalokimeu@gmail.com",
  location: "Nairobi, Kenya",
  github: "https://github.com/MrKimeu",
  introduction: "I am a results-driven Web Developer focused on algorithmic systems and data analysis. I enjoy building responsive web applications with HTML5, CSS3, Tailwind CSS, JavaScript and PHP, backed by MySQL and T-SQL, while integrating AI/ML models and deploying with Docker. I am currently deepening my expertise in Python and C++ to deliver production-grade, data-centric solutions.",
  about: [
    "I am a software developer based in Nairobi, Kenya, with a strong focus on high-frequency algorithms, data analysis and decision-making systems. I have been building for clients since 2021, from responsive web apps to real-time and geolocation-powered features.",
    "My experience spans web application development, network-adjacent software, and AI/ML model integration. I design relational database schemas optimized for query performance and data integrity, and I ship containerized applications with Docker.",
    "I am currently advancing my Python and C++ skills while finishing my Diploma in Computer Science. I am immediately available and open to remote, hybrid or on-site roles, and I want to contribute to high-performance engineering teams that turn complex data trends into measurable improvements.",
  ],
};
