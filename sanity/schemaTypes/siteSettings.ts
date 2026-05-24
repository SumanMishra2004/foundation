import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'IKC Foundation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Knowledge & Care',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      initialValue: 'IKC Foundation — Empowering Through Knowledge & Care',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      initialValue:
        'IKC Foundation empowers lives through integrated knowledge and care — education, healthcare, and community welfare programs across India.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Navigation Link',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Href', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'string',
      initialValue: 'NewTown, Kolkata, West Bengal, India - 700135',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@ikc.org.in',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '+91 33 2419 0921',
    }),
    defineField({
      name: 'contactHours',
      title: 'Contact Hours',
      type: 'string',
      initialValue: 'Monday – Friday: 10:00 AM – 06:00 PM IST',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      initialValue:
        'A registered public charitable trust committed to driving inclusive social development, educational grants, and rural health consulting.',
    }),
    defineField({
      name: 'footerQuote',
      title: 'Footer Quote',
      type: 'string',
      initialValue: 'Knowledge empowers, Care transforms.',
    }),
    defineField({
      name: 'focusAreas',
      title: 'Footer Focus Areas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'homeHeroEyebrow',
      title: 'Home Hero Eyebrow',
      type: 'string',
      initialValue: 'Registered Charitable Trust',
    }),
    defineField({
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'homeStats',
      title: 'Home Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'siteStat',
          title: 'Stat',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'homeAboutEyebrow',
      title: 'Home About Eyebrow',
      type: 'string',
      initialValue: 'Who We Are',
    }),
    defineField({
      name: 'homeAboutTitle',
      title: 'Home About Title',
      type: 'string',
      initialValue: 'Uniting Care and Knowledge to Build Sustainable Livelihoods',
    }),
    defineField({
      name: 'homeAboutImage',
      title: 'Home About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'homeTransparencyTitle',
      title: 'Home Transparency Title',
      type: 'string',
      initialValue: '85% of Funds Go Directly to Program Execution',
    }),
    defineField({
      name: 'homeTransparencyDescription',
      title: 'Home Transparency Description',
      type: 'text',
    }),
    defineField({
      name: 'homeTransparencyBars',
      title: 'Home Transparency Bars',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'transparencyBar',
          title: 'Transparency Bar',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'width', title: 'Width %', type: 'number' },
            { name: 'color', title: 'Color Class', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'homeTestimonials',
      title: 'Home Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'author', title: 'Author', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'homeCommitmentTitle',
      title: 'Home Commitment Title',
      type: 'string',
      initialValue: 'Our Commitment',
    }),
    defineField({
      name: 'homeCommitmentDescription',
      title: 'Home Commitment Description',
      type: 'text',
    }),
    defineField({
      name: 'homeCommitmentImage',
      title: 'Home Commitment Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'homeCtaTitle',
      title: 'Home CTA Title',
      type: 'string',
      initialValue: 'Become Part of the Change Today',
    }),
    defineField({
      name: 'homeCtaDescription',
      title: 'Home CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'aboutHeroEyebrow',
      title: 'About Hero Eyebrow',
      type: 'string',
      initialValue: 'About IKC Trust',
    }),
    defineField({
      name: 'aboutHeroImage',
      title: 'About Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutStoryEyebrow',
      title: 'About Story Eyebrow',
      type: 'string',
      initialValue: 'Our Background',
    }),
    defineField({
      name: 'aboutStoryTitle',
      title: 'About Story Title',
      type: 'string',
      initialValue: 'Merging Direct Care with Intellectual Development',
    }),
    defineField({
      name: 'aboutStoryPoints',
      title: 'About Story Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'aboutStoryImage',
      title: 'About Story Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutMilestones',
      title: 'About Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'milestone',
          title: 'Milestone',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutValuesTitle',
      title: 'About Values Title',
      type: 'string',
      initialValue: 'Our Foundation Values',
    }),
    defineField({
      name: 'aboutValuesDescription',
      title: 'About Values Description',
      type: 'text',
    }),
    defineField({
      name: 'aboutValues',
      title: 'About Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueItem',
          title: 'Value Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon Name', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutWhatWeDoTitle',
      title: 'About What We Do Title',
      type: 'string',
      initialValue: 'Primary Spheres of Action',
    }),
    defineField({
      name: 'aboutWhatWeDoDescription',
      title: 'About What We Do Description',
      type: 'text',
    }),
    defineField({
      name: 'aboutWhatWeDo',
      title: 'About What We Do Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'workItem',
          title: 'Work Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Emoji Icon', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutQuoteImage',
      title: 'About Quote Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutCommitmentTitle',
      title: 'About Commitment Title',
      type: 'string',
      initialValue: 'Our Commitment',
    }),
    defineField({
      name: 'aboutCommitmentDescription',
      title: 'About Commitment Description',
      type: 'text',
    }),
    defineField({
      name: 'programsHeroEyebrow',
      title: 'Programs Hero Eyebrow',
      type: 'string',
      initialValue: 'Our Initiatives',
    }),
    defineField({
      name: 'programsHeroImage',
      title: 'Programs Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'programsHeroTitle',
      title: 'Programs Hero Title',
      type: 'string',
      initialValue: 'Programs & Focus Areas',
    }),
    defineField({
      name: 'programsHeroDescription',
      title: 'Programs Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'programsIntroTitle',
      title: 'Programs Intro Title',
      type: 'string',
      initialValue: 'Core Initiatives & Sub-projects',
    }),
    defineField({
      name: 'programsIntroDescription',
      title: 'Programs Intro Description',
      type: 'text',
    }),
    defineField({
      name: 'programsCtaTitle',
      title: 'Programs CTA Title',
      type: 'string',
      initialValue: 'Would You Like to Volunteer or Collaborate?',
    }),
    defineField({
      name: 'programsCtaDescription',
      title: 'Programs CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'teamHeroEyebrow',
      title: 'Team Hero Eyebrow',
      type: 'string',
      initialValue: 'Our People',
    }),
    defineField({
      name: 'teamHeroImage',
      title: 'Team Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'teamHeroTitle',
      title: 'Team Hero Title',
      type: 'string',
      initialValue: 'Meet Our Executive Team',
    }),
    defineField({
      name: 'teamHeroDescription',
      title: 'Team Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      type: 'string',
      initialValue: 'Guided by Care & Service',
    }),
    defineField({
      name: 'teamSectionDescription',
      title: 'Team Section Description',
      type: 'text',
    }),
    defineField({
      name: 'teamCtaTitle',
      title: 'Team CTA Title',
      type: 'string',
      initialValue: 'Empower Others With Your Service',
    }),
    defineField({
      name: 'teamCtaDescription',
      title: 'Team CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'advisoryHeroEyebrow',
      title: 'Advisory Hero Eyebrow',
      type: 'string',
      initialValue: 'Strategic Advisors',
    }),
    defineField({
      name: 'advisoryHeroImage',
      title: 'Advisory Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'advisoryHeroTitle',
      title: 'Advisory Hero Title',
      type: 'string',
      initialValue: 'Our Advisory Board',
    }),
    defineField({
      name: 'advisoryHeroDescription',
      title: 'Advisory Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'advisorySectionTitle',
      title: 'Advisory Section Title',
      type: 'string',
      initialValue: 'Guided by Global Experience',
    }),
    defineField({
      name: 'advisorySectionDescription',
      title: 'Advisory Section Description',
      type: 'text',
    }),
    defineField({
      name: 'advisoryCtaTitle',
      title: 'Advisory CTA Title',
      type: 'string',
      initialValue: 'Promoting Scientific & Grassroots Research',
    }),
    defineField({
      name: 'advisoryCtaDescription',
      title: 'Advisory CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'contactHeroEyebrow',
      title: 'Contact Hero Eyebrow',
      type: 'string',
      initialValue: 'Connect With Us',
    }),
    defineField({
      name: 'contactHeroTitle',
      title: 'Contact Hero Title',
      type: 'string',
      initialValue: 'Get in Touch & Volunteer',
    }),
    defineField({
      name: 'contactHeroDescription',
      title: 'Contact Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'contactOfficeTitle',
      title: 'Contact Office Title',
      type: 'string',
      initialValue: 'Headquarters Coordinates',
    }),
    defineField({
      name: 'contactOfficeDescription',
      title: 'Contact Office Description',
      type: 'text',
    }),
    defineField({
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
      initialValue: 'Send an Inquiry Message',
    }),
    defineField({
      name: 'contactFormDescription',
      title: 'Contact Form Description',
      type: 'text',
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
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' },
          ],
        },
      ],
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