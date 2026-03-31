"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import Image from "next/image";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [moreInfoAuthed, setMoreInfoAuthed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMoreInfoAuthed(localStorage.getItem("ma_more_info_auth") === "true");
  }, [pathname]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden"
            style={{ background: "rgba(8,10,25,0.9)", border: "1px solid rgba(99,102,241,0.3)", padding: "4px" }}>
            <Image src="/logo.png" alt="M Aravind Logo" fill className="object-contain p-1" priority/>
          </div>
          <div className="flex flex-col">
            <span className="font-bold gradient-text" style={{ fontFamily: "'Outfit',sans-serif", fontSize: "14px" }}>
              M Aravind
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--text-muted)", fontSize: "9px", letterSpacing: "2px" }}>
              EMBEDDED ENGINEER
            </span>
          </div>
        </Link>

        {/* Capsule Nav */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl"
          style={{
            background: "rgba(8,10,25,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
          {navItems.map((item) => {
            const isActive   = pathname === item.href;
            const isPrivate  = item.href === "/more-info";
            const isLocked   = isPrivate && !moreInfoAuthed;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className="relative px-4 py-1.5 rounded-xl text-sm font-medium cursor-pointer select-none flex items-center gap-1.5"
                  style={{ color: isActive ? "#fff" : isLocked ? "rgba(148,163,184,0.5)" : "rgba(148,163,184,0.9)", fontFamily: "'Inter',sans-serif" }}
                  whileHover={{ color: isLocked ? "rgba(245,158,11,0.9)" : "#fff" }}
                >
                  {isActive && (
                    <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 0 16px rgba(99,102,241,0.5)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <motion.div className="absolute inset-0 rounded-xl opacity-0"
                      style={{ background: isLocked ? "rgba(245,158,11,0.08)" : "rgba(99,102,241,0.12)" }}
                      whileHover={{ opacity: 1 }} transition={{ duration: 0.15 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {isLocked && <Lock size={10} className="relative z-10" style={{ color: "#f59e0b" }}/>}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(8,10,25,0.85)", border: "1px solid rgba(99,102,241,0.25)", color: "var(--text-secondary)" }}>
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            className="md:hidden mt-2 rounded-2xl p-2"
            style={{ background:"rgba(8,10,25,0.95)", backdropFilter:"blur(20px)", border:"1px solid rgba(99,102,241,0.25)" }}>
            {navItems.map((item, i) => {
              const isPrivate = item.href === "/more-info";
              const isLocked  = isPrivate && !moreInfoAuthed;
              return (
                <motion.div key={item.href} initial={{ x:-10, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay: i*0.05 }}>
                  <Link href={item.href}
                    className={cn("flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl mb-1 transition-all",
                      pathname===item.href ? "text-white font-medium" : "text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.1)]")}
                    style={pathname===item.href ? { background:"linear-gradient(135deg,#6366f1,#8b5cf6)" } : {}}>
                    {item.label}
                    {isLocked && <Lock size={10} style={{ color:"#f59e0b" }}/>}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
