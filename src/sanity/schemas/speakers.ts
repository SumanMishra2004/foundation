import { defineType, defineField } from "sanity";

export default defineType({
  name: "speakers",
  title: "Speakers",
  type: "document",
  initialValue: {
    name: "Dr. Lorem Ipsum",
    type: "keynote",
    designation: "Distinguished Professor",
    organization: "Lorem University",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Speaker Type",
      type: "string",
      options: {
        list: [
          { title: "Keynote", value: "keynote" },
          { title: "Invited", value: "invited" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      description: "Upload a headshot. Placeholder source: https://i.pravatar.cc/300?img=1",
      options: { hotspot: true },
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "photo",
    },
  },
});
