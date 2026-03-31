"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X, MapPin, Mail, Github, Linkedin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { useThemeContext } from "./ThemeProvider";
import { siteConfig } from "@/lib/data";

export function FloatingControls() {
  const { theme, toggleTheme } = useThemeContext();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {profileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
              onClick={() => setProfileOpen(false)}
            />

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed bottom-28 right-6 z-50 w-72 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(8,10,25,0.97)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* Header with gradient + profile photo */}
              <div className="relative h-20" style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed,#0891b2)" }}>
                <button onClick={() => setProfileOpen(false)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  <X size={12} />
                </button>
              </div>

              {/* ── PROFILE PHOTO ──
                  📌 TO REPLACE WITH YOUR REAL PHOTO:
                  1. Add your photo to: public/profile.jpg  (or .png)
                  2. Change src="/profile-dummy.svg" → src="/profile.jpg"
                  That's it! ✅
              -->*/}
              <div className="absolute left-5 top-10 w-20 h-20 rounded-2xl overflow-hidden"
                style={{ border: "3px solid rgba(8,10,25,0.9)", boxShadow: "0 8px 24px rgba(99,102,241,0.4)" }}>
                <Image
                  src="/profile.jpg"
                  alt="Profile Photo"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="pt-14 pb-5 px-5">
                <div className="mb-4">
                  <h3 className="font-bold text-white" style={{ fontFamily: "'Outfit',sans-serif", fontSize: "16px" }}>
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "#a78bfa", fontFamily: "'JetBrains Mono',monospace" }}>
                    Embedded Systems Engineer
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Available for work</span>
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-2.5 mb-4">
                  {[
                    { Icon: MapPin,       value: siteConfig.location },
                    { Icon: Mail,         value: siteConfig.email },
                    { Icon: GraduationCap,value: "M.Tech — NIT Calicut" },
                    { Icon: Briefcase,    value: "Ex-Intern @ Tata Elxsi" },
                  ].map(({ Icon, value }) => (
                    <div key={value} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(99,102,241,0.15)" }}>
                        <Icon size={11} style={{ color: "#818cf8" }} />
                      </div>
                      <span className="text-xs text-slate-300 truncate">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-2 pt-4" style={{ borderTop: "1px solid rgba(99,102,241,0.15)" }}>
                  {[
                    { href: siteConfig.github,   Icon: Github,   label: "GitHub" },
                    { href: siteConfig.linkedin,  Icon: Linkedin, label: "LinkedIn" },
                    { href: `mailto:${siteConfig.email}`, Icon: Mail, label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-white transition-all"
                      style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.2)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(99,102,241,0.3)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(99,102,241,0.15)")}>
                      <Icon size={11} /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── FLOATING DOCK bottom-right ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-center">

        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors"
          style={{
            background: "rgba(8,10,25,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.3)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            color: theme === "dark" ? "#fbbf24" : "#6366f1",
          }}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sun size={16} />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Moon size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Profile photo button */}
        <motion.button
          onClick={() => setProfileOpen(!profileOpen)}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-2xl overflow-hidden"
          style={{
            border: profileOpen ? "2px solid #6366f1" : "2px solid rgba(99,102,241,0.3)",
            boxShadow: profileOpen ? "0 8px 24px rgba(99,102,241,0.5)" : "0 8px 24px rgba(0,0,0,0.4)",
          }}
          aria-label="View profile"
          title="View profile card"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={44}
            height={44}
            className="object-cover w-full h-full"
          />
        </motion.button>

      </div>
    </>
  );
}
