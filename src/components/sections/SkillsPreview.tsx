"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

const TAGS = ["C / Embedded C","STM32F401","ARM Cortex-M4","Bare-Metal","HAL","UART","SPI","I2C","FreeRTOS","GPIO","ADC","Timers","ESP8266","LCD","GDB","ST-Link V2","Python","Bash","TypeScript","Angular","MATLAB","Simulink","Git","CI/CD"];

export function SkillsPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb" style={{width:"400px",height:"400px",background:"radial-gradient(circle,rgba(99,102,241,0.15),transparent)",top:"0",right:"0"}} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading label="expertise" title="Skills & Tools" subtitle="Hands-on proficiency from training and real-world projects." />
            <div className="space-y-4">
              {skills.slice(0,8).map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>
          <div>
            <div className="section-tag">tech stack</div>
            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-6" style={{fontFamily:"'Outfit',sans-serif"}}>Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag, i) => (
                <motion.span key={tag} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.03}}
                  className="skill-pill">{tag}</motion.span>
              ))}
            </div>
            <div className="glass-card p-5">
              <p className="text-xs font-mono text-[var(--text-muted)] mb-3">// current focus</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Deep-diving into <span className="text-[var(--accent)] font-semibold">STM32 RTOS</span>,
                automotive <span className="text-[var(--accent)] font-semibold">CAN Bus protocols</span>, and
                <span className="text-[var(--accent)] font-semibold"> Linux kernel drivers</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
