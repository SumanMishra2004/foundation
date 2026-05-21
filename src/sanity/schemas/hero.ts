import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Banner",
  type: "document",
  initialValue: {
    conferenceName: "Lorem Summit 2025",
    edition: "Inaugural Edition · 2025",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15 November 2025",
    venue: "Kolkata · Biswa Bangla Convention Centre",
    ctaLabel: "Register Now",
    ctaLink: "#registration",
  },
  fields: [
    defineField({
      name: "conferenceName",
      title: "Conference Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "edition",
      title: "Edition Label",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "venue",
      title: "City & Venue",
      type: "string",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description:
        "Use an event image. Placeholder URL: https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
    }),
  ],
});
