"use client";
// src/app/about/page.tsx
import { motion } from "framer-motion";
import { MapPin, Calendar, Download, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { siteConfig, skills, experience, education } from "@/lib/data";

const achievements = [
  "One-month plant training on Renewable & Non-Renewable Energy at CAPE Institute of Technology",
  "Completed industrial automation training using PLC and SCADA Systems",
  "Certificate of appreciation for organizing 'Junkyard Electronics' during Ekarikthin 2018",
  "Participated in All India Inter NIT Cricket Tournament at NIT-Calicut",
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      {/* Bio section */}
      <div className="grid lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-3">
          <SectionHeading label="about me" title="Hello, I'm Aravind." />
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              I'm an entry-level Embedded Systems Engineer based in Hyderabad with a strong foundation
              in ARM Cortex-M based STM32 microcontroller development, peripheral integration, and
              real-time firmware design.
            </p>
            <p>
              I hold an M.Tech in Instrumentation and Control Systems from NIT Calicut and a B.Tech
              in Electrical and Electronics Engineering from NIT Nagaland. My academic background
              bridges control theory and embedded hardware — giving me a unique perspective on
              hardware-software co-design.
            </p>
            <p>
              During my internship at Tata Elxsi, I built cross-platform test automation frameworks
              for VS Code extensions and contributed to Angular-based front-end development. I'm
              currently deepening my embedded expertise at Kernel Masters, Hyderabad — working hands-on
              with STM32 bare-metal programming, RTOS, and communication protocols.
            </p>
            <p>
              I'm passionate about building reliable, efficient embedded solutions — from register-level
              GPIO configuration to Wi-Fi integrated IoT systems.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-mono">
              <MapPin size={14} className="text-[var(--accent)]" />
              {siteConfig.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-mono">
              <Calendar size={14} className="text-[var(--accent)]" />
              M.Tech NIT Calicut 2025
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
        <SectionHeading label="career" title="Experience & Training" />
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
              <div className="absolute left-0 top-1.5 bottom-0 w-px bg-[var(--bg-border)]" />
              <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-lg p-6 terminal-border">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)]">{job.role}</h3>
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
      <div className="mb-24">
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

      {/* Achievements */}
      <div>
        <SectionHeading label="achievements" title="Certifications & Achievements" />
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 p-4 rounded-lg border border-[var(--bg-border)] bg-[var(--bg-card)]"
            >
              <Award size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
