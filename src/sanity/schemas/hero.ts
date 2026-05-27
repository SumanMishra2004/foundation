import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Banner",
  type: "document",
  initialValue: {
    conferenceName: "Lorem Summit 2025",
    subtitle: "International Conference on Innovation & Technology",
    edition: "Inaugural Edition · 2025",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15 November 2025",
    venue: "Kolkata · Biswa Bangla Convention Centre",
    ctaLabel: "Register Now",
    ctaLink: "#registration",
    secondaryCtaLabel: "View Schedule",
    secondaryCtaLink: "#agenda",
  },
  fields: [
    defineField({
      name: "conferenceName",
      title: "Conference Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description:
        "Secondary line displayed above the conference name (e.g., 'International Conference on...')",
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
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description:
        "Conference-related image displayed alongside the hero text (not as background). Recommended: 800x600px or larger.",
      options: { hotspot: true },
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description:
        "Full-screen background image for the hero section. Recommended: 1920x1080px or larger, conference/event related.",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Primary CTA Button Link",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "Secondary CTA Button Link",
      type: "string",
    }),
    defineField({
      name: "highlightStats",
      title: "Highlight Stats",
      type: "array",
      description:
        "Quick stats displayed in the hero section (e.g., '500+ Attendees')",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
            },
          },
        },
      ],
    }),
  ],
});
