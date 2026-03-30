"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg glow-btn flex items-center justify-center">
            <Zap size={14} className="text-white" />
          </div>
          <span className="font-bold gradient-text" style={{fontFamily:"'Outfit',sans-serif",fontSize:"15px"}}>M Aravind</span>
        </Link>

        {/* Desktop Capsule Nav */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl"
          style={{
            background: "rgba(8, 10, 25, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className="relative px-4 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer"
                  style={{
                    color: isActive ? "#fff" : "rgba(148,163,184,0.9)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  whileHover={{ color: "#fff" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        boxShadow: "0 0 16px rgba(99,102,241,0.5)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0"
                      style={{ background: "rgba(99,102,241,0.12)" }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-secondary)]"
          style={{ background:"rgba(8,10,25,0.85)", border:"1px solid rgba(99,102,241,0.25)" }}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-auto rounded-2xl p-2"
            style={{
              background: "rgba(8,10,25,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            {navItems.map((item, i) => (
              <motion.div key={item.href} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                <Link href={item.href}
                  className={cn("block px-4 py-2.5 text-sm rounded-xl mb-1 transition-all duration-200",
                    pathname === item.href
                      ? "text-white font-medium"
                      : "text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.1)]"
                  )}
                  style={pathname === item.href ? { background: "linear-gradient(135deg,#6366f1,#8b5cf6)" } : {}}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
