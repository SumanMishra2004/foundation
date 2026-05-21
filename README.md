# Lorem Summit 2025

A full-stack conference website built with Next.js App Router, Tailwind CSS, shadcn/ui, and Sanity Studio.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.local.example` and add your Sanity project values:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

3. Run the development server:

```bash
npm run dev
```

4. Open the site at [http://localhost:3000](http://localhost:3000).

## Sanity Studio

Sanity Studio is embedded at [http://localhost:3000/studio](http://localhost:3000/studio).

Create one document for each content type:

- Hero Banner
- Countdown Timer
- About the Conference
- Conference Theme
- Speakers
- Agenda / Schedule
- Registration / Tickets
- Venue & Travel
- Sponsors & Partners
- Navigation
- Footer

The public site uses ISR with `revalidate = 60`, and falls back to Lorem Ipsum placeholder data when Sanity content is not available.

## Project Structure

```text
src/
  app/
    (site)/
      page.tsx
      layout.tsx
    studio/
      [[...tool]]/
        page.tsx
  components/
    sections/
    ui/
  lib/
    sanity/
  sanity/
    schemas/
```
