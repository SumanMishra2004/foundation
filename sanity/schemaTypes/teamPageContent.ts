import { defineField, defineType } from 'sanity';

export const teamPageContent = defineType({
  name: 'teamPageContent',
  title: 'Team Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Our People',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Meet Our Executive Team',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      initialValue: 'Meet the volunteers, managers, and coordinators driving regional healthcare camps and learning centers.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Guided by Care & Service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      initialValue: 'Dedicated professionals coordinating healthcare diagnostic teams, learning campaigns, and conservation projects.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fallbackStudioLabel',
      title: 'Fallback Studio Button Label',
      type: 'string',
      initialValue: 'Open Studio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fallbackStudioLink',
      title: 'Fallback Studio Button Link URL',
      type: 'string',
      initialValue: '/studio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Empower Others With Your Service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      initialValue: 'We welcome medical students, teaching interns, and environment enthusiasts to join our field teams.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'CTA Primary Button Label',
      type: 'string',
      initialValue: 'Volunteer Signup',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimaryLink',
      title: 'CTA Primary Button Link URL',
      type: 'string',
      initialValue: '/contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      title: 'CTA Secondary Button Label',
      type: 'string',
      initialValue: 'View Active Fields',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondaryLink',
      title: 'CTA Secondary Button Link URL',
      type: 'string',
      initialValue: '/programs',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Page Content (Singleton)',
      };
    },
  },
});
