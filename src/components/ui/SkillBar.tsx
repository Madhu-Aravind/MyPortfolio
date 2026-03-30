"use client";
import { motion } from "framer-motion";
import { Skill } from "@/lib/types";

export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.4,delay:index*0.05}} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[var(--text-secondary)]" style={{fontFamily:"'Inter',sans-serif"}}>{skill.name}</span>
        <span className="text-xs font-mono text-[var(--accent)]">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{background:"var(--bg-border)"}}>
        <motion.div initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}}
          transition={{duration:1,delay:index*0.05+0.2,ease:"easeOut"}}
          className="h-full rounded-full" style={{background:"linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4)"}} />
      </div>
    </motion.div>
  );
}
