import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About the Conference",
  type: "document",
  initialValue: {
    heading: "About the Conference",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whoItsFor: [
      "Academic researchers and scholars",
      "Industry leaders and entrepreneurs",
      "Scientists and technologists",
      "Creative professionals and designers",
    ],
    mission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stats: [
      { _key: "day", label: "Day", value: "1" },
      { _key: "speakers", label: "Speakers", value: "20+" },
      { _key: "attendees", label: "Attendees", value: "500+" },
    ],
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introduction Paragraph",
      type: "text",
    }),
    defineField({
      name: "whoItsFor",
      title: "Who It's For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
