import { Project } from "@/types/project";

/**
 * ─────────────────────────────────────────────────────────────
 * PROJECT DATA SOURCE
 * ─────────────────────────────────────────────────────────────
 * This is the single source of truth for every project shown on
 * the site (homepage, /work, filters, and individual project
 * pages). To add a new project:
 *
 *   1. Create a folder in /public/projects/<your-project-slug>/
 *   2. Add your images there (cover + gallery images)
 *   3. Copy one of the objects below and edit the fields
 *   4. git add . && git commit -m "add project" && git push
 *
 * Nothing else needs to change — the grid, filters, and the
 * dynamic /work/[slug] page all read from this array.
 * ─────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: "nasfat-youth-programme",
    title: "NASFAT Youth Programme",
    category: "Event Design",
    year: 2026,
    client: "NASFAT Itoki Lemode Youth Wing",
    description:
      "Promotional materials designed for a youth-focused programme, built to feel energetic and easy to read across print and social formats.",
    objectives: [
      "Create a flyer that reads clearly at both print size and thumbnail size on social media",
      "Establish a simple visual system that could be reused across the programme's announcements",
    ],
    tools: ["Canva", "Adobe Photoshop"],
    deliverables: ["Event Flyer", "Social Media Graphics"],
    coverImage: "/projects/sample-one/anti_copy.jpg",
    images: [
      "/projects/sample-one/anti_copy.jpg",
      "/projects/sample-one/design-1.svg",
      "/projects/sample-one/design-2.svg",
    ],
    featured: true,
    
  },
  {
    slug: "lumen-coffee-branding",
    title: "Lumen Coffee Branding",
    category: "Branding",
    year: 2026,
    client: "Lumen Coffee Co.",
    description:
      "A warm, minimal identity system for an independent coffee brand, covering logo, mark, and a small set of brand applications.",
    objectives: [
      "Design a mark that works at small sizes (cup sleeves, packaging)",
      "Keep the palette warm but restrained",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    deliverables: ["Logo Suite", "Brand Guidelines", "Packaging Concepts"],
    coverImage: "/projects/sample-two/anti_copy.jpg",
    images: ["/projects/sample-two/cover.svg", "/projects/sample-two/design-1.svg"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "halcyon-festival-poster",
    title: "Halcyon Festival Poster",
    category: "Posters",
    year: 2025,
    client: "Halcyon Arts Festival",
    description:
      "A poster series for an annual arts festival, designed to work as a standalone print piece and as a cropped social announcement.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    deliverables: ["Poster (A2)", "Poster (A3)", "Social Crop"],
    coverImage: "/projects/sample-three/anti_copy.jpg",
    images: ["/projects/sample-three/cover.svg", "/projects/sample-three/design-1.svg"],
    featured: false,
    isPlaceholder: true,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const previous = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { previous, next };
}
