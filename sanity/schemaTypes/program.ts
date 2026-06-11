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
      name: 'link',
      title: 'Program Link',
      type: 'string',
      description: 'External or internal link for this program (optional)',
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
    defineField({
      name: 'events',
      title: 'Events Timeline',
      type: 'array',
      description: 'Timeline of events hosted under this program',
      of: [
        {
          type: 'object',
          name: 'event',
          title: 'Event',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Event Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description / Summary',
              type: 'text',
              description: 'Detailed description of the event. Supports "read more" feature on frontend.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'venue',
              title: 'Venue / Location',
              type: 'string',
              description: 'e.g. Community Center, Sector 4',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'objective',
              title: 'Objective',
              type: 'string',
              description: 'e.g. Faculty training on digital tools',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'timing',
              title: 'Timing',
              type: 'string',
              description: 'e.g. 10:00 AM - 4:00 PM',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              title: 'Event Images',
              type: 'array',
              description: 'Uploaded images will slide one over another automatically on the page',
              of: [{ type: 'image', options: { hotspot: true } }],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'date',
              media: 'images.0',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});

