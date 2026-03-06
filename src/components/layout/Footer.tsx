// src/components/layout/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--bg-border)] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm">
          <Terminal size={14} className="text-[var(--accent)]" />
          <span className="text-[var(--text-muted)]">
            Built with Next.js + Framer Motion —{" "}
            <span className="text-[var(--accent)]">{siteConfig.name}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
            <Github size={18} />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href={`mailto:${siteConfig.email}`}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
