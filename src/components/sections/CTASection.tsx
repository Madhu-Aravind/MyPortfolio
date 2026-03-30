"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
        <div className="orb" style={{width:"400px",height:"400px",background:"radial-gradient(circle,rgba(99,102,241,0.12),transparent)",top:"-100px",left:"50%",transform:"translateX(-50%)"}} />
        <div className="relative z-10">
          <div className="section-tag mx-auto w-fit">let's connect</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4" style={{fontFamily:"'Outfit',sans-serif",letterSpacing:"-0.02em"}}>
            Open to <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
            Looking for embedded systems roles, internships, or collaborations. Let's build something great together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              <Mail size={15} /> Get in Touch <ArrowRight size={15} />
            </Link>
            <Link href="/resume" className="outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              View Resume
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
