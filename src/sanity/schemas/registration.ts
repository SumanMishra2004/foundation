import { defineType, defineField } from "sanity";

export default defineType({
  name: "registration",
  title: "Registration / Tickets",
  type: "document",
  initialValue: {
    heading: "Registration",
    ticketTiers: [
      {
        _key: "early",
        name: "Early Bird",
        price: "$99",
        inclusions: ["Full day access", "Conference kit", "Lunch and refreshments"],
        isRecommended: false,
        ctaLabel: "Get Early Bird",
        ctaLink: "#registration",
      },
      {
        _key: "professional",
        name: "Professional",
        price: "$149",
        inclusions: ["Full day access", "Workshop access", "Networking dinner"],
        isRecommended: true,
        ctaLabel: "Register Now",
        ctaLink: "#registration",
      },
      {
        _key: "student",
        name: "Student",
        price: "$49",
        inclusions: ["Full day access", "Conference kit", "Certificate"],
        isRecommended: false,
        ctaLabel: "Student Register",
        ctaLink: "#registration",
      },
    ],
    groupNote: "Group discounts available. Contact us.",
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ticketTiers",
      title: "Ticket Tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Tier Name", type: "string" }),
            defineField({ name: "price", title: "Price", type: "string" }),
            defineField({
              name: "inclusions",
              title: "Inclusions",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "isRecommended", title: "Recommended?", type: "boolean" }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "groupNote",
      title: "Group Discount Note",
      type: "string",
    }),
  ],
});
