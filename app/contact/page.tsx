import type { Metadata } from "next";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss a design project.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:px-10">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Have a project in mind?</h1>

      <div className="mt-10 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-4 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="focus-ring flex items-center gap-2 hover:text-accent">
            <Mail size={16} /> {siteConfig.email}
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-2 hover:text-accent">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-2 hover:text-accent">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-2 hover:text-accent">
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
