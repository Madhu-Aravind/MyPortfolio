"use client";
// src/components/sections/HeroSection.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Circle } from "lucide-react";
import { siteConfig } from "@/lib/data";

const TYPING_STRINGS = [
  "Embedded Systems Engineer",
  "Firmware Developer",
  "Linux & RTOS Specialist",
  "Python Automation Expert",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPING_STRINGS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-[var(--accent)]">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--bg-border)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-muted)] mb-8"
          >
            <Circle size={7} className="text-[var(--accent)] fill-current animate-pulse" />
            {siteConfig.available ? "Available for work" : "Currently busy"}
            <span className="text-[var(--bg-border)]">|</span>
            <MapPin size={10} />
            {siteConfig.location}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-sm text-[var(--text-muted)] mb-3"
          >
            {"// Hello world, I'm"}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-[var(--text-primary)] leading-none mb-4"
          >
            {siteConfig.name}
            <span className="text-[var(--accent)]">.</span>
          </motion.h1>

          {/* Typing title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-mono mb-6 h-9"
          >
            <TypingText />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-10"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link href="/projects" className="btn-primary">
              View Projects
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="btn-outline"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-mono text-[var(--text-muted)]">find me →</span>
            {[
              { href: siteConfig.github, Icon: Github, label: "GitHub" },
              { href: siteConfig.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--bg-border)] hover:border-[var(--accent)] transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Terminal card - decorative */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-80 terminal-border rounded-lg bg-[var(--bg-card)] p-5 font-mono text-xs scanline"
        >
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[var(--text-muted)] text-xs">terminal</span>
          </div>
          <div className="space-y-2 text-[var(--text-muted)]">
            <p><span className="text-[var(--accent)]">$</span> whoami</p>
            <p className="text-[var(--text-primary)]">alex_mercer</p>
            <p><span className="text-[var(--accent)]">$</span> cat skills.txt</p>
            {["C/C++", "STM32", "FreeRTOS", "Linux", "Python", "CAN/SPI/I2C"].map((s) => (
              <p key={s} className="pl-2 text-[var(--accent)]/70">→ {s}</p>
            ))}
            <p><span className="text-[var(--accent)]">$</span> git log --oneline</p>
            <p className="text-purple-400">a3f1c2d feat: new RTOS scheduler</p>
            <p className="text-purple-400">8b2e9f1 fix: CAN frame parsing</p>
            <p className="text-purple-400">c1d4a88 chore: update CI pipeline</p>
            <p className="flex items-center gap-1">
              <span className="text-[var(--accent)]">$</span>
              <span className="animate-blink">█</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
