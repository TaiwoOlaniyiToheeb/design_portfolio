import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-site px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold">TOHEEB</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Graphic designer creating purposeful visual communication for
              brands, businesses, organisations, and individuals.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link className="focus-ring hover:text-ink" href="/work">Work</Link></li>
              <li><Link className="focus-ring hover:text-ink" href="/about">About</Link></li>
              <li><Link className="focus-ring hover:text-ink" href="/services">Services</Link></li>
              <li><Link className="focus-ring hover:text-ink" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Connect</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a className="focus-ring inline-flex items-center gap-2 hover:text-ink" href={`mailto:${siteConfig.email}`}>
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a className="focus-ring inline-flex items-center gap-2 hover:text-ink" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a className="focus-ring inline-flex items-center gap-2 hover:text-ink" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a className="focus-ring inline-flex items-center gap-2 hover:text-ink" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted">
          © {new Date().getFullYear()} Taiwo Olaniyi Toheeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
