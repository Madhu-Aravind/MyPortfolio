"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";

const TITLES = ["Embedded Systems Engineer","STM32 Firmware Developer","RTOS & Bare-Metal Programmer","Control Systems & IoT Engineer"];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = TITLES[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    else if (!deleting && displayed.length === current.length) t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0) t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    else { setDeleting(false); setIndex((i) => (i + 1) % TITLES.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);
  return <span className="gradient-text">{displayed}<span className="animate-pulse">|</span></span>;
}

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } });

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="orb" style={{width:"600px",height:"600px",background:"radial-gradient(circle,rgba(99,102,241,0.25),transparent)",top:"-150px",right:"-100px"}} />
      <div className="orb" style={{width:"400px",height:"400px",background:"radial-gradient(circle,rgba(139,92,246,0.2),transparent)",bottom:"50px",left:"-100px"}} />
      <div className="orb" style={{width:"300px",height:"300px",background:"radial-gradient(circle,rgba(6,182,212,0.15),transparent)",top:"40%",left:"40%"}} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0)}>
            <div className="section-tag">
              <Sparkles size={10} />
              {siteConfig.available ? "Available for opportunities" : "Currently busy"}
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-3 text-sm text-[var(--text-muted)]" style={{fontFamily:"'JetBrains Mono',monospace"}}>
            <MapPin size={12} className="text-[var(--accent)]" />
            {siteConfig.location}
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-extrabold leading-none mb-4" style={{fontFamily:"'Outfit',sans-serif",letterSpacing:"-0.02em"}}>
            <span className="text-[var(--text-primary)]">Hello, I'm</span>
            <br />
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="text-xl md:text-2xl mb-6 h-9 font-medium" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"18px"}}>
            <TypingText />
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-10">
            {siteConfig.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-3 mb-12">
            <Link href="/projects" className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              View Projects <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              Get in Touch
            </Link>
            <a href="/resume.pdf" download className="outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              <Download size={14} /> Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3">
            <span className="text-xs text-[var(--text-muted)]" style={{fontFamily:"'JetBrains Mono',monospace"}}>connect →</span>
            {[{href:siteConfig.github,Icon:Github,label:"GitHub"},{href:siteConfig.linkedin,Icon:Linkedin,label:"LinkedIn"},{href:`mailto:${siteConfig.email}`,Icon:Mail,label:"Email"}].map(({href,Icon,label})=>(
              <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200">
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating stats card */}
        <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.6}}
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-72">
          <div className="glass-card p-6 space-y-4">
            <p className="text-xs font-mono text-[var(--text-muted)] mb-4">// quick stats</p>
            {[
              {label:"M.Tech",value:"NIT Calicut",color:"#6366f1"},
              {label:"Internship",value:"Tata Elxsi",color:"#8b5cf6"},
              {label:"Training",value:"Kernel Masters",color:"#06b6d4"},
              {label:"Focus",value:"STM32 & RTOS",color:"#10b981"},
              {label:"Status",value:"Open to work",color:"#f59e0b"},
            ].map(({label,value,color})=>(
              <div key={label} className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]" style={{fontFamily:"'JetBrains Mono',monospace"}}>{label}</span>
                <span className="text-xs font-semibold" style={{color}}>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
