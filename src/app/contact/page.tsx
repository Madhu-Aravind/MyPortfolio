"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

type Status = "idle"|"sending"|"success"|"error";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => setForm({...form,[e.target.name]:e.target.value});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name:"", email:"", subject:"", message:"" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <SectionHeading label="get in touch" title="Contact Me" subtitle="Have a project idea or opportunity? Drop a message." />
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {[
            {icon:Mail,label:"Email",value:siteConfig.email,href:`mailto:${siteConfig.email}`},
            {icon:Github,label:"GitHub",value:"github.com/Madhu-Aravind",href:siteConfig.github},
            {icon:Linkedin,label:"LinkedIn",value:"linkedin.com/in/mudavath-aravind",href:siteConfig.linkedin},
            {icon:MapPin,label:"Location",value:siteConfig.location,href:null},
          ].map(({icon:Icon,label,value,href})=>(
            <motion.div key={label} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              className="glass-card p-4 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(99,102,241,0.1)"}}>
                <Icon size={15} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-0.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                    className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">{value}</a>
                ) : (
                  <p className="text-sm text-[var(--text-primary)]">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
          <div className="glass-card p-4">
            <p className="text-xs text-[var(--accent)] mb-2" style={{fontFamily:"'JetBrains Mono',monospace"}}>// response time</p>
            <p className="text-sm text-[var(--text-secondary)]">I typically reply within <span className="text-[var(--text-primary)] font-medium">24–48 hours</span>.</p>
          </div>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="lg:col-span-3 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>name *</label>
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="input-glass" />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>email *</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="input-glass" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-[var(--text-muted)] mb-1.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>subject</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry..." className="input-glass" />
          </div>
          <div>
            <label className="block text-xs text-[var(--text-muted)] mb-1.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>message *</label>
            <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className="input-glass resize-none" />
          </div>

          {status==="success" && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.2)",color:"#10b981"}}>
              <CheckCircle size={16} /> Message sent! I'll get back to you soon.
            </motion.div>
          )}
          {status==="error" && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",color:"#ef4444"}}>
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </motion.div>
          )}

          <button type="submit" disabled={status==="sending"}
            className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            {status==="sending" ? (
              <><span className="w-3.5 h-3.5 rounded-full border border-white border-t-transparent animate-spin" />Sending...</>
            ) : (
              <><Send size={14} />Send Message</>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
