"use client";
// src/components/sections/CTASection.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-10 md:p-16 text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,255,136,0.05) 0%, transparent 70%)",
          }}
        />
        <p className="section-label mb-4">{"// let's build"}</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
          Got a project in mind?
        </h2>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
          Whether it's bare-metal firmware, a test automation system, or something in between —
          I'd love to hear about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight size={15} />
          </Link>
          <Link href="/resume" className="btn-outline">
            View Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
