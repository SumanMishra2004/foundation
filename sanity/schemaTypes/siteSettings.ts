import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'globalInfo',
      title: 'Global Branding',
      description: 'Site name, logo, and tagline.',
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      description: 'Metadata for search engines.',
    },
    {
      name: 'navigation',
      title: 'Navigation Header',
      description: 'Navbar links and primary call-to-action button.',
    },
    {
      name: 'contactInfo',
      title: 'Global Contact Coordinates',
      description: 'Address, phone numbers, and operational hours.',
    },
    {
      name: 'footerSettings',
      title: 'Footer Customization',
      description: 'Footer columns, quote boxes, and legal links.',
    },
  ],
  fields: [
    // Global Branding
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'IKC Foundation',
      validation: (Rule) => Rule.required(),
      fieldset: 'globalInfo',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Knowledge & Care',
      validation: (Rule) => Rule.required(),
      fieldset: 'globalInfo',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'globalInfo',
    }),

    // SEO Settings
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      initialValue: 'IKC Foundation — Empowering Through Knowledge & Care',
      validation: (Rule) => Rule.required(),
      fieldset: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      initialValue:
        'IKC Foundation empowers lives through integrated knowledge and care — education, healthcare, and community welfare programs across India.',
      validation: (Rule) => Rule.required(),
      fieldset: 'seo',
    }),

    // Navigation Header
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      fieldset: 'navigation',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Navigation Link',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'href', title: 'Href / Route Path', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Programs', href: '/programs' },
        { label: 'Advisory Board', href: '/advisory-board' },
        { label: 'Team', href: '/team' },
        { label: 'Contact', href: '/contact' },
      ],
    }),
    defineField({
      name: 'navbarCtaLabel',
      title: 'Navbar CTA Label',
      type: 'string',
      initialValue: 'Volunteer',
      validation: (Rule) => Rule.required(),
      fieldset: 'navigation',
    }),
    defineField({
      name: 'navbarCtaLink',
      title: 'Navbar CTA Link URL',
      type: 'string',
      initialValue: '/contact',
      validation: (Rule) => Rule.required(),
      fieldset: 'navigation',
    }),

    // Contact Coordinates
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'string',
      initialValue: 'NewTown, Kolkata, West Bengal, India - 700135',
      fieldset: 'contactInfo',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@ikc.org.in',
      fieldset: 'contactInfo',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '+91 33 2419 0921',
      fieldset: 'contactInfo',
    }),
    defineField({
      name: 'contactHours',
      title: 'Contact Hours',
      type: 'string',
      initialValue: 'Monday – Friday: 10:00 AM – 06:00 PM IST',
      fieldset: 'contactInfo',
    }),

    // Footer Customization
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      initialValue:
        'A registered public charitable trust committed to driving inclusive social development, educational grants, and rural health consulting.',
      fieldset: 'footerSettings',
    }),
    defineField({
      name: 'footerQuote',
      title: 'Footer Quote',
      type: 'string',
      initialValue: 'Knowledge empowers, Care transforms.',
      fieldset: 'footerSettings',
    }),
    defineField({
      name: 'focusAreas',
      title: 'Footer Focus Areas',
      type: 'array',
      description: 'Custom lists of key focus items shown in the footer column.',
      of: [{ type: 'string' }],
      initialValue: [
        'Education & Knowledge Development',
        'Healthcare & Medical Assistance',
        'Social & Rural Welfare Initiatives',
        'Culture & Sports Development',
        'Environmental Conservation & Protection',
        'Disaster Relief & Civic Outreach',
      ],
      fieldset: 'footerSettings',
    }),
    defineField({
      name: 'footerQuickLinks',
      title: 'Footer Quick Links',
      type: 'array',
      description: 'Quick links list displayed in the footer.',
      of: [
        {
          type: 'object',
          name: 'footerLink',
          title: 'Footer Link',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        { label: 'Home', href: '/' },
        { label: 'About IKC', href: '/about' },
        { label: 'Programs', href: '/programs' },
        { label: 'Advisory Board', href: '/advisory-board' },
        { label: 'Our Team', href: '/team' },
        { label: 'Contact Us', href: '/contact' },
      ],
      fieldset: 'footerSettings',
    }),
    defineField({
      name: 'footerBottomLinks',
      title: 'Footer Bottom Legal Links',
      type: 'array',
      description: 'Links placed next to copyright in the footer bottom bar.',
      of: [
        {
          type: 'object',
          name: 'legalLink',
          title: 'Legal Link',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Use', href: '#' },
      ],
      fieldset: 'footerSettings',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings (Singleton)',
      };
    },
  },
});