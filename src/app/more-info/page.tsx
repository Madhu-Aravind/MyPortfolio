"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Unlock, Eye, EyeOff, LogOut, Shield,
  FileText, Phone, Award, BookOpen, Star, AlertCircle
} from "lucide-react";

// ══════════════════════════════════════════════════════
//  🔐 CHANGE YOUR CREDENTIALS HERE
//  Open this file and update USERNAME and PASSWORD below
// ══════════════════════════════════════════════════════
const SECRET_USERNAME = "aravind";
const SECRET_PASSWORD = "Madhu@3151";
// ══════════════════════════════════════════════════════

const STORAGE_KEY = "ma_more_info_auth";

export default function MoreInfoPage() {
  const [authed, setAuthed]       = useState(false);
  const [checking, setChecking]   = useState(true);
  const [username, setUsername]   = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [error, setError]         = useState("");
  const [shaking, setShaking]     = useState(false);

  // Check if already logged in
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") setAuthed(true);
    setChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === SECRET_USERNAME && password === SECRET_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
      setError("");
    } else {
      setError("Invalid credentials. Access denied.");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setUsername("");
    setPassword("");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
      </div>
    );
  }

  // ── LOGIN SCREEN ──
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-16">
        {/* Background orbs */}
        <div className="orb" style={{ width:"500px", height:"500px", background:"radial-gradient(circle,rgba(99,102,241,0.15),transparent)", top:"-100px", right:"-100px" }} />
        <div className="orb" style={{ width:"400px", height:"400px", background:"radial-gradient(circle,rgba(139,92,246,0.1),transparent)", bottom:"0", left:"-100px" }} />

        <motion.div
          animate={shaking ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            {/* Lock icon header */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 8px 32px rgba(99,102,241,0.4)" }}>
                <Lock size={28} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "'Outfit',sans-serif" }}>
                Restricted Access
              </h1>
              <p className="text-sm text-[var(--text-muted)] text-center"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                // credentials required to proceed
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(""); }}
                  placeholder="enter username"
                  autoComplete="username"
                  required
                  className="input-glass"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(""); }}
                    placeholder="enter password"
                    autoComplete="current-password"
                    required
                    className="input-glass pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Error message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-xs"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444", fontFamily: "'JetBrains Mono',monospace" }}
                  >
                    <AlertCircle size={13} />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="glow-btn w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold mt-2"
              >
                <Shield size={15} />
                Authenticate
              </button>
            </form>

            <p className="text-center text-xs text-[var(--text-muted)] mt-6"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}>
              // this section is private
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // ── PROTECTED CONTENT ──
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-12"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(99,102,241,0.15)" }}>
              <Unlock size={12} className="text-[var(--accent)]" />
            </div>
            <span className="text-xs text-[var(--accent)]"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}>
              // access granted
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)]"
            style={{ fontFamily: "'Outfit',sans-serif" }}>
            More Info
          </h1>
          <p className="text-[var(--text-secondary)] mt-1">
            Private section — visible only to you.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="outline-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
        >
          <LogOut size={14} />
          Logout
        </button>
      </motion.div>

      {/* ════════════════════════════════════════
          📝 ADD YOUR PRIVATE CONTENT BELOW HERE
          You can add: certificates, private notes,
          reference links, personal contacts, etc.
      ════════════════════════════════════════ */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Card 1: Personal Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(99,102,241,0.15)" }}>
              <Phone size={16} className="text-[var(--accent)]" />
            </div>
            <h2 className="font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              Personal Contacts
            </h2>
          </div>
          <div className="space-y-3 text-sm text-[var(--text-secondary)]">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px" }}>mobile</span>
              <span>+91-70368xxxxx</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px" }}>personal email</span>
              <span>madhu.aravind@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px" }}>location</span>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(16,185,129,0.15)" }}>
              <Award size={16} style={{ color: "#10b981" }} />
            </div>
            <h2 className="font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              Certificates
            </h2>
          </div>
          <div className="space-y-2">
            {[
              "Embedded Systems Training — Kernel Masters",
              "Industrial Automation — PLC & SCADA",
              "Renewable Energy — CAPE Institute",
            ].map((cert, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span style={{ color: "#10b981", marginTop: "2px" }}>▹</span>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Private Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(245,158,11,0.15)" }}>
              <FileText size={16} style={{ color: "#f59e0b" }} />
            </div>
            <h2 className="font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              Private Notes
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Add your private notes, reminders, or important information here. Only visible after login.
          </p>
          <div className="mt-3 p-3 rounded-xl text-xs"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", color: "#f59e0b", fontFamily: "'JetBrains Mono',monospace" }}>
            // edit src/app/more-info/page.tsx to add your content
          </div>
        </motion.div>

        {/* Card 4: Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(6,182,212,0.15)" }}>
              <BookOpen size={16} style={{ color: "#06b6d4" }} />
            </div>
            <h2 className="font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              Private Resources
            </h2>
          </div>
          <div className="space-y-2">
            {[
              { label: "NIT Calicut M.Tech Thesis", url: "#" },
              { label: "Tata Elxsi Internship Letter", url: "#" },
              { label: "Kernel Masters Certificate", url: "#" },
            ].map((item, i) => (
              <a key={i} href={item.url}
                className="flex items-center gap-2 text-sm py-1.5 px-3 rounded-lg transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#06b6d4")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                <Star size={11} style={{ color: "#06b6d4" }} />
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-4 rounded-xl text-xs text-center"
        style={{
          background: "rgba(99,102,241,0.05)",
          border: "1px solid rgba(99,102,241,0.1)",
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        // logged in as <span style={{ color: "var(--accent)" }}>{SECRET_USERNAME}</span> · this page is not indexed by Google · <span style={{ color: "var(--accent)" }}>private</span>
      </motion.div>
    </div>
  );
}
