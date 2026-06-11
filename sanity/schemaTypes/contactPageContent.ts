import { defineField, defineType } from 'sanity';

export const contactPageContent = defineType({
  name: 'contactPageContent',
  title: 'Contact Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Connect With Us',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Get in Touch & Volunteer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      initialValue: 'Have questions about our rural welfare programs, donation transparency, or wish to join as a field volunteer? We would love to hear from you.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'officeSectionTitle',
      title: 'Office Coordinates Section Title',
      type: 'string',
      initialValue: 'Headquarters Coordinates',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'officeSectionDescription',
      title: 'Office Coordinates Section Description',
      type: 'text',
      initialValue: 'Our central operational team coordinates medical diagnosticians, rural teaching materials, and plantation supplies from our Newtown office in Kolkata.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
      initialValue: 'Send an Inquiry Message',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactFormDescription',
      title: 'Contact Form Description',
      type: 'text',
      initialValue: 'Fill out the form below. Our support team or field coordinators will review your query and reply within 48 hours.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactFormSubmitLabel',
      title: 'Contact Form Submit Button Label',
      type: 'string',
      initialValue: 'Send Message',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactFaqs',
      title: 'Contact FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faq',
          title: 'FAQ',
          fields: [
            { name: 'q', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'a', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        {
          q: 'Is IKC Foundation a registered trust?',
          a: 'Yes. Integrated Knowledge and Care (IKC) Foundation is a registered public charitable trust under the Indian Trusts Act. All contributions qualify for tax exemptions under Section 80G of the Income Tax Act.',
        },
        {
          q: 'How are the trust funds utilized?',
          a: 'We maintain a high efficiency rating. 85% of all financial donations are allocated directly to program execution (such as purchasing medicines for mobile camps, distributing school kits, and planting trees). The remaining 15% covers essential operational and auditing overhead.',
        },
        {
          q: 'Who can volunteer for the healthcare and literacy drives?',
          a: 'We welcome individuals from all backgrounds! We specifically look for medical students, doctors, retired teachers, computer instructors, and ecological enthusiasts to assist in our diagnostic health camps and rural classrooms.',
        },
        {
          q: 'How can corporate partners collaborate through CSR?',
          a: 'IKC is fully certified for Corporate Social Responsibility (CSR) projects. We collaborate with companies to run targeted health clinics, build computer learning centers, and execute afforestation drives with verifiable impact reviews.',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page Content (Singleton)',
      };
    },
  },
});
