import { defineType, defineField } from "sanity";

export default defineType({
  name: "sponsors",
  title: "Sponsors & Partners",
  type: "document",
  initialValue: {
    heading: "Sponsors & Partners",
    sponsorTiers: [
      {
        _key: "gold",
        tierName: "Gold",
        sponsors: [
          { _key: "gold-1", name: "Lorem Gold", website: "#" },
          { _key: "gold-2", name: "Ipsum Labs", website: "#" },
        ],
      },
      {
        _key: "silver",
        tierName: "Silver",
        sponsors: [
          { _key: "silver-1", name: "Consectetur Co.", website: "#" },
          { _key: "silver-2", name: "Adipiscing Studio", website: "#" },
        ],
      },
      {
        _key: "bronze",
        tierName: "Bronze",
        sponsors: [{ _key: "bronze-1", name: "Elit Partners", website: "#" }],
      },
      {
        _key: "community",
        tierName: "Community Partner",
        sponsors: [{ _key: "community-1", name: "Lorem Community", website: "#" }],
      },
    ],
    becomeSponsorLink: "mailto:sponsors@loremsummit.com",
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sponsorTiers",
      title: "Sponsor Tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "tierName", title: "Tier Name", type: "string" }),
            defineField({
              name: "sponsors",
              title: "Sponsors",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "name", title: "Sponsor Name", type: "string" }),
                    defineField({
                      name: "logo",
                      title: "Logo",
                      type: "image",
                      description: "Upload a logo. Placeholder source: https://via.placeholder.com/160x80",
                      options: { hotspot: true },
                    }),
                    defineField({ name: "website", title: "Website URL", type: "string" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "becomeSponsorLink",
      title: "Become a Sponsor Link",
      type: "string",
    }),
  ],
});
