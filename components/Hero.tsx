"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";

export default function Hero() {
  const featured = getFeaturedProjects()[0];

  return (
    <section className="mx-auto max-w-site px-6 pb-20 pt-14 md:px-10 md:pt-20">
      <div className="grid items-end gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            I turn ideas into visual experiences.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted sm:text-lg">
            I&apos;m Taiwo Olaniyi Toheeb, a graphic designer creating clean,
            engaging, and purposeful visual communication for brands,
            businesses, organisations, events, and individuals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-full bg-ink px-6 py-3 text-sm text-paper transition-opacity hover:opacity-85"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="focus-ring rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:bg-ink/5"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink/5"
          >
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
