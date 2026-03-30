import Link from "next/link";
import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--bg-border)] py-8 mt-20 glass">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md glow-btn flex items-center justify-center">
            <Zap size={10} className="text-white" />
          </div>
          <span className="text-sm text-[var(--text-muted)]">
            <span className="gradient-text font-semibold">{siteConfig.name}</span> — Built with Next.js
          </span>
        </div>
        <div className="flex items-center gap-2">
          {[{href:siteConfig.github,Icon:Github},{href:siteConfig.linkedin,Icon:Linkedin},{href:`mailto:${siteConfig.email}`,Icon:Mail}].map(({href,Icon},i)=>(
            <a key={i} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
