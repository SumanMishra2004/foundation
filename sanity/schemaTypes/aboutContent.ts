import { defineField, defineType } from 'sanity';

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Who We Are',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    
    // Vision
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      initialValue: 'Our Vision',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    // Mission
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      initialValue: 'Our Mission',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    // Values List
    defineField({
      name: 'valuesList',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          title: 'Core Value',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string' },
            { name: 'description', title: 'Value Description', type: 'text' },
            { name: 'icon', title: 'Icon (Lucide name)', type: 'string', description: 'e.g., Heart, Users, Zap' },
            { name: 'color', title: 'Gradient color', type: 'string', description: 'e.g., from-red-500 to-pink-500' },
          ],
        },
      ],
    }),

    // What We Do List
    defineField({
      name: 'whatWeDoList',
      title: 'What We Do Details',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'whatWeDoItem',
          title: 'What We Do Item',
          fields: [
            { name: 'title', title: 'Item Title', type: 'string' },
            { name: 'description', title: 'Item Description', type: 'text' },
            { name: 'icon', title: 'Emoji Icon', type: 'string', description: 'e.g. 🎓, 🏥, 👥, 🌱' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content (Singleton)',
      };
    },
  },
});
