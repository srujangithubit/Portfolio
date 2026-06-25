import type {
  BlogPost,
  Metric,
  NavItem,
  Project,
  ResearchItem,
  SkillCategory,
  SocialLink,
  TimelineItem,
} from "./types";

export const profile = {
  name: "SRUJAN JAVAREGOWDA",
  title:
    "Computer Science Undergraduate | Full Stack Developer | Machine Learning Engineer",
  tagline:
    "Building user-centric systems across AI, full-stack web, computer vision, and trading workflows with a strong product and engineering focus.",
  bio: "Motivated Computer Science undergraduate at PES University with hands-on experience in Full-Stack Development, Artificial Intelligence, Computer Vision, and Web Technologies.",
  location: "Bengaluru, India",
  availability:
    "Open to internships, full-time roles, hackathons, and collaboration opportunities",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/srujangithubit" },
  { label: "LinkedIn", href: "https://linkedin.com/in/srujan-javaregowda" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const metrics: Metric[] = [
  {
    label: "Projects Built",
    value: "4+",
    detail: "AI, mobility, assistant, and interaction systems",
  },
  {
    label: "Top Hackathons",
    value: "5",
    detail: "University-level placements including Top 12 and Top 10",
  },
  {
    label: "Core Stacks",
    value: "6",
    detail: "Full-stack, AI, CV, backend, databases, tools",
  },
  {
    label: "Certifications",
    value: "4+",
    detail: "Web, Python, Problem Solving, and API fundamentals",
  },
  {
    label: "Open Source",
    value: "GSSoC",
    detail: "Girl Script Summer of Code 2025 contributor",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    summary:
      "Core programming languages used across web, backend, and systems work.",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Development",
    summary: "Responsive interfaces and modern application experiences.",
    items: ["React.js", "Next.js", "Bootstrap", "Responsive Web Design"],
  },
  {
    title: "Backend Development",
    summary: "APIs and services built for scalable, interactive products.",
    items: ["FastAPI", "Node.js", "NestJS", "REST APIs", "WebSockets"],
  },
  {
    title: "Databases",
    summary:
      "Storage and caching layers that support analytics and application state.",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "CMS & Tools",
    summary: "Delivery and collaboration tools used in day-to-day development.",
    items: ["WordPress", "Git", "GitHub", "Docker", "Postman", "Playwright"],
  },
  {
    title: "AI & Computer Vision",
    summary:
      "Vision-first and machine learning workflows used in project work.",
    items: ["OpenCV", "Machine Learning", "LLM Integration", "Computer Vision"],
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Started Programming",
    period: "Foundation",
    description:
      "Developed an early interest in building software, automation, and problem solving.",
  },
  {
    title: "PES University",
    period: "2024 - 2028",
    description: "B.Tech in Computer Science Engineering in Bengaluru, India.",
  },
  {
    title: "Full-Stack Development",
    period: "Product building",
    description:
      "Built responsive web products using React, Next.js, FastAPI, Node.js, and WebSockets.",
  },
  {
    title: "AI and Computer Vision",
    period: "Applied intelligence",
    description:
      "Worked on OpenCV-based behavior monitoring, LLM integration, and AI product ideas.",
  },
  {
    title: "InAmigos",
    period: "AI Data Analyst | AI Web Developer",
    description:
      "Worked on AI data analysis and web development tasks focused on practical product delivery.",
  },
  {
    title: "GSSoC 2025",
    period: "Open source",
    description:
      "Contributed as a Girl Script Summer of Code 2025 contributor.",
  },
  {
    title: "Trading Systems",
    period: "Quant interest",
    description:
      "Explored trading and analytics platforms with a focus on usable systems.",
  },
  {
    title: "Current Research",
    period: "Today",
    description:
      "Continuing to deepen AI, ML, CV, and modern software engineering skills.",
  },
];

export const research: ResearchItem[] = [
  {
    title: "Artificial Intelligence",
    summary:
      "Building systems that assist, automate, and reason across real user workflows.",
    emphasis: "Applied AI",
  },
  {
    title: "Machine Learning",
    summary:
      "Feature engineering, evaluation, and model discipline for reliable outcomes.",
    emphasis: "Pipeline rigor",
  },
  {
    title: "Computer Vision",
    summary:
      "Vision-based analytics, detection, and behavioral monitoring systems.",
    emphasis: "Real-time perception",
  },
  {
    title: "Web Technologies",
    summary:
      "Next-generation product interfaces with strong UX and responsive implementation.",
    emphasis: "Product UI",
  },
  {
    title: "LLM Integration",
    summary:
      "Conversational and workflow-driven systems powered by large language models.",
    emphasis: "AI interfaces",
  },
  {
    title: "Financial AI",
    summary:
      "Trading analytics, market dashboards, and decision-support tooling.",
    emphasis: "Quant systems",
  },
  {
    title: "Open Source",
    summary:
      "Contributing to community-driven codebases and learning through collaboration.",
    emphasis: "GSSoC",
  },
  {
    title: "Hackathon Builds",
    summary:
      "Rapid prototyping with teams under time pressure and real presentation constraints.",
    emphasis: "Execution speed",
  },
];

export const projects: Project[] = [
  {
    slug: "tradepro",
    name: "TradePro",
    category: "Trading & Analytics Platform",
    repositoryUrl: "https://github.com/srujangithubit/TradePro",
    summary:
      "A data-driven trading platform for market monitoring and performance analysis.",
    problem:
      "Trading workflows need a clearer way to turn complex financial data into actionable decisions.",
    architecture:
      "The platform centers on an analytics dashboard that converts market and performance data into an accessible, user-centric trading workspace.",
    techStack: ["Python", "JavaScript", "HTML", "CSS", "Data Analytics Tools"],
    highlights: [
      "Market Monitoring",
      "Performance Analysis",
      "Actionable Insights",
      "Dashboard UX",
    ],
    metrics: [
      { label: "Dashboard focus", value: "Realtime" },
      { label: "Core value", value: "Analytics" },
      { label: "Delivery style", value: "User-centric" },
    ],
    screenshots: [
      {
        src: "/projects/tradepro/trade-analysis.jpg",
        alt: "TradePro trade analysis dashboard showing trade details and performance rings",
        caption:
          "Trade analysis dashboard with detailed execution context and performance rings.",
      },
      {
        src: "/projects/tradepro/trade-chart.jpg",
        alt: "TradePro live EUR/USD chart with candlesticks and trading controls",
        caption:
          "Live chart view built for fast decision-making and strategy monitoring.",
      },
    ],
    sections: [
      {
        title: "Overview",
        content:
          "Engineered a data-driven platform with interactive dashboards for market monitoring and analysis.",
      },
      {
        title: "Problem",
        content:
          "The goal was to make financial datasets easier to interpret through a clean and fast interface.",
      },
      {
        title: "Solution",
        content:
          "Transformed raw market data into actionable insights using a polished, user-centric experience.",
      },
      {
        title: "Impact",
        content:
          "The project demonstrates product thinking, dashboard design, and applied data analysis.",
      },
      {
        title: "Future Scope",
        content:
          "Expand into deeper automation, alerting, and personalized trading intelligence.",
      },
    ],
    bannerImage: "/projects/banners/tradepro-banner.png",
    gradient: "from-cyan-500 via-blue-500 to-violet-500",
    year: "2025",
  },
  {
    slug: "wheel-safar",
    name: "WheelSafar",
    category: "AI-Powered Smart Mobility",
    repositoryUrl: "https://github.com/srujangithubit/WheelSafar",
    summary:
      "A computer vision platform for real-time driver behavior monitoring and road safety analytics.",
    problem:
      "Driver fatigue, distraction, and drowsiness can lead to preventable road accidents.",
    architecture:
      "The system combines computer vision detection with backend safety analytics to monitor driver state in real time.",
    techStack: [
      "Python",
      "FastAPI",
      "OpenCV",
      "Computer Vision",
      "AI/ML",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    highlights: [
      "Drowsiness Detection",
      "Fatigue Monitoring",
      "Distraction Tracking",
      "Safety Analytics",
    ],
    metrics: [
      { label: "Vision focus", value: "Realtime" },
      { label: "Risk layer", value: "Safety" },
      { label: "Stack", value: "CV + API" },
    ],
    screenshots: [
      {
        src: "/projects/wheelsafar/wheelsafar-overview.png",
        alt: "WheelSafar dashboard showing ride overview, quick actions, and safety widgets",
        caption:
          "WheelSafar overview screen with ride metrics, safety actions, and quick access panels.",
      },
    ],
    sections: [
      {
        title: "Overview",
        content:
          "Built an AI mobility platform using computer vision for driver monitoring.",
      },
      {
        title: "Problem",
        content:
          "Road safety required a practical way to detect risky behavior before incidents occur.",
      },
      {
        title: "Solution",
        content:
          "Combined real-time detection with backend analytics to surface safety concerns clearly.",
      },
      {
        title: "Impact",
        content:
          "Shows computer vision, backend design, and applied AI for human safety.",
      },
      {
        title: "Future Scope",
        content:
          "Add alerting, fleet dashboards, and richer telemetry for operational use.",
      },
    ],
    bannerImage: "/projects/banners/wheelsafar-banner.png",
    gradient: "from-fuchsia-500 via-violet-500 to-indigo-500",
    year: "2025",
  },
  {
    slug: "jarvis-ai-assistant",
    name: "Jarvis",
    category: "AI Virtual Assistant",
    repositoryUrl: "https://github.com/srujangithubit/Jarvis",
    summary:
      "A conversational assistant that uses LLM integrations to handle natural language tasks and workflows.",
    problem:
      "Users need an assistant that can understand complex queries and automate repetitive tasks reliably.",
    architecture:
      "Built as an intelligent backend architecture that connects natural language input, task processing, and action execution.",
    techStack: ["Python", "FastAPI", "LLM APIs", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Conversational AI",
      "Task Automation",
      "LLM Integration",
      "Scalable Backend",
    ],
    metrics: [
      { label: "Assistant type", value: "Voice/LLM" },
      { label: "Primary value", value: "Automation" },
      { label: "System focus", value: "Backend" },
    ],
    screenshots: [
      {
        src: "/projects/jarvis/jarvis-command-deck.jpg",
        alt: "Jarvis command deck dashboard with command input, AI response, inbox observability, and market data panels",
        caption:
          "Jarvis command deck combining AI responses, observability, and market context in one cockpit-style interface.",
      },
    ],
    sections: [
      {
        title: "Overview",
        content:
          "Developed a conversational assistant leveraging LLM integrations for natural language tasks.",
      },
      {
        title: "Problem",
        content:
          "The aim was to simplify repetitive user workflows through an intelligent interface.",
      },
      {
        title: "Solution",
        content:
          "Designed a scalable backend architecture to process user requests and automate actions.",
      },
      {
        title: "Impact",
        content:
          "Shows product thinking, backend design, and applied AI integration.",
      },
      {
        title: "Future Scope",
        content: "Add memory, multimodal input, and richer tool orchestration.",
      },
    ],
    bannerImage: "/projects/banners/jarvis-banner.png",
    gradient: "from-emerald-500 via-cyan-500 to-sky-500",
    year: "2024",
  },
  {
    slug: "airtouch",
    name: "AirTouch",
    category: "Gesture Interaction System",
    repositoryUrl: "https://github.com/srujangithubit/Airtouch",
    summary:
      "A touchless interaction system using OpenCV-based hand tracking and motion detection.",
    problem:
      "Traditional interfaces are not always accessible or convenient for hands-free use cases.",
    architecture:
      "Computer vision modules detect hands and gestures, then map them into intuitive interaction commands.",
    techStack: ["Python", "OpenCV", "Computer Vision"],
    highlights: [
      "Hand Tracking",
      "Motion Detection",
      "Gesture Commands",
      "Accessibility",
    ],
    metrics: [
      { label: "Interaction mode", value: "Touchless" },
      { label: "Core tech", value: "OpenCV" },
      { label: "Use case", value: "Accessibility" },
    ],
    sections: [
      {
        title: "Overview",
        content:
          "Created a gesture-based command system for hands-free interaction.",
      },
      {
        title: "Problem",
        content:
          "Needed a way to interact with devices without direct touch input.",
      },
      {
        title: "Solution",
        content:
          "Used OpenCV for real-time hand tracking and motion-based command detection.",
      },
      {
        title: "Impact",
        content:
          "Highlights practical CV implementation and accessibility-focused product thinking.",
      },
      {
        title: "Future Scope",
        content:
          "Add more gestures, device integrations, and a richer UI layer.",
      },
    ],
    bannerImage: "/projects/banners/airtouch-banner.png",
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    year: "2024",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-systems",
    title: "Building AI Systems That Survive Production",
    summary:
      "Lessons on modularity, evaluation, and operational discipline when shipping AI products.",
    date: "2026-01-18",
    readTime: "8 min read",
    tags: ["AI Systems", "Architecture", "Production"],
  },
  {
    slug: "trading-platform-architecture",
    title: "Designing Trading Platforms for Trust and Speed",
    summary:
      "How to think about observability, execution flow, and risk controls in financial software.",
    date: "2025-11-02",
    readTime: "10 min read",
    tags: ["Trading", "Systems", "Risk"],
  },
  {
    slug: "nextjs-performance-playbook",
    title: "Next.js Performance Playbook for Premium Portfolios",
    summary:
      "A practical approach to rendering strategy, lazy loading, and motion without sacrificing Lighthouse scores.",
    date: "2025-08-14",
    readTime: "6 min read",
    tags: ["Next.js", "Performance", "Frontend"],
  },
];

export const dashboardStats = [
  { label: "Repositories", value: "40+" },
  { label: "Active languages", value: "8" },
  { label: "Commits this year", value: "1,240" },
  { label: "Learning hours", value: "900+" },
];

export const terminalCommands = [
  "help",
  "about",
  "skills",
  "projects",
  "resume",
  "github",
  "linkedin",
  "contact",
  "clear",
  "theme",
];
