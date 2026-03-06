"use client";
// src/app/about/page.tsx
import { motion } from "framer-motion";
import { MapPin, Calendar, Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { siteConfig, skills, experience, education } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      {/* Bio section */}
      <div className="grid lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-3">
          <SectionHeading
            label="about me"
            title="Hello, I'm Alex."
            subtitle=""
          />
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              I'm an Embedded Systems Engineer based in Berlin with 7+ years of experience writing
              firmware for ARM Cortex-M microcontrollers — primarily STM32 — and building the tooling
              that surrounds it: CI/CD pipelines, test frameworks, and Linux BSPs.
            </p>
            <p>
              My work spans from bare-metal register manipulation and RTOS kernel internals to
              Python-based automated test systems and web dashboards for embedded telemetry. I believe
              good firmware engineering is inseparable from good software engineering.
            </p>
            <p>
              When I'm not debugging a DMA interrupt or writing pytest fixtures for hardware, I'm
              exploring Rust for embedded, contributing to open-source tooling, or writing about
              firmware patterns on my blog.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-mono">
              <MapPin size={14} className="text-[var(--accent)]" />
              {siteConfig.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-mono">
              <Calendar size={14} className="text-[var(--accent)]" />
              7+ years experience
            </div>
          </div>

          <div className="mt-8">
            <a href="/resume.pdf" download className="btn-primary">
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-2">
          <p className="section-label mb-4">{"// skill levels"}</p>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-24">
        <SectionHeading label="career" title="Work Experience" />
        <div className="space-y-1">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-6 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-1.5 bottom-0 w-px bg-[var(--bg-border)]" />
              <div
                className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />

              <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-lg p-6 terminal-border">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)]">
                      {job.role}
                    </h3>
                    <p className="text-[var(--accent)] text-sm font-mono">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-[var(--text-muted)]">{job.period}</p>
                    <p className="text-xs font-mono text-[var(--text-muted)]">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-sm text-[var(--text-secondary)] flex gap-2">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionHeading label="education" title="Academic Background" />
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-[var(--bg-border)] bg-[var(--bg-card)] terminal-border"
            >
              <p className="font-display font-semibold text-[var(--text-primary)] mb-1">{edu.degree}</p>
              <p className="text-[var(--accent)] text-sm font-mono">{edu.school}</p>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
