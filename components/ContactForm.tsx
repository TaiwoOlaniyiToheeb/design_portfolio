"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Brand Identity",
  "Marketing Design",
  "Social Media Design",
  "Event Design",
  "Print Design",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (!message) nextErrors.message = "Please add a short project description.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    // ── Wire up a real backend here when ready ───────────────────────
    // Option A: Web3Forms — POST to https://api.web3forms.com/submit
    //   with `access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY`
    // Option B: Formspree — POST to process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    // Option C: a Next.js API route (app/api/contact/route.ts) using Resend
    //
    // For now this simulates a submission so the UI/UX is fully testable.
    try {
      await new Promise((res) => setTimeout(res, 700));
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="focus-ring mt-2 w-full rounded-md border border-line bg-transparent px-4 py-3 text-sm"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="focus-ring mt-2 w-full rounded-md border border-line bg-transparent px-4 py-3 text-sm"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
        <select
          id="projectType"
          name="projectType"
          className="focus-ring mt-2 w-full rounded-md border border-line bg-transparent px-4 py-3 text-sm"
          defaultValue={projectTypes[0]}
        >
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="focus-ring mt-2 w-full rounded-md border border-line bg-transparent px-4 py-3 text-sm"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring w-full rounded-full bg-ink px-6 py-3 text-sm text-paper transition-opacity hover:opacity-85 disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-green-700">Thanks — your message has been received. I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-accent">Something went wrong. Please try again or email me directly.</p>
        )}
      </div>
    </form>
  );
}
