export interface Project {
  slug: string;
  title: string;
  category: Category;
  year: number;
  client?: string;
  description: string;
  objectives?: string[];
  tools: string[];
  deliverables: string[];
  coverImage: string;
  images: string[];
  featured?: boolean;
  isPlaceholder?: boolean;
}

export type Category =
  | "Branding"
  | "Flyers"
  | "Social Media"
  | "Event Design"
  | "Posters"
  | "Marketing"
  | "Invitations"
  | "Print Design"
  | "Other";

export const CATEGORIES: Category[] = [
  "Branding",
  "Flyers",
  "Social Media",
  "Event Design",
  "Posters",
  "Marketing",
  "Invitations",
  "Print Design",
  "Other",
];
