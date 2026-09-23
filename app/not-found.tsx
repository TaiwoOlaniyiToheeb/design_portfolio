import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-site flex-col items-center px-6 py-32 text-center md:px-10">
      <p className="font-heading text-6xl font-semibold">404</p>
      <p className="mt-4 text-muted">This page couldn&apos;t be found.</p>
      <Link href="/" className="focus-ring mt-8 rounded-full bg-ink px-6 py-3 text-sm text-paper hover:opacity-85">
        Back to Home
      </Link>
    </section>
  );
}
