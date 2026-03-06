"use client";
// src/app/not-found.tsx
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-mono text-[var(--accent)] text-8xl font-bold mb-4">404</div>
        <p className="font-mono text-[var(--text-muted)] mb-2">
          <span className="text-red-400">Error:</span> Page not found
        </p>
        <p className="text-[var(--text-secondary)] mb-8">
          The resource you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          <Terminal size={14} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
