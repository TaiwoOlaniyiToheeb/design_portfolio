import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse graphic design projects across branding, social media, event design, posters, and print.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:px-10">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">All Work</h1>
      <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
        Every project, filterable by category. New projects added to the data
        source appear here automatically.
      </p>
      <div className="mt-10">
        <ProjectGrid projects={projects} showSearch />
      </div>
    </section>
  );
}
