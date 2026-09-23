import { servicesList } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10">
      <h2 className="font-heading text-2xl font-semibold sm:text-3xl">What I Do</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesList.map((s) => (
          <div key={s.title} className="rounded-md border border-line p-6">
            <h3 className="font-heading text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
