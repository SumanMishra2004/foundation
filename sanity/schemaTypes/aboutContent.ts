import { defineField, defineType } from 'sanity';

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Page Content',
  type: 'document',
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero Header Section',
      description: 'Eyebrow, title, subtitle, and full-bleed image.',
    },
    {
      name: 'story',
      title: 'Our Background / Story',
      description: 'Historical detail points and background descriptions.',
    },
    {
      name: 'visionMission',
      title: 'Vision & Mission Statements',
      description: 'Core vision and mission headings and paragraphs.',
    },
    {
      name: 'milestonesTimeline',
      title: 'Milestones Timeline',
      description: 'Chronological timeline items.',
    },
    {
      name: 'coreValues',
      title: 'Core Values Section',
      description: 'Intro copy and values cards grid.',
    },
    {
      name: 'whatWeDo',
      title: 'What We Do Section',
      description: 'Our primary action spheres and CTA configurations.',
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'About IKC Trust',
      validation: (Rule) => Rule.required(),
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Who We Are & What We Stand For',
      validation: (Rule) => Rule.required(),
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      initialValue: 'IKC Foundation is a dedicated charitable trust driving inclusive growth, rural health, and learning accessibility.',
      validation: (Rule) => Rule.required(),
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'hero',
    }),

    // Story Section
    defineField({
      name: 'storyEyebrow',
      title: 'Story Eyebrow Label',
      type: 'string',
      initialValue: 'Our Background',
      fieldset: 'story',
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Section Title',
      type: 'string',
      initialValue: 'Merging Direct Care with Intellectual Development',
      fieldset: 'story',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      initialValue: 'Founded with a vision to merge direct compassionate care with scalable social knowledge, we operate medical camps, community centers, environmental projects, and academic fellowships across underprivileged regions.',
      validation: (Rule) => Rule.required(),
      fieldset: 'story',
    }),
    defineField({
      name: 'storyPoints',
      title: 'Direct Action Points List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        '85% direct-to-field program allocation ratio.',
        'Mobile health camps providing diagnosis, checkups, and free medicines.',
        'Fellowships and study grants to fund underprivileged girls\' higher education.',
        'Community afforestation projects and conservation drives.',
      ],
      fieldset: 'story',
    }),
    defineField({
      name: 'storyImage',
      title: 'Story Graphic / Image',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'story',
    }),

    // Vision & Mission
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      initialValue: 'Our Vision',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMission',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text',
      initialValue: 'To build a just, compassionate, and healthy society where every individual has access to opportunities for a dignified and empowered life.',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMission',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      initialValue: 'Our Mission',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMission',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      initialValue: 'To drive direct, impactful social initiatives in rural and underprivileged communities through education, healthcare camps, and ecological conservation projects.',
      validation: (Rule) => Rule.required(),
      fieldset: 'visionMission',
    }),

    // Milestones Timeline
    defineField({
      name: 'milestones',
      title: 'Historical Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'milestoneItem',
          title: 'Milestone Year Node',
          fields: [
            { name: 'year', title: 'Year', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'title', title: 'Milestone Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'desc', title: 'Short Description', type: 'text', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        { year: '2005', title: 'Trust Inception', desc: 'IKC Foundation registered as an official charitable trust in Newtown, Kolkata.' },
        { year: '2011', title: 'First Mobile Medical Camp', desc: 'Launched mobile diagnostics and medical camps to support rural areas in West Bengal.' },
        { year: '2018', title: 'Scholarship Foundation', desc: 'Started the learning scholarship program, funding education for over 500 underprivileged students.' },
        { year: '2023', title: 'Ecology Initiative', desc: 'Initiated regional forest protection and afforestation programs, planting over 20,000 trees.' },
        { year: '2026', title: 'Global Advisory Integration', desc: 'Formed a global academic advisory council to direct our programs and ensure global support.' },
      ],
      fieldset: 'milestonesTimeline',
    }),

    // Core Values Section
    defineField({
      name: 'valuesTitle',
      title: 'Values Title',
      type: 'string',
      initialValue: 'Our Foundation Values',
      fieldset: 'coreValues',
    }),
    defineField({
      name: 'valuesDescription',
      title: 'Values Section Description',
      type: 'text',
      initialValue: 'The core guidelines driving our volunteer deployments, fund management, and strategic projects.',
      fieldset: 'coreValues',
    }),
    defineField({
      name: 'valuesList',
      title: 'Core Values List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          title: 'Core Value',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Value Description', type: 'text', validation: (Rule) => Rule.required() },
            {
              name: 'icon',
              title: 'Icon (Lucide name)',
              type: 'string',
              description: 'Heart, Users, Zap, Target, Lightbulb, Sparkles',
              options: {
                list: [
                  { title: 'Heart', value: 'Heart' },
                  { title: 'Users', value: 'Users' },
                  { title: 'Zap', value: 'Zap' },
                  { title: 'Target', value: 'Target' },
                  { title: 'Lightbulb', value: 'Lightbulb' },
                  { title: 'Sparkles', value: 'Sparkles' },
                ],
              },
              initialValue: 'Sparkles',
            },
          ],
        },
      ],
      initialValue: [
        { title: 'Active Compassion', description: 'Approaching community needs with deep empathy and active care.', icon: 'Heart' },
        { title: 'Inclusive Empowerment', description: 'Providing equal opportunities to marginalized families without discrimination.', icon: 'Users' },
        { title: 'Grassroots Innovation', description: 'Utilizing creative, local resources to solve complex environmental and medical access problems.', icon: 'Zap' },
      ],
      fieldset: 'coreValues',
    }),

    // What We Do Section
    defineField({
      name: 'whatWeDoTitle',
      title: 'What We Do Section Title',
      type: 'string',
      initialValue: 'Primary Spheres of Action',
      fieldset: 'whatWeDo',
    }),
    defineField({
      name: 'whatWeDoDescription',
      title: 'What We Do Section Description',
      type: 'text',
      initialValue: 'Reaching communities with comprehensive support focusing on learning accessibility and fundamental healthcare.',
      fieldset: 'whatWeDo',
    }),
    defineField({
      name: 'whatWeDoList',
      title: 'What We Do Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'whatWeDoItem',
          title: 'What We Do Item',
          fields: [
            { name: 'title', title: 'Item Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Item Description', type: 'text', validation: (Rule) => Rule.required() },
            { name: 'icon', title: 'Emoji Icon', type: 'string', description: 'e.g. 🎓, 🏥, 👥, 🌱', validation: (Rule) => Rule.required() },
          ],
        },
      ],
      initialValue: [
        { title: 'Learning & Education Support', description: 'Distributing study kits, supporting rural schools, and funding academic fellowships.', icon: '🎓' },
        { title: 'Mobile Diagnostics & Health Camps', description: 'Providing primary clinical checkups, diagnosis, and medicine support.', icon: '🏥' },
        { title: 'Community & Women Empowerment', description: 'Creating local self-help groups, vocational training, and support networks.', icon: '👥' },
        { title: 'Eco-Preservation & Afforestation', description: 'Promoting community plantation drives, wildlife preservation, and clean water awareness.', icon: '🌱' },
      ],
      fieldset: 'whatWeDo',
    }),
    defineField({
      name: 'whatWeDoLinkLabel',
      title: 'What We Do CTA Button Label',
      type: 'string',
      initialValue: 'Explore Active Programs',
      fieldset: 'whatWeDo',
    }),
    defineField({
      name: 'whatWeDoLinkHref',
      title: 'What We Do CTA Button Link URL',
      type: 'string',
      initialValue: '/programs',
      fieldset: 'whatWeDo',
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
