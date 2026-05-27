import { defineType, defineField } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  icon: () => "❓",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Frequently Asked Questions",
    }),
    defineField({
      name: "faqs",
      title: "Questions & Answers",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});
