"use client";
// src/components/sections/SkillsPreview.tsx
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

const TAGS = ["C/C++", "STM32", "FreeRTOS", "CAN Bus", "Linux Kernel", "Python", "pytest", "Docker", "GitHub Actions", "Next.js", "TypeScript", "OpenOCD", "GDB", "Device Tree", "SPI/I2C/UART"];

export function SkillsPreview() {
  const topSkills = skills.slice(0, 8);

  return (
    <section className="bg-[var(--bg-card)] border-y border-[var(--bg-border)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              label="expertise"
              title="Skills & Tools"
              subtitle="My primary toolbox for embedded systems and software development."
            />
            <div className="space-y-4">
              {topSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-3">{"// tech tags"}</p>
            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 text-sm font-mono rounded border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-lg border border-[var(--bg-border)] bg-[var(--bg)]/50 font-mono text-sm">
              <p className="text-[var(--text-muted)] mb-2">{"// current focus"}</p>
              <p className="text-[var(--text-primary)]">
                Automotive-grade AUTOSAR firmware,
                <span className="text-[var(--accent)]"> hardware-in-the-loop testing</span>, and
                <span className="text-[var(--accent)]"> Rust for embedded</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
