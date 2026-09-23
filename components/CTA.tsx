import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-site px-6 py-20 text-center md:px-10">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
          Whether you need a flyer, social media design, event graphic,
          branding asset, or something completely different, let&apos;s
          discuss your project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="focus-ring rounded-full bg-ink px-6 py-3 text-sm text-paper hover:opacity-85">
            Start a Project
          </Link>
          <Link href="/contact" className="focus-ring rounded-full border border-line px-6 py-3 text-sm hover:bg-ink/5">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
