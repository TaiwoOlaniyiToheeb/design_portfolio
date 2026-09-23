import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-t border-line bg-ink/[0.02]">
      <div className="mx-auto max-w-site px-6 py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            A designer with a problem-solving mindset.
          </h2>
          <div>
            <p className="text-sm text-muted sm:text-base">
              I&apos;m Taiwo Olaniyi Toheeb, a graphic designer focused on
              creating clear, engaging, and purposeful visual communication.
              My work covers promotional graphics, event materials, social
              media designs, branding assets, posters, flyers, and other
              digital and print materials.
            </p>
            <Link
              href="/about"
              className="focus-ring mt-6 inline-block rounded-full border border-line px-6 py-3 text-sm hover:bg-ink/5"
            >
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
