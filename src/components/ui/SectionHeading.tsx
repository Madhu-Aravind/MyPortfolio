"use client";
import { motion } from "framer-motion";

export function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mb-12">
      <div className="section-tag">{label}</div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-3" style={{fontFamily:"'Outfit',sans-serif",letterSpacing:"-0.02em"}}>{title}</h2>
      {subtitle && <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
