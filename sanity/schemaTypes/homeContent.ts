import { defineField, defineType } from 'sanity';

export const homeContent = defineType({
  name: 'homeContent',
  title: 'Home Page Content',
  type: 'document',
  fieldsets: [
    {
      name: 'heroSettings',
      title: 'Hero Settings',
      description: 'Hero headline, copy, and CTA labels.',
    },
    {
      name: 'statsBar',
      title: 'Stats Bar',
      description: 'Visibility toggle for the stats bar.',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      description: 'Visibility toggle for the about preview section.',
    },
    {
      name: 'programsSection',
      title: 'Programs Section',
      description: 'Visibility toggle for the programs grid section.',
    },
    {
      name: 'transparencySection',
      title: 'Transparency Section',
      description: 'Visibility toggle for the transparency section.',
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials / Stories',
      description: 'Visibility toggle for the testimonials section.',
    },
    {
      name: 'visionMissionSection',
      title: 'Vision & Mission',
      description: 'Vision/Mission copy and icon selections.',
    },
    {
      name: 'quoteBannerSection',
      title: 'Quote Banner',
      description: 'Quote banner copy and visibility.',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
      description: 'CTA headline, copy, and visibility.',
    },
  ],
  fields: [
    defineField({
      name: 'showHeroSection',
      title: 'Show Hero Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the hero section from the homepage.',
      initialValue: true,
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main hero headline on the homepage.',
      initialValue: 'Empowering Communities Through Knowledge & Care',
      validation: (Rule) => Rule.required(),
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Secondary hero line below the headline.',
      initialValue:
        'Dedicated to holistic social welfare, learning excellence, and healthcare access.',
      validation: (Rule) => Rule.required(),
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Extended hero paragraph on the homepage.',
      initialValue:
        'IKC Foundation is a registered charitable trust creating sustainable, grassroots changes in education, healthcare, environment, and rural livelihood support.',
      validation: (Rule) => Rule.required(),
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Hero Primary CTA Label',
      type: 'string',
      description: 'Label for the primary hero button linking to About.',
      initialValue: 'Our Mission',
      validation: (Rule) => Rule.required(),
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      description: 'Label for the secondary hero button linking to Contact.',
      initialValue: 'Support Us',
      validation: (Rule) => Rule.required(),
      fieldset: 'heroSettings',
    }),
    defineField({
      name: 'showStatsSection',
      title: 'Show Stats Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the stats counter bar from the homepage.',
      initialValue: true,
      fieldset: 'statsBar',
    }),
    defineField({
      name: 'showAboutSection',
      title: 'Show About Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the about preview section on the homepage.',
      initialValue: true,
      fieldset: 'aboutSection',
    }),
    defineField({
      name: 'showProgramsSection',
      title: 'Show Programs Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the programs grid section on the homepage.',
      initialValue: true,
      fieldset: 'programsSection',
    }),
    defineField({
      name: 'showTransparencySection',
      title: 'Show Transparency Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the transparency section on the homepage.',
      initialValue: true,
      fieldset: 'transparencySection',
    }),
    defineField({
      name: 'showTestimonialsSection',
      title: 'Show Testimonials Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the testimonials section on the homepage.',
      initialValue: true,
      fieldset: 'testimonialsSection',
    }),
    defineField({
      name: 'visionMissionEyebrow',
      title: 'Vision & Mission Eyebrow',
      type: 'string',
      description: 'Small eyebrow label above the Vision & Mission cards.',
      initialValue: 'Vision & Mission',
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Section Title',
      type: 'string',
      description: 'Heading for the Vision card on the homepage.',
      initialValue: 'Our Vision',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text',
      description: 'Body text for the Vision card on the homepage.',
      initialValue:
        'To build an inclusive, knowledgeable, and healthy society where every individual has access to opportunities for a dignified and empowered life.',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'visionIcon',
      title: 'Vision Icon',
      type: 'string',
      description: 'Icon name for the Vision card (Lucide icon name).',
      initialValue: 'Target',
      options: {
        list: [
          { title: 'Target', value: 'Target' },
          { title: 'Sparkles', value: 'Sparkles' },
          { title: 'Heart', value: 'Heart' },
          { title: 'Users', value: 'Users' },
          { title: 'Leaf', value: 'Leaf' },
          { title: 'Award', value: 'Award' },
          { title: 'GraduationCap', value: 'GraduationCap' },
          { title: 'Ambulance', value: 'Ambulance' },
          { title: 'AlertTriangle', value: 'AlertTriangle' },
          { title: 'Handshake', value: 'Handshake' },
        ],
      },
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Section Title',
      type: 'string',
      description: 'Heading for the Mission card on the homepage.',
      initialValue: 'Our Mission',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      description: 'Body text for the Mission card on the homepage.',
      initialValue:
        'To drive direct, impactful social initiatives in rural and underprivileged communities through education, healthcare camps, and ecological conservation projects.',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'missionIcon',
      title: 'Mission Icon',
      type: 'string',
      description: 'Icon name for the Mission card (Lucide icon name).',
      initialValue: 'Sparkles',
      options: {
        list: [
          { title: 'Sparkles', value: 'Sparkles' },
          { title: 'Target', value: 'Target' },
          { title: 'Heart', value: 'Heart' },
          { title: 'Users', value: 'Users' },
          { title: 'Leaf', value: 'Leaf' },
          { title: 'Award', value: 'Award' },
          { title: 'GraduationCap', value: 'GraduationCap' },
          { title: 'Ambulance', value: 'Ambulance' },
          { title: 'AlertTriangle', value: 'AlertTriangle' },
          { title: 'Handshake', value: 'Handshake' },
        ],
      },
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'showVisionMissionSection',
      title: 'Show Vision & Mission Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the Vision & Mission cards section.',
      initialValue: true,
      fieldset: 'visionMissionSection',
    }),
    defineField({
      name: 'commitmentTitle',
      title: 'Commitment Section Title',
      type: 'string',
      description: 'Attribution label under the quote banner divider line.',
      initialValue: 'Our Commitment',
      validation: (Rule) => Rule.required(),
      fieldset: 'quoteBannerSection',
    }),
    defineField({
      name: 'commitmentDescription',
      title: 'Commitment Description',
      type: 'text',
      description: 'Italic quote text in the quote banner section.',
      initialValue:
        'We believe that real change begins with localized, transparent, and direct community care.',
      validation: (Rule) => Rule.required(),
      fieldset: 'quoteBannerSection',
    }),
    defineField({
      name: 'showQuoteBannerSection',
      title: 'Show Quote Banner Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the compact quote banner section.',
      initialValue: true,
      fieldset: 'quoteBannerSection',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      description: 'Main CTA headline on the homepage.',
      initialValue: 'Ready to Make a Difference?',
      validation: (Rule) => Rule.required(),
      fieldset: 'ctaSection',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      description: 'Supporting CTA paragraph on the homepage.',
      initialValue:
        'Your involvement helps us expand our mobile health clinics, build learning classrooms, and protect regional ecology.',
      validation: (Rule) => Rule.required(),
      fieldset: 'ctaSection',
    }),
    defineField({
      name: 'showCtaSection',
      title: 'Show CTA Section?',
      type: 'boolean',
      description:
        'Toggle this off to hide the call to action section on the homepage.',
      initialValue: true,
      fieldset: 'ctaSection',
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
