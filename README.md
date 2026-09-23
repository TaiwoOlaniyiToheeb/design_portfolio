# Toheeb — Graphic Design Portfolio

A modern, image-first portfolio website for **Taiwo Olaniyi Toheeb**, built
with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Live sections: Home, Work (filterable grid), individual project pages,
About, Services, Contact — all driven from one data file so new projects
never require touching layout code.

## 1. Getting Started Locally

**Requirements:** Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## 2. Adding a New Project (no code changes needed)

1. Create a folder: `public/projects/<your-project-slug>/`
2. Drop your images in there (e.g. `cover.jpg`, `design-1.jpg`…)
3. Open `data/projects.ts` and add one object to the `projects` array:

```ts
{
  slug: "your-project-slug",
  title: "Your Project Title",
  category: "Branding", // must match one of the Category values in types/project.ts
  year: 2026,
  client: "Client Name",
  description: "A short description of the project.",
  tools: ["Adobe Illustrator"],
  deliverables: ["Logo Suite"],
  coverImage: "/projects/your-project-slug/cover.jpg",
  images: [
    "/projects/your-project-slug/cover.jpg",
    "/projects/your-project-slug/design-1.jpg",
  ],
  featured: false,
}
```

4. Commit and push:

```bash
git add .
git commit -m "Add new project: Your Project Title"
git push
```

That's it — the homepage, `/work` grid, category filters, sitemap, and the
new `/work/your-project-slug` page are all generated automatically.

> The three sample projects currently in `data/projects.ts` use placeholder
> SVG images (`isPlaceholder: true`) so you can see the layout working.
> Replace them with your real work whenever you're ready — just swap the
> image files and edit or remove those objects.

## 3. Wiring Up the Contact Form

The form in `components/ContactForm.tsx` currently simulates a submission
so you can test the UI. To make it actually send you messages, pick one:

- **Web3Forms** (free, no backend needed): create a key at
  web3forms.com, put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`,
  and POST to `https://api.web3forms.com/submit` inside `handleSubmit`.
- **Formspree**: create a form at formspree.io, put the endpoint in
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, and POST to it.
- **Your own API route**: add `app/api/contact/route.ts` using Resend or
  another email API, and POST to `/api/contact` instead.

## 4. Adding Real Social/Contact Links

Edit `lib/site-config.ts` — email, WhatsApp, Instagram, and LinkedIn are
placeholders marked `TODO`.

## 5. Project Structure

```
app/                 routes (home, work, work/[slug], about, services, contact)
components/          reusable UI (Navbar, Footer, ProjectGrid, etc.)
data/projects.ts      ← single source of truth for all projects
data/services.ts      service list shown on homepage + /services
lib/                  utils + site config placeholders
public/projects/      project images, one folder per project
types/project.ts      Project & Category types
```

## 6. Deploying to Vercel (recommended, primary)

1. Push this project to a new GitHub repository.
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Next.js — leave defaults (Build Command:
   `next build`, Output: `.next`).
4. Add any environment variables from `.env.example` you're using
   (e.g. `NEXT_PUBLIC_WEB3FORMS_KEY`) in Project Settings → Environment
   Variables.
5. Click **Deploy**. Every future `git push` to `main` auto-deploys.

## 7. Deploying to Render (secondary)

1. Push this project to GitHub (same repo works).
2. Go to https://render.com → **New** → **Web Service** → connect the repo.
3. Settings:
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. Add the same environment variables as above under the service's
   **Environment** tab.
5. Click **Create Web Service**. Render builds and deploys automatically;
   future pushes redeploy.

## 8. Before You Consider It "Done"

- [ ] Replace placeholder projects/images with real work
- [ ] Replace social links + email in `lib/site-config.ts`
- [ ] Wire up the contact form to a real email service
- [ ] Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
      to your real deployed domain
- [ ] Run `npm run build` locally once before pushing, to catch errors early
