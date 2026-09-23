import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article>
      <div className="relative aspect-[16/9] w-full bg-ink/5">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-site px-6 py-14 md:px-10">
        <Link href="/work" className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <ArrowLeft size={16} /> Back to work
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-base text-muted">{project.description}</p>

            {project.objectives && project.objectives.length > 0 && (
              <div className="mt-8">
                <h2 className="font-heading text-lg font-medium">Design Objectives</h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
                  {project.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-muted">Category</dt>
              <dd className="mt-1">{project.category}</dd>
            </div>
            <div>
              <dt className="text-muted">Year</dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            {project.client && (
              <div>
                <dt className="text-muted">Client</dt>
                <dd className="mt-1">{project.client}</dd>
              </div>
            )}
            <div>
              <dt className="text-muted">Tools</dt>
              <dd className="mt-1">{project.tools.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-muted">Deliverables</dt>
              <dd className="mt-1">{project.deliverables.join(", ")}</dd>
            </div>
          </dl>
        </div>

        {project.images.length > 1 && (
          <div className="mt-16">
            <h2 className="font-heading text-lg font-medium">Gallery</h2>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.images.map((img, i) => (
                <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink/5">
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link href={`/work/${previous.slug}`} className="focus-ring group flex flex-col gap-1">
            <span className="inline-flex items-center gap-2 text-xs text-muted"><ArrowLeft size={14} /> Previous Project</span>
            <span className="font-heading text-base group-hover:underline">{previous.title}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="focus-ring group flex flex-col gap-1 sm:text-right sm:items-end">
            <span className="inline-flex items-center gap-2 text-xs text-muted">Next Project <ArrowRight size={14} /></span>
            <span className="font-heading text-base group-hover:underline">{next.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
