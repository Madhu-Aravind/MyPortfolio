// src/lib/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: "Embedded" | "Web" | "Automation";
  githubUrl: string;
  liveUrl?: string;
  imageColor: string;
  featured?: boolean;
  stars?: number;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}
