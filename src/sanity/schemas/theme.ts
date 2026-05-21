import { defineType, defineField } from "sanity";

export default defineType({
  name: "theme",
  title: "Conference Theme",
  type: "document",
  initialValue: {
    heading: "Conference Theme",
    themeTitle: "Bridging Minds, Building Futures",
    themeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
    focusAreas: [
      {
        _key: "ai",
        icon: "AI",
        label: "Artificial Intelligence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        _key: "sustainability",
        icon: "Eco",
        label: "Sustainable Innovation",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        _key: "future",
        icon: "Future",
        label: "Future Systems",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
    ],
    whyThisTheme:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "themeTitle",
      title: "Theme Title",
      type: "string",
    }),
    defineField({
      name: "themeDescription",
      title: "Theme Description",
      type: "text",
    }),
    defineField({
      name: "focusAreas",
      title: "Focus Areas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (Emoji or String)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "whyThisTheme",
      title: "Why This Theme",
      type: "text",
    }),
  ],
});
