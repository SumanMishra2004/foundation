import { defineType, defineField } from "sanity";

export default defineType({
  name: "certificate",
  title: "Certificates Registry",
  type: "document",
  icon: () => "🎓",
  fields: [
    defineField({
      name: "name",
      title: "Recipient Name",
      type: "string",
      description: "Full name as it should appear on the certificate.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Recipient Email Address",
      type: "string",
      description: "Email address used by the recipient to lookup/verify their certificate.",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "role",
      title: "Role / Participation Type",
      type: "string",
      description: "e.g. Presenter, Keynote Speaker, Session Chair, Attendee",
      initialValue: "Attendee",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentationTitle",
      title: "Presentation Title",
      type: "string",
      description: "Title of the research paper or talk (only applicable for presenters/speakers).",
    }),
    defineField({
      name: "certificateCode",
      title: "Certificate Verification Code",
      type: "string",
      description: "Unique code to verify authenticity (e.g. BBCC-2025-0104).",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      email: "email",
    },
    prepare(selection) {
      const { title, subtitle, email } = selection;
      return {
        title: title,
        subtitle: `${subtitle} (${email})`,
      };
    },
  },
});
