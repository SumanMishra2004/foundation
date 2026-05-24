import { defineField, defineType } from 'sanity';

export const advisoryMember = defineType({
  name: 'advisoryMember',
  title: 'Advisory Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography / Profile',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'Optional title shown on the advisory board page.',
    }),
    defineField({
      name: 'organization',
      title: 'Organization / Institution',
      type: 'string',
      description: 'Optional institution, university, or company name.',
    }),
    defineField({
      name: 'expertise',
      title: 'Area of Expertise',
      type: 'string',
      description: 'Short phrase describing the advisor’s specialization.',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort advisory members on the page',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
