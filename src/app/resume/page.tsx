"use client";
// src/app/resume/page.tsx
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, experience, education, skills } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <SectionHeading label="resume" title="Curriculum Vitae" subtitle="Full experience, education, and technical skill set." />
        <div className="flex gap-3 shrink-0">
          <a href="/resume.pdf" download className="btn-primary text-sm">
            <Download size={14} /> Download PDF
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
            <ExternalLink size={14} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="border border-[var(--bg-border)] rounded-xl bg-[var(--bg-card)] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[var(--bg-border)] px-8 py-6">
          <h1 className="text-2xl font-display font-bold text-[var(--text-primary)]">{siteConfig.name}</h1>
          <p className="text-[var(--accent)] font-mono text-sm mt-1">{siteConfig.title}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-[var(--text-muted)]">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.location}</span>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              github.com/Madhu-Aravind
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="px-8 py-8 space-y-10">
          {/* Summary */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-4">Profile</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
              Entry-level embedded systems engineer with hands-on experience in ARM Cortex-M based STM32
              microcontroller development, peripheral integration, and real-time firmware design. Proficient
              in bare-metal and HAL programming, communication protocols (UART, SPI, I2C), and hardware-software
              debugging. Passionate about building reliable and efficient embedded solutions.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-6">Experience & Training</h2>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)]">{job.role}</h3>
                      <p className="text-sm text-[var(--accent)] font-mono">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">{job.period}</span>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="text-[var(--accent)] shrink-0 mt-0.5">▹</span>{p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-6">Education</h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-wrap justify-between gap-2">
                  <div>
                    <p className="font-display font-semibold text-[var(--text-primary)] text-sm">{edu.degree}</p>
                    <p className="text-[var(--accent)] text-xs font-mono">{edu.school}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-6">Technical Skills</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { cat: "Embedded", label: "Embedded & Hardware" },
                { cat: "Software", label: "Software & Tools" },
                { cat: "Web", label: "Web & Frameworks" },
                { cat: "Automation", label: "Automation & Testing" },
              ].map(({ cat, label }) => {
                const catSkills = skills.filter((s) => s.category === cat);
                if (!catSkills.length) return null;
                return (
                  <div key={cat}>
                    <p className="text-xs font-mono text-[var(--text-muted)] mb-2">{label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {catSkills.map((s) => (
                        <span key={s.name} className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--bg-border)] text-[var(--text-secondary)]">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-4">Achievements</h2>
            <ul className="space-y-2">
              {[
                "Plant training on Renewable & Non-Renewable Energy at CAPE Institute of Technology",
                "Industrial automation training using PLC and SCADA Systems",
                "Certificate of appreciation for organizing 'Junkyard Electronics' — Ekarikthin 2018",
                "Participated in All India Inter NIT Cricket Tournament at NIT-Calicut",
              ].map((a, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] shrink-0">▹</span>{a}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
