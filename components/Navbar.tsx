"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight focus-ring">
          TOHEEB
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-opacity hover:opacity-85"
          >
            Let&apos;s Work Together
          </Link>
        </nav>

        <button
          className="focus-ring md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-3 text-base text-ink/85 hover:bg-ink/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
