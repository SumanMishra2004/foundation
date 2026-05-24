import { defineField, defineType } from 'sanity';

export const homeContent = defineType({
  name: 'homeContent',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    // Vision
    defineField({
      name: 'visionTitle',
      title: 'Vision Section Title',
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
      title: 'Mission Section Title',
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

    // Commitment
    defineField({
      name: 'commitmentTitle',
      title: 'Commitment Section Title',
      type: 'string',
      initialValue: 'Our Commitment',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'commitmentDescription',
      title: 'Commitment Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Ready to Make a Difference?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Content (Singleton)',
      };
    },
  },
});
