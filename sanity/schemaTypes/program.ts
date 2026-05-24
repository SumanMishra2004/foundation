import { defineField, defineType } from 'sanity';

export const program = defineType({
  name: 'program',
  title: 'Program / Focus Area',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Shown in summary cards (e.g. on home page)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (Lucide React)',
      type: 'string',
      description: 'Lucide icon name like GraduationCap, Heart, Users, Leaf, Award, Ambulance, Handshake, AlertTriangle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Gradient Color Theme',
      type: 'string',
      description: 'Tailwind gradient colors, e.g., from-blue-500 to-cyan-500, from-purple-500 to-pink-500, etc.',
      initialValue: 'from-purple-500 to-pink-500',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Program Detailed List Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Detail items shown on the Programs page list',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
