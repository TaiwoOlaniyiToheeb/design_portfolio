"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link href={`/work/${project.slug}`} className="focus-ring group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink/5">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-base font-medium text-ink">{project.title}</h3>
            <p className="text-sm text-muted">{project.category}</p>
          </div>
          <span className="shrink-0 text-sm text-muted">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
