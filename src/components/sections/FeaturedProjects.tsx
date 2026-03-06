"use client";
// src/components/sections/FeaturedProjects.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-12">
        <SectionHeading
          label="featured work"
          title="Selected Projects"
          subtitle="A few things I've built and shipped."
        />
        <Link href="/projects" className="btn-outline hidden md:inline-flex">
          All Projects <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <Link href="/projects" className="btn-outline">
          All Projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
