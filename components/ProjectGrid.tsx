"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project, CATEGORIES } from "@/types/project";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";

export default function ProjectGrid({
  projects,
  showSearch = false,
}: {
  projects: Project[];
  showSearch?: boolean;
}) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = active === "All" || p.category === active;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [projects, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
        {showSearch && (
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects by title"
            className="focus-ring w-full rounded-full border border-line bg-transparent px-4 py-2 text-sm md:w-64"
          />
        )}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}
