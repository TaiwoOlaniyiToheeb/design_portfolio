import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Taiwo Olaniyi Toheeb, a graphic designer creating clear and purposeful visual communication.",
};

const skills = [
  "Layout & Composition",
  "Typography",
  "Colour Theory",
  "Brand Consistency",
  "Print Preparation",
  "Social Media Formats",
];

const tools = ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:px-10">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">
        A designer with a problem-solving mindset.
      </h1>

      <div className="mt-8 grid gap-12 md:grid-cols-3">
        <div className="space-y-5 text-sm text-muted sm:text-base md:col-span-2">
          <p>
            I&apos;m Taiwo Olaniyi Toheeb, a graphic designer focused on
            creating clear, engaging, and purposeful visual communication.
          </p>
          <p>
            My work covers promotional graphics, event materials, social
            media designs, branding assets, posters, flyers, and other
            digital and print materials.
          </p>
          <p>
            I approach design with attention to composition, typography,
            visual hierarchy, colour, consistency, and the purpose behind
            each piece. Whether the goal is promoting an event, communicating
            an idea, presenting a business, or building a visual identity, I
            aim to create designs that are both visually appealing and
            effective.
          </p>

          <Link href="/contact" className="focus-ring inline-block rounded-full bg-ink px-6 py-3 text-sm text-paper hover:opacity-85">
            Start a Project
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-base font-medium">Skills</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-base font-medium">Design Tools</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
