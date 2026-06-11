import { defineField, defineType } from 'sanity';

export const gallery = defineType({
  name: 'gallery',
  title: 'Program Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      initialValue: 'Main Program Gallery',
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Photo Title / Caption',
              description: 'Short title for the photo',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description & Context',
              description: 'Detailed description of the event or program shown.',
            },
            {
              name: 'year',
              type: 'string',
              title: 'Year',
              description: 'Year the photo was taken (e.g. 2023)',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Project Location',
              description: 'Village, district or region where this took place.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
      description: 'Add photos for the program gallery slider here.',
    }),
  ],
});
