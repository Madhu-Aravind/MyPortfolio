"use client";
// src/components/ui/SectionHeading.tsx
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="section-label mb-3">{`// ${label}`}</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
