"use client";
// src/components/ui/ProjectCard.tsx
import { motion } from "framer-motion";
import {
  Github, ExternalLink, Cpu, Activity, GitBranch,
  Layers, Monitor, Terminal, Star
} from "lucide-react";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu,
  activity: Activity,
  "git-branch": GitBranch,
  layers: Layers,
  monitor: Monitor,
  terminal: Terminal,
};

const categoryColors: Record<string, string> = {
  Embedded: "#00ff88",
  Web: "#00d4ff",
  Automation: "#6c63ff",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? Cpu;
  const catColor = categoryColors[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-hover terminal-border rounded-lg bg-[var(--bg-card)] flex flex-col overflow-hidden"
    >
      {/* Header strip */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.imageColor}, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + category */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="p-2.5 rounded"
            style={{ background: `${project.imageColor}18`, color: project.imageColor }}
          >
            <Icon size={20} />
          </div>
          <div className="flex items-center gap-3">
            {project.stars !== undefined && (
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-muted)]">
                <Star size={12} />
                {project.stars}
              </span>
            )}
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ color: catColor, background: `${catColor}18` }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-border)] text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--bg-border)]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("btn-outline text-xs py-1.5 px-3")}
          >
            <Github size={13} />
            Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
