"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

type Filter = "All"|"Embedded"|"Web"|"Automation";
const FILTERS: Filter[] = ["All","Embedded","Web","Automation"];
const filterColors: Record<string,string> = { All:"#6366f1", Embedded:"#10b981", Web:"#06b6d4", Automation:"#8b5cf6" };

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <SectionHeading label="my work" title="All Projects" subtitle="Projects built during training at Kernel Masters and internship at Tata Elxsi." />
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)}
            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              color: active===f ? filterColors[f] : "var(--text-secondary)",
              background: active===f ? `${filterColors[f]}18` : "transparent",
              border: `1px solid ${active===f ? filterColors[f]+"40" : "var(--bg-border)"}`,
            }}>
            {f}
          </button>
        ))}
        <span className="ml-auto text-xs text-[var(--text-muted)] self-center" style={{fontFamily:"'JetBrains Mono',monospace"}}>
          {filtered.length} project{filtered.length!==1?"s":""}
        </span>
      </div>
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}} transition={{duration:0.25,delay:i*0.05}}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
