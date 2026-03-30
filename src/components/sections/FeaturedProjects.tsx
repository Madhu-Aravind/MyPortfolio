"use client";
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
        <SectionHeading label="featured work" title="Selected Projects" subtitle="Real projects built during training and internship." />
        <Link href="/projects" className="outline-btn hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium">
          All Projects <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
      <div className="mt-8 flex justify-center md:hidden">
        <Link href="/projects" className="outline-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium">
          All Projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
