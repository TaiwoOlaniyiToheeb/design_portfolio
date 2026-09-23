import type { Metadata } from "next";
import { servicesList } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Design services offered — brand identity, marketing design, social media, event design, and print.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:px-10">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Services</h1>
      <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
        A focused set of design services, each adaptable to the scale of your project.
      </p>

      <div className="mt-12 divide-y divide-line border-t border-line">
        {servicesList.map((s) => (
          <div key={s.title} className="grid gap-4 py-8 md:grid-cols-3">
            <h2 className="font-heading text-xl font-medium">{s.title}</h2>
            <div className="md:col-span-2">
              <p className="text-sm text-muted sm:text-base">{s.short}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded-full border border-line px-3 py-1 text-xs text-ink/75">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
