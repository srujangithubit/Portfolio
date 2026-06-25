export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type SkillCategory = {
  title: string;
  summary: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

export type ResearchItem = {
  title: string;
  summary: string;
  emphasis: string;
};

export type ProjectSection = {
  title: string;
  content: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  repositoryUrl?: string;
  summary: string;
  problem: string;
  architecture: string;
  techStack: string[];
  highlights: string[];
  metrics: Array<{ label: string; value: string }>;
  screenshots?: Array<{ src: string; alt: string; caption: string }>;
  sections: ProjectSection[];
  bannerImage?: string;
  gradient: string;
  year: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
};

export type NavItem = {
  label: string;
  href: string;
};
