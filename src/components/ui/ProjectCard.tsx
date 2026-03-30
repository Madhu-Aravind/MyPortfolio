"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Activity, GitBranch, Layers, Monitor, Terminal, Star } from "lucide-react";
import { Project } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = { cpu:Cpu, activity:Activity, "git-branch":GitBranch, layers:Layers, monitor:Monitor, terminal:Terminal };
const catColors: Record<string,{bg:string,text:string}> = {
  Embedded:{bg:"rgba(16,185,129,0.1)",text:"#10b981"},
  Web:{bg:"rgba(6,182,212,0.1)",text:"#06b6d4"},
  Automation:{bg:"rgba(99,102,241,0.1)",text:"#6366f1"},
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = iconMap[project.icon] ?? Cpu;
  const cat = catColors[project.category];
  return (
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:index*0.08}}
      className="glass-card p-6 flex flex-col h-full">
      <div className="h-1 w-16 rounded-full mb-5" style={{background:`linear-gradient(90deg,${project.imageColor},transparent)`}} />
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl" style={{background:`${project.imageColor}18`,color:project.imageColor}}>
          <Icon size={18} />
        </div>
        <div className="flex items-center gap-2">
          {project.stars && (
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]" style={{fontFamily:"'JetBrains Mono',monospace"}}>
              <Star size={11} />{project.stars}
            </span>
          )}
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{background:cat.bg,color:cat.text}}>
            {project.category}
          </span>
        </div>
      </div>

      <h3 className="font-bold text-[var(--text-primary)] mb-2" style={{fontFamily:"'Outfit',sans-serif",fontSize:"16px"}}>{project.title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t)=>(
          <span key={t} className="skill-pill" style={{fontSize:"11px",padding:"2px 10px"}}>{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-[var(--bg-border)]">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="outline-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium">
          <Github size={12} /> Source
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium">
            <ExternalLink size={12} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
