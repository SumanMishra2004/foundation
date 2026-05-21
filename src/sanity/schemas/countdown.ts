import { defineType, defineField } from "sanity";

export default defineType({
  name: "countdown",
  title: "Countdown Timer",
  type: "document",
  initialValue: {
    eventDate: "2025-11-15T09:00:00.000Z",
  },
  fields: [
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
