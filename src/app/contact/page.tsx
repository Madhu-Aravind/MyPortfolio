"use client";
// src/app/contact/page.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call — replace with real endpoint (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded bg-[var(--bg-card)] border border-[var(--bg-border)] text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <SectionHeading
        label="get in touch"
        title="Contact Me"
        subtitle="Have a project idea, a question, or just want to say hello? Drop a message."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              icon: Mail,
              label: "Email",
              value: siteConfig.email,
              href: `mailto:${siteConfig.email}`,
            },
            {
              icon: Github,
              label: "GitHub",
              value: "https://github.com/Madhu-Aravind",
              href: siteConfig.github,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "https://linkedin.com/in/m-aravind-m230759ee",
              href: siteConfig.linkedin,
            },
            {
              icon: MapPin,
              label: "Location",
              value: siteConfig.location,
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-lg border border-[var(--bg-border)] bg-[var(--bg-card)] terminal-border"
            >
              <div className="p-2 rounded bg-[var(--accent-muted)]">
                <Icon size={16} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs font-mono text-[var(--text-muted)] mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-mono"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-mono text-[var(--text-primary)]">{value}</p>
                )}
              </div>
            </motion.div>
          ))}

          <div className="p-5 rounded-lg border border-[var(--bg-border)] bg-[var(--bg-card)] font-mono text-xs text-[var(--text-muted)]">
            <p className="text-[var(--accent)] mb-2">{"// response time"}</p>
            <p>I typically reply within <span className="text-[var(--text-primary)]">24–48 hours</span>.</p>
            <p className="mt-1">Available for freelance & consulting work.</p>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                name <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Madhu Aravind"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                email <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="aravind@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, ..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
              message <span className="text-[var(--accent)]">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or question..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 p-3 rounded bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-mono"
            >
              <CheckCircle size={16} />
              Message sent! I'll get back to you soon.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono"
            >
              <AlertCircle size={16} />
              Something went wrong. Please try again or email directly.
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <span className="animate-spin rounded-full h-3.5 w-3.5 border border-current border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
