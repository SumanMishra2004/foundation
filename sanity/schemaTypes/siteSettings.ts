import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'homeHero',
      title: 'Hero Settings',
      description: 'Homepage hero eyebrow and background image settings.',
    },
    {
      name: 'homeStats',
      title: 'Stats Bar',
      description: 'Homepage stats counter values.',
    },
    {
      name: 'homeAbout',
      title: 'About Section',
      description: 'Homepage about preview labels and image settings.',
    },
    {
      name: 'homePrograms',
      title: 'Programs Section',
      description: 'Homepage programs section labels and headings.',
    },
    {
      name: 'homeTransparency',
      title: 'Transparency Section',
      description: 'Homepage transparency copy, bars, and badges.',
    },
    {
      name: 'homeTestimonials',
      title: 'Testimonials / Stories',
      description: 'Homepage testimonials heading and quotes.',
    },
    {
      name: 'homeQuoteBanner',
      title: 'Quote Banner',
      description: 'Homepage quote banner copy and image.',
    },
    {
      name: 'homeCta',
      title: 'Call To Action',
      description: 'Homepage CTA eyebrow, copy, and button labels.',
    },
  ],
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
      description: 'Eyebrow pill text in the homepage hero section.',
      initialValue: 'Registered Charitable Trust',
      fieldset: 'homeHero',
    }),
    defineField({
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
      description: 'Background image for the homepage hero section.',
      options: {
        hotspot: true,
      },
      fieldset: 'homeHero',
    }),
    defineField({
      name: 'homeHeroImageAlt',
      title: 'Home Hero Image Alt Text',
      type: 'string',
      description: 'Alt text for the hero background image.',
      initialValue: 'Aerial view of community village project',
      fieldset: 'homeHero',
    }),
    defineField({
      name: 'homeStats',
      title: 'Home Stats',
      type: 'array',
      description: 'Stat numbers and labels displayed in the stats bar.',
      initialValue: [
        { number: '12,000+', label: 'Lives Impacted' },
        { number: '40+', label: 'Rural Villages Served' },
        { number: '250+', label: 'Active Volunteers' },
        { number: '85%', label: 'Direct Fund Allocation' },
      ],
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
      fieldset: 'homeStats',
    }),
    defineField({
      name: 'homeAboutEyebrow',
      title: 'Home About Eyebrow',
      type: 'string',
      description: 'Eyebrow label above the homepage about section.',
      initialValue: 'Who We Are',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutTitle',
      title: 'Home About Title',
      type: 'string',
      description: 'Heading for the homepage about preview section.',
      initialValue: 'Uniting Care and Knowledge to Build Sustainable Livelihoods',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutImage',
      title: 'Home About Image',
      type: 'image',
      description: 'Image displayed in the homepage about preview.',
      options: {
        hotspot: true,
      },
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutImageAlt',
      title: 'Home About Image Alt Text',
      type: 'string',
      description: 'Alt text for the about preview image.',
      initialValue: 'Community learning initiative',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutInceptionYear',
      title: 'Home About Inception Year',
      type: 'string',
      description: 'Year shown in the about image overlay.',
      initialValue: '2005',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutInceptionLabel',
      title: 'Home About Inception Label',
      type: 'string',
      description: 'Label shown below the inception year in the image overlay.',
      initialValue: 'Inception Year',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeAboutLinkLabel',
      title: 'Home About Link Label',
      type: 'string',
      description: 'Link label for the about section CTA.',
      initialValue: 'Read Our Full Story',
      fieldset: 'homeAbout',
    }),
    defineField({
      name: 'homeTransparencyEyebrow',
      title: 'Home Transparency Eyebrow',
      type: 'string',
      description: 'Eyebrow label above the transparency section.',
      initialValue: 'Transparency',
      fieldset: 'homeTransparency',
    }),
    defineField({
      name: 'homeTransparencyTitle',
      title: 'Home Transparency Title',
      type: 'string',
      description: 'Headline for the transparency section.',
      initialValue: '85% of Funds Go Directly to Program Execution',
      fieldset: 'homeTransparency',
    }),
    defineField({
      name: 'homeTransparencyDescription',
      title: 'Home Transparency Description',
      type: 'text',
      description: 'Paragraph copy under the transparency headline.',
      initialValue:
        'We maintain strict accountability. Administrative and fundraising costs are kept to a bare minimum (15% combined) to ensure that donations directly support grassroots execution in villages and slums.',
      fieldset: 'homeTransparency',
    }),
    defineField({
      name: 'homeTransparencyBars',
      title: 'Home Transparency Bars',
      type: 'array',
      description: 'Progress bar labels and values for transparency metrics.',
      initialValue: [
        {
          label: 'Direct Program Execution',
          value: '85%',
          width: 85,
          color: 'bg-teal-600',
        },
        {
          label: 'Administrative Management & Support',
          value: '10%',
          width: 10,
          color: 'bg-slate-400',
        },
        {
          label: 'Development & Fundraising',
          value: '5%',
          width: 5,
          color: 'bg-slate-300',
        },
      ],
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
      fieldset: 'homeTransparency',
    }),
    defineField({
      name: 'homeTransparencyBadges',
      title: 'Home Transparency Badges',
      type: 'array',
      description: 'Badge titles and descriptions shown next to the bars.',
      initialValue: [
        {
          title: 'Tax Exemptions',
          description:
            'Donations qualify for valid 80G tax exemptions under Indian Trust Registration acts.',
        },
        {
          title: 'Minimal Overhead',
          description:
            'Strict audit standards ensure funds are utilized with maximal efficiency.',
        },
        {
          title: 'Annual Reports',
          description:
            'Verified balance sheets, annual project reviews, and medical camp summaries are published transparently for public auditing.',
        },
      ],
      of: [
        {
          type: 'object',
          name: 'transparencyBadge',
          title: 'Transparency Badge',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
      fieldset: 'homeTransparency',
    }),
    defineField({
      name: 'homeTestimonialsEyebrow',
      title: 'Home Testimonials Eyebrow',
      type: 'string',
      description: 'Eyebrow label above the testimonials section.',
      initialValue: 'Our Impact',
      fieldset: 'homeTestimonials',
    }),
    defineField({
      name: 'homeTestimonialsTitle',
      title: 'Home Testimonials Title',
      type: 'string',
      description: 'Heading for the testimonials section.',
      initialValue: 'Stories of Direct Hope',
      fieldset: 'homeTestimonials',
    }),
    defineField({
      name: 'homeTestimonialsDescription',
      title: 'Home Testimonials Description',
      type: 'text',
      description: 'Supporting paragraph under the testimonials heading.',
      initialValue:
        'Real voices from families, students, and elders whom IKC Foundation programs have had the privilege to serve.',
      fieldset: 'homeTestimonials',
    }),
    defineField({
      name: 'homeTestimonials',
      title: 'Home Testimonials',
      type: 'array',
      description: 'Quotes, names, and roles for the testimonials list.',
      initialValue: [
        {
          quote:
            "The free health camp in our village diagnosed my mother's cardiac condition just in time. The medication support provided by IKC has been a blessing.",
          author: 'Ramesh Mondal',
          role: 'Farmer, Sundarbans Region',
        },
        {
          quote:
            'Thanks to the IKC study fellowship, I can continue my college education without placing a financial burden on my father.',
          author: 'Priya Sharma',
          role: 'Science Undergraduate Student',
        },
      ],
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
      fieldset: 'homeTestimonials',
    }),
    defineField({
      name: 'homeCommitmentTitle',
      title: 'Home Commitment Title',
      type: 'string',
      description: 'Attribution label under the quote banner divider line.',
      initialValue: 'Our Commitment',
      fieldset: 'homeQuoteBanner',
    }),
    defineField({
      name: 'homeCommitmentDescription',
      title: 'Home Commitment Description',
      type: 'text',
      description: 'Italic quote text in the homepage quote banner.',
      initialValue:
        'We believe that real change begins with localized, transparent, and direct community care.',
      fieldset: 'homeQuoteBanner',
    }),
    defineField({
      name: 'homeCommitmentImage',
      title: 'Home Commitment Image',
      type: 'image',
      description: 'Background image for the homepage quote banner.',
      options: {
        hotspot: true,
      },
      fieldset: 'homeQuoteBanner',
    }),
    defineField({
      name: 'homeCommitmentImageAlt',
      title: 'Home Commitment Image Alt Text',
      type: 'string',
      description: 'Alt text for the quote banner background image.',
      initialValue: 'Rural outreach community support',
      fieldset: 'homeQuoteBanner',
    }),
    defineField({
      name: 'homeCtaEyebrow',
      title: 'Home CTA Eyebrow',
      type: 'string',
      description: 'Eyebrow label above the homepage CTA section.',
      initialValue: 'Join Our Outreach',
      fieldset: 'homeCta',
    }),
    defineField({
      name: 'homeCtaTitle',
      title: 'Home CTA Title',
      type: 'string',
      description: 'Headline for the homepage CTA section.',
      initialValue: 'Become Part of the Change Today',
      fieldset: 'homeCta',
    }),
    defineField({
      name: 'homeCtaDescription',
      title: 'Home CTA Description',
      type: 'text',
      description: 'Supporting CTA paragraph on the homepage.',
      initialValue:
        'Your involvement helps us expand our mobile health clinics, build learning classrooms, and protect regional ecology.',
      fieldset: 'homeCta',
    }),
    defineField({
      name: 'homeCtaPrimaryLabel',
      title: 'Home CTA Primary Button Label',
      type: 'string',
      description: 'Label for the primary CTA button.',
      initialValue: 'Inquire & Volunteer',
      fieldset: 'homeCta',
    }),
    defineField({
      name: 'homeCtaSecondaryLabel',
      title: 'Home CTA Secondary Button Label',
      type: 'string',
      description: 'Label for the secondary CTA button.',
      initialValue: 'Learn More About IKC',
      fieldset: 'homeCta',
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
      name: 'homeProgramsEyebrow',
      title: 'Home Programs Eyebrow',
      type: 'string',
      description: 'Eyebrow label above the homepage programs section.',
      initialValue: 'Our Programs',
      fieldset: 'homePrograms',
    }),
    defineField({
      name: 'programsIntroTitle',
      title: 'Programs Intro Title',
      type: 'string',
      description: 'Heading for the homepage programs section.',
      initialValue: 'Core Fields of Active Engagement',
      fieldset: 'homePrograms',
    }),
    defineField({
      name: 'programsIntroDescription',
      title: 'Programs Intro Description',
      type: 'text',
      description: 'Supporting paragraph for the homepage programs section.',
      initialValue:
        'Direct grassroots interventions seeking to address basic life needs, educational growth, and ecological balance.',
      fieldset: 'homePrograms',
    }),
    defineField({
      name: 'homeProgramsCardLabel',
      title: 'Home Programs Card Label',
      type: 'string',
      description: 'Small label shown on each homepage program card.',
      initialValue: 'Active Program',
      fieldset: 'homePrograms',
    }),
    defineField({
      name: 'homeProgramsCardLinkAriaLabel',
      title: 'Home Programs Card Link Aria Label',
      type: 'string',
      description: 'Aria label for the program card arrow link.',
      initialValue: 'View program details',
      fieldset: 'homePrograms',
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