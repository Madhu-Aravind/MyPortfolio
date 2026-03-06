"use client";
// src/app/projects/page.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

type Filter = "All" | "Embedded" | "Web" | "Automation";
const FILTERS: Filter[] = ["All", "Embedded", "Web", "Automation"];

const filterColors: Record<string, string> = {
  All: "#00ff88",
  Embedded: "#00ff88",
  Web: "#00d4ff",
  Automation: "#6c63ff",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <SectionHeading
        label="my work"
        title="All Projects"
        subtitle="Open-source and professional projects across embedded systems, web development, and automation."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="relative px-4 py-2 text-sm font-mono rounded transition-all duration-200"
            style={{
              color: active === f ? filterColors[f] : "var(--text-secondary)",
              background: active === f ? `${filterColors[f]}18` : "transparent",
              border: `1px solid ${active === f ? filterColors[f] + "40" : "var(--bg-border)"}`,
            }}
          >
            {f}
            {active === f && (
              <motion.div
                layoutId="filter-indicator"
                className="absolute inset-0 rounded"
                style={{ boxShadow: `0 0 12px ${filterColors[f]}30` }}
              />
            )}
          </button>
        ))}
        <span className="ml-auto text-xs font-mono text-[var(--text-muted)] self-center">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)] font-mono">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
