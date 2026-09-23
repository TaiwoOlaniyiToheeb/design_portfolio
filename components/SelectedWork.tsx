import Link from "next/link";
import { getAllProjects } from "@/data/projects";
import ProjectGrid from "./ProjectGrid";

export default function SelectedWork() {
  const projects = getAllProjects();
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Selected Work</h2>
          <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
            A selection of recent projects across branding, social media design,
            event graphics, promotional materials, and digital content.
          </p>
        </div>
        <Link href="/work" className="focus-ring shrink-0 text-sm underline underline-offset-4">
          View all work
        </Link>
      </div>

      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
