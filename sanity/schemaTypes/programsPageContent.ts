import { defineField, defineType } from 'sanity';

export const programsPageContent = defineType({
  name: 'programsPageContent',
  title: 'Programs Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Our Initiatives',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Programs & Focus Areas',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      initialValue: 'Through direct volunteer deployment and transparent fund utilization, we run structured programs in learning development, mobile health, and eco-conservation.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Section Title',
      type: 'string',
      initialValue: 'Core Initiatives & Sub-projects',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Section Description',
      type: 'text',
      initialValue: 'Detailing our active field operations. Each program is run in partnership with regional volunteer networks.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Would You Like to Volunteer or Collaborate?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Section Description',
      type: 'text',
      initialValue: 'We welcome partnerships with local health centers, ecological experts, and youth volunteers to expand our rural reach.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'CTA Primary Button Label',
      type: 'string',
      initialValue: 'Apply as Volunteer',
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
      initialValue: 'Our Annual Trust Audits',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondaryLink',
      title: 'CTA Secondary Button Link URL',
      type: 'string',
      initialValue: '/about',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Programs Page Content (Singleton)',
      };
    },
  },
});
