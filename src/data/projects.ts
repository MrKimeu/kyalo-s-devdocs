export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  status: "Live" | "Private";
  description: string;
  role: string;
  tags: readonly string[];
  searchQuery?: string;
  liveUrl?: string;
  details: {
    overview: string;
    highlights: readonly string[];
    architecture: readonly string[];
  };
}

export const projects: readonly ProjectItem[] = [
  {
    id: "premier-values",
    number: "01 / 07",
    title: "PremierValues Limited",
    status: "Live",
    description:
      "Full-stack property valuation and real estate management platform. Built with Laravel 12+ on a modern cloud infrastructure with CI/CD pipelines, automated deployments, and scalable database architecture.",
    role: "DevOps & Backend Developer",
    tags: ["Laravel 12", "PHP", "MySQL", "Docker", "Nginx", "CI/CD"],
    searchQuery: "PremierValues Limited Kenya property valuation",
    liveUrl: "https://premiervalues.co.ke",
    details: {
      overview:
        "Engineered an enterprise valuation and property asset lifecycle management system with high-availability cloud hosting, automated database backups, and zero-downtime CI/CD deployment routines.",
      highlights: [
        "Automated CI/CD deployment pipelines using GitHub Actions, Docker containers, and Nginx reverse proxy configurations.",
        "Engineered complex relational database schemas in MySQL optimized for high-volume transactions and multi-tenant asset records.",
        "Enforced role-based access control (RBAC) and compliance audit logging for professional land and real estate appraisers.",
      ],
      architecture: [
        "Framework: Laravel 12 LTS with Eloquent ORM & Blade templates",
        "Storage: MySQL 8 with indexed query optimization & automated backups",
        "Containerization: Docker multi-stage images managed with Docker Compose",
        "Web Gateway: Nginx reverse proxy with SSL termination and Brotli compression",
      ],
    },
  },
  {
    id: "fluid-intelligence",
    number: "02 / 07",
    title: "Fluid Intelligence Network Suite",
    status: "Live",
    description:
      "High-speed internet infrastructure and client network portal. Engineered network telemetry pipelines, responsive web control interfaces, and multi-tenant performance monitoring.",
    role: "Software Developer Intern",
    tags: ["PHP", "JavaScript", "Network Telemetry", "Nginx", "Linux", "MySQL"],
    searchQuery: "Fluid Intelligence Networks Kenya internet infrastructure",
    details: {
      overview:
        "Supported delivery of high-speed internet infrastructure projects across Kenya through real-time telemetry monitoring, network configuration, and responsive client web management interfaces.",
      highlights: [
        "Maintained live monitoring scripts tracking bandwidth allocation, packet loss, and latency metrics across core switches.",
        "Designed and developed responsive client websites and management dashboards with clean PHP and MySQL.",
        "Collaborated with senior engineers on web-based systems deployed across production Linux environments.",
      ],
      architecture: [
        "Backend: PHP & Node.js network status polling services",
        "Frontend: Responsive web portal with interactive bandwidth charts",
        "Environment: Ubuntu Server, Nginx, systemd automated background services",
        "Protocols: SNMP, TCP/IP socket listeners, RESTful status APIs",
      ],
    },
  },
  {
    id: "mic3-solution",
    number: "03 / 07",
    title: "MIC3 Solution Group",
    status: "Live",
    description:
      "Enterprise technology solutions platform with Dockerized microservices, automated deployments, Nginx reverse proxy routing, and multi-environment server infrastructure management.",
    role: "DevOps Engineer",
    tags: ["Python", "JavaScript", "Docker", "Nginx", "Linux"],
    searchQuery: "MIC3 Solution Group enterprise technology solutions",
    details: {
      overview:
        "Architected containerized microservice architectures and automated cloud server orchestration pipelines for enterprise commercial clients across various digital sectors.",
      highlights: [
        "Orchestrated multi-environment container deployments (staging & production) with Docker and Docker Compose.",
        "Configured SSL termination, HTTP/2 proxy streaming, and load balancing via Nginx.",
        "Built automated server provisioning scripts in Bash and Python for rapid disaster recovery.",
      ],
      architecture: [
        "Microservices: Python Flask & FastAPI backend services",
        "Proxy Layer: Nginx upstream balancing and rate limiting",
        "Orchestration: Docker Compose with isolated overlay networks",
        "Operating System: Debian/Ubuntu Linux hardened with UFW firewall policies",
      ],
    },
  },
  {
    id: "algorithmic-engine",
    number: "04 / 07",
    title: "High-Frequency Algorithmic Engine",
    status: "Private",
    description:
      "High-performance computational engine designed for real-time market data evaluation, quantitative signal processing, and low-latency rule-based decision trees.",
    role: "Systems & Algorithm Developer",
    tags: ["Python", "C++", "Algorithmic Modeling", "NumPy", "Multithreading"],
    details: {
      overview:
        "High-frequency decision engine combining C++ numeric routines for ultra-low latency compute with Python orchestration for real-time risk calibration and signal synthesis.",
      highlights: [
        "Implemented multithreaded data ingestion pipelines processing high-frequency tick and event streams.",
        "Developed deterministic backtesting frameworks measuring Sharpe ratio, maximum drawdown, and slippage.",
        "Leveraged memory-efficient C++ data structures to minimize cache misses during intensive numeric sweeps.",
      ],
      architecture: [
        "Core Engine: C++20 with SIMD vectorization and lock-free ring buffers",
        "Data Analytics: Python 3 with NumPy, Pandas, and SciPy optimization pipelines",
        "Concurrency: POSIX pthreads and async worker pools",
        "Storage: Memory-mapped binary append logs for instantaneous historical replay",
      ],
    },
  },
  {
    id: "waba-automations",
    number: "05 / 07",
    title: "WABA Automations",
    status: "Private",
    description:
      "WhatsApp Business API automation platform enabling enterprise businesses to build custom chatbot flows, send bulk notifications, and manage automated customer support at scale.",
    role: "Backend & DevOps Developer",
    tags: ["Node.js", "WhatsApp Business API", "Python", "Docker", "Redis"],
    details: {
      overview:
        "Engineered an enterprise WhatsApp Business messaging platform with resilient webhook ingestion, distributed Redis queue workers, and conversational NLP routing.",
      highlights: [
        "Processed thousands of concurrent inbound webhooks with sub-second message dispatch and state persistence.",
        "Built template approval synchronization with Meta Graph API and automated retry backoffs.",
        "Containerized Redis job queues with Docker to guarantee zero message loss during peak traffic bursts.",
      ],
      architecture: [
        "Engine: Node.js (TypeScript) & Express with Python NLP microservices",
        "Queue System: Redis BullMQ with dead-letter queue isolation",
        "External APIs: Meta Cloud API / WhatsApp Business Platform v20.0+",
        "Deployment: Docker containers deployed behind an Nginx reverse proxy",
      ],
    },
  },
  {
    id: "relational-db-platform",
    number: "06 / 07",
    title: "Relational DB & Analytics Platform",
    status: "Live",
    description:
      "High-throughput relational database architectures and analytics pipelines. Designed normalized schemas, optimized execution plans, and indexed multi-million row datasets in MySQL & T-SQL.",
    role: "Database Architect",
    tags: ["MySQL", "T-SQL", "Relational Modeling", "Query Optimization", "Docker"],
    searchQuery: "relational database schema design optimization MySQL T-SQL",
    details: {
      overview:
        "High-performance database engineering focusing on query profiling, index optimization (B-Tree & Composite), stored procedures, and ACID compliance across distributed systems.",
      highlights: [
        "Reduced slow query latency by up to 74% through query refactoring and strategic execution plan indexing.",
        "Designed resilient normalization models (3NF/BCNF) preventing race conditions and stale reads.",
        "Deployed automated replication clusters and backup snapshots within isolated Docker networks.",
      ],
      architecture: [
        "Database Engines: MySQL 8.0 & Microsoft SQL Server (T-SQL)",
        "Optimization: EXPLAIN analysis, composite indexing, and partition pruning",
        "Integrity: Foreign key cascade topologies and ACID transactional boundaries",
        "Testing: Automated load benchmarking with synthetic dataset generation",
      ],
    },
  },
  {
    id: "spiro-swap-portal",
    number: "07 / 07",
    title: "Spiro Battery Swap Operations",
    status: "Live",
    description:
      "Electric vehicle battery swap workflow and telemetry operations management for Spiro under Flexi Personnel, tracking live inventory, swap validation, and client turnaround.",
    role: "Swap Operations Specialist",
    tags: ["Operations Workflow", "Real-Time Tracking", "Hardware-Sync", "Nairobi Operations"],
    searchQuery: "Spiro electric mobility battery swapping Kenya",
    details: {
      overview:
        "Supporting front-line battery swapping operations and operational telemetry for Spiro electric motorbikes under Flexi Personnel, maximizing rider uptime.",
      highlights: [
        "Facilitated rapid battery turnaround times ensuring high operational throughput across peak commuting hours.",
        "Coordinated diagnostic checks and charge status validation across smart battery packs.",
        "Delivered direct customer support and operational incident escalations for commercial EV riders.",
      ],
      architecture: [
        "Platform: Fleet operations and battery telemetry tracking",
        "Turnaround: Sub-3-minute battery inspection and cycle verification",
        "Support: Direct customer liaison and fleet rider assistance in Nairobi",
        "Management: Flexi Personnel & Spiro operational alignment",
      ],
    },
  },
] as const;
