import { defineType, defineField } from "sanity";

export default defineType({
  name: "submissions",
  title: "Call for Papers / Submissions",
  type: "document",
  icon: () => "📝",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Call for Papers",
    }),
    defineField({
      name: "intro",
      title: "Introduction Text",
      type: "text",
      description: "Brief overview of the submissions guidelines or theme.",
    }),
    defineField({
      name: "tracks",
      title: "Submission Tracks / Topics",
      type: "array",
      of: [{ type: "string" }],
      description: "Themes or technical tracks for paper submissions.",
    }),
    defineField({
      name: "importantDates",
      title: "Important Dates",
      type: "array",
      of: [
        {
          type: "object",
          name: "importantDate",
          title: "Important Date",
          fields: [
            { name: "title", title: "Event/Milestone Title", type: "string" },
            { name: "dateString", title: "Date (e.g. 15 Sept 2025)", type: "string" },
            { name: "badge", title: "Badge Label (e.g. Passed, Extended)", type: "string" },
            { name: "isPassed", title: "Is Deadline Passed?", type: "boolean", initialValue: false },
          ],
        },
      ],
    }),
    defineField({
      name: "submissionInstructions",
      title: "Submission Instructions",
      type: "text",
      description: "Formatting details, review process rules, page limits, etc.",
    }),
    defineField({
      name: "submissionLink",
      title: "Submission Portal Link",
      type: "url",
      description: "Link to EasyChair, CMT, or submission portal.",
    }),
  ],
});
