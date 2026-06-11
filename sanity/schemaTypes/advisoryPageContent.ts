import { defineField, defineType } from 'sanity';

export const advisoryPageContent = defineType({
  name: 'advisoryPageContent',
  title: 'Advisory Board Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Strategic Advisors',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Our Advisory Board',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      initialValue: 'World-class researchers, public health experts, and environmentalists providing strategic direction to IKC trust initiatives.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Advisory Page Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'advisoryStat',
          title: 'Advisory Stat',
          fields: [
            { name: 'number', title: 'Number / Count', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            {
              name: 'icon',
              title: 'Icon Name (Lucide)',
              type: 'string',
              description: 'Users, Globe, BookOpen, GraduationCap, Award, ShieldCheck',
              options: {
                list: [
                  { title: 'Users', value: 'Users' },
                  { title: 'Globe', value: 'Globe' },
                  { title: 'BookOpen', value: 'BookOpen' },
                  { title: 'GraduationCap', value: 'GraduationCap' },
                  { title: 'Award', value: 'Award' },
                  { title: 'ShieldCheck', value: 'ShieldCheck' },
                ],
              },
              initialValue: 'Users',
            },
          ],
        },
      ],
      initialValue: [
        { number: '10+', label: 'Academic Mentors', icon: 'Users' },
        { number: '4+', label: 'Countries Represented', icon: 'Globe' },
        { number: '25+', label: 'Research Studies', icon: 'BookOpen' },
        { number: '1,200+', label: 'Students Advised', icon: 'GraduationCap' },
      ],
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Guided by Global Experience',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      initialValue: 'Evaluating programs, conducting periodic project audits, and ensuring alignment with international social development standards.',
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
      initialValue: 'Promoting Scientific & Grassroots Research',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      initialValue: 'Our board coordinates partnerships with environmental bodies, research universities, and public health institutes.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'CTA Primary Button Label',
      type: 'string',
      initialValue: 'Inquire With Council',
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
      initialValue: 'Meet Executive Team',
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
        title: 'Advisory Board Page Content (Singleton)',
      };
    },
  },
});
