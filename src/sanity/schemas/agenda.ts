import { defineType, defineField } from "sanity";

export default defineType({
  name: "agenda",
  title: "Agenda / Schedule",
  type: "document",
  initialValue: {
    heading: "Schedule Overview",
    dayLabel: "Day 1 — 15 November 2025",
    agendaItems: [
      { _key: "slot-1", time: "08:30 AM", title: "Registration & Networking", type: "Networking", speaker: "" },
      { _key: "slot-2", time: "09:30 AM", title: "Opening Keynote", type: "Keynote", speaker: "Dr. Lorem Ipsum" },
      { _key: "slot-3", time: "10:30 AM", title: "Lorem Ipsum Panel", type: "Panel", speaker: "Jane Consectetur" },
      { _key: "slot-4", time: "11:30 AM", title: "Coffee Break", type: "Break", speaker: "" },
      { _key: "slot-5", time: "12:00 PM", title: "Workshop: Dolor Sit Amet", type: "Workshop", speaker: "Prof. Adipiscing Elit" },
    ],
    fullScheduleNote: "Full Schedule Coming Soon",
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dayLabel",
      title: "Day Label",
      type: "string",
    }),
    defineField({
      name: "agendaItems",
      title: "Agenda Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "time", title: "Time", type: "string" }),
            defineField({ name: "title", title: "Session Title", type: "string" }),
            defineField({
              name: "type",
              title: "Session Type",
              type: "string",
              options: {
                list: ["Keynote", "Panel", "Workshop", "Break", "Networking", "Talk"],
              },
            }),
            defineField({ name: "speaker", title: "Speaker Name", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "fullScheduleNote",
      title: "Full Schedule Note",
      type: "string",
    }),
  ],
});
