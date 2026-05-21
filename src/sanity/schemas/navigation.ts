import { defineType, defineField } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  initialValue: {
    logo: "Lorem Summit",
  },
  fields: [
    defineField({
      name: "logo",
      title: "Logo Text",
      type: "string",
    }),
    defineField({
      name: "logoImage",
      title: "Logo Image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  initialValue: {
    conferenceName: "Lorem Summit 2025",
    edition: "Inaugural Edition",
    quickLinks: [
      { _key: "about", label: "About", href: "#about" },
      { _key: "theme", label: "Theme", href: "#theme" },
      { _key: "speakers", label: "Speakers", href: "#speakers" },
      { _key: "schedule", label: "Schedule", href: "#agenda" },
      { _key: "register", label: "Register", href: "#registration" },
    ],
    twitterUrl: "https://twitter.com/loremsummit",
    linkedinUrl: "https://linkedin.com/company/loremsummit",
    instagramUrl: "https://instagram.com/loremsummit",
    copyright: "© 2025 Lorem Summit. All rights reserved.",
  },
  fields: [
    defineField({
      name: "conferenceName",
      title: "Conference Name",
      type: "string",
    }),
    defineField({
      name: "edition",
      title: "Edition",
      type: "string",
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter/X URL",
      type: "string",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "string",
    }),
    defineField({
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    }),
  ],
});
