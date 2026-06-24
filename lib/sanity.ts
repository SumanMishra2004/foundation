import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '90fr282e';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-05-24',
  useCdn: false, // Set to false to bypass CDN cache for real-time updates in development
  token,
});

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface HomeContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroImage?: SanityImage;
  heroImageAlt?: string;
  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaLink?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaLink?: string;
  showHeroSection?: boolean;
  showStatsSection?: boolean;
  stats?: Array<{ number?: string; label?: string }>;
  showAboutSection?: boolean;
  aboutEyebrow?: string;
  aboutTitle?: string;
  aboutImage?: SanityImage;
  aboutImageAlt?: string;
  aboutInceptionYear?: string;
  aboutInceptionLabel?: string;
  aboutLinkLabel?: string;
  aboutLinkHref?: string;
  showProgramsSection?: boolean;
  programsEyebrow?: string;
  programsIntroTitle?: string;
  programsIntroDescription?: string;
  programsCardLabel?: string;
  programsCardLinkAriaLabel?: string;
  programsLinkHref?: string;
  showTransparencySection?: boolean;
  transparencyEyebrow?: string;
  transparencyTitle?: string;
  transparencyDescription?: string;
  transparencyBars?: Array<{
    label?: string;
    value?: string;
    width?: number;
    color?: string;
  }>;
  transparencyBadges?: Array<{
    title?: string;
    description?: string;
  }>;
  showTestimonialsSection?: boolean;
  testimonialsEyebrow?: string;
  testimonialsTitle?: string;
  testimonialsDescription?: string;
  testimonials?: Array<{
    quote?: string;
    author?: string;
    role?: string;
  }>;
  showVisionMissionSection?: boolean;
  visionTitle?: string;
  visionDescription?: string;
  visionIcon?: string;
  missionTitle?: string;
  missionDescription?: string;
  missionIcon?: string;
  visionMissionEyebrow?: string;
  showQuoteBannerSection?: boolean;
  commitmentTitle?: string;
  commitmentDescription?: string;
  commitmentImage?: SanityImage;
  commitmentImageAlt?: string;
  showCtaSection?: boolean;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryLink?: string;
}

export interface SiteSettings {
  siteName?: string;
  tagline?: string;
  metaTitle?: string;
  metaDescription?: string;
  logo?: SanityImage;
  navLinks?: Array<{ label?: string; href?: string }>;
  navbarCtaLabel?: string;
  navbarCtaLink?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactHours?: string;
  footerDescription?: string;
  footerQuote?: string;
  focusAreas?: string[];
  footerQuickLinks?: Array<{ label?: string; href?: string }>;
  footerBottomLinks?: Array<{ label?: string; href?: string }>;
}

export interface AboutContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: SanityImage;
  storyEyebrow?: string;
  storyTitle?: string;
  introText?: string;
  storyPoints?: string[];
  storyImage?: SanityImage;
  visionTitle?: string;
  visionDescription?: string;
  missionTitle?: string;
  missionDescription?: string;
  historyEyebrow?: string;
  historyTitle?: string;
  historyDescription?: string;
  milestones?: Array<{ year?: string; title?: string; desc?: string }>;
  valuesTitle?: string;
  valuesDescription?: string;
  valuesList?: Array<{
    title?: string;
    description?: string;
    icon?: string;
  }>;
  whatWeDoTitle?: string;
  whatWeDoDescription?: string;
  whatWeDoList?: Array<{
    title?: string;
    description?: string;
    icon?: string;
  }>;
  whatWeDoLinkLabel?: string;
  whatWeDoLinkHref?: string;
}

export interface ProgramsPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: SanityImage;
  introTitle?: string;
  introDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryLink?: string;
}

export interface TeamPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: SanityImage;
  sectionTitle?: string;
  sectionDescription?: string;
  fallbackStudioLabel?: string;
  fallbackStudioLink?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryLink?: string;
}

export interface AdvisoryPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: SanityImage;
  stats?: Array<{
    number?: string;
    label?: string;
    icon?: string;
  }>;
  sectionTitle?: string;
  sectionDescription?: string;
  fallbackStudioLabel?: string;
  fallbackStudioLink?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryLink?: string;
}

export interface ContactPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  officeSectionTitle?: string;
  officeSectionDescription?: string;
  contactFormTitle?: string;
  contactFormDescription?: string;
  contactFormSubmitLabel?: string;
  contactFaqs?: Array<{ q?: string; a?: string }>;
}

export interface EventItem {
  title: string;
  date: string;
  description: string;
  venue: string;
  objective: string;
  timing: string;
  images: SanityImage[];
}

export interface ProgramItem {
  _id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  link?: string;
  order?: number;
  events?: EventItem[];
}


export interface TeamMemberItem {
  _id: string;
  name: string;
  role: string;
  designation?: string;
  organization?: string;
  expertise?: string;
  email?: string;
  linkedinUrl?: string;
  bio: string;
  image?: SanityImage;
  order?: number;
}

export interface AdvisoryMemberItem {
  _id: string;
  name: string;
  designation?: string;
  organization?: string;
  expertise?: string;
  linkedinUrl?: string;
  bio: string;
  image?: SanityImage;
  order?: number;
}

// Fetch functions
export async function fetchTeamMembers(): Promise<TeamMemberItem[]> {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    designation,
    organization,
    expertise,
    email,
    linkedinUrl,
    bio,
    image,
    order
  }`;

  try {
    const data = await client.fetch<TeamMemberItem[]>(query);
    return data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function fetchAdvisoryBoard(): Promise<AdvisoryMemberItem[]> {
  const query = `*[_type == "advisoryMember"] | order(order asc) {
    _id,
    name,
    designation,
    organization,
    expertise,
    linkedinUrl,
    bio,
    image,
    order
  }`;

  try {
    const data = await client.fetch<AdvisoryMemberItem[]>(query);
    return data;
  } catch (error) {
    console.error('Error fetching advisory board:', error);
    return [];
  }
}

export async function fetchPrograms(): Promise<ProgramItem[]> {
  const query = `*[_type == "program"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    color,
    link,
    order,
    events[]{
      title,
      date,
      description,
      venue,
      objective,
      timing,
      images
    }
  }`;


  try {
    const data = await client.fetch<ProgramItem[]>(query);
    return data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export interface GalleryContent {
  title?: string;
  images?: Array<SanityImage & {
    caption?: string;
    description?: string;
    year?: string;
    location?: string;
    alt?: string;
  }>;
}

export async function fetchGallery(): Promise<GalleryContent | null> {
  const query = `*[_type == "gallery"][0] {
    title,
    images[]{
      ...,
      caption,
      description,
      year,
      location,
      alt
    }
  }`;

  try {
    const data = await client.fetch<GalleryContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return null;
  }
}

export async function fetchHomeContent(): Promise<HomeContent | null> {
  const query = `*[_type == "homeContent"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    heroPrimaryCtaLabel,
    heroPrimaryCtaLink,
    heroSecondaryCtaLabel,
    heroSecondaryCtaLink,
    showHeroSection,
    showStatsSection,
    stats[]{number, label},
    showAboutSection,
    aboutEyebrow,
    aboutTitle,
    aboutImage,
    aboutImageAlt,
    aboutInceptionYear,
    aboutInceptionLabel,
    aboutLinkLabel,
    aboutLinkHref,
    showProgramsSection,
    programsEyebrow,
    programsIntroTitle,
    programsIntroDescription,
    programsCardLabel,
    programsCardLinkAriaLabel,
    programsLinkHref,
    showTransparencySection,
    transparencyEyebrow,
    transparencyTitle,
    transparencyDescription,
    transparencyBars[]{label, value, width, color},
    transparencyBadges[]{title, description},
    showTestimonialsSection,
    testimonialsEyebrow,
    testimonialsTitle,
    testimonialsDescription,
    testimonials[]{quote, author, role},
    showVisionMissionSection,
    visionTitle,
    visionDescription,
    visionIcon,
    missionTitle,
    missionDescription,
    missionIcon,
    visionMissionEyebrow,
    showQuoteBannerSection,
    commitmentTitle,
    commitmentDescription,
    commitmentImage,
    commitmentImageAlt,
    showCtaSection,
    ctaEyebrow,
    ctaTitle,
    ctaDescription,
    ctaPrimaryLabel,
    ctaPrimaryLink,
    ctaSecondaryLabel,
    ctaSecondaryLink
  }`;

  try {
    const data = await client.fetch<HomeContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
}

export async function fetchAboutContent(): Promise<AboutContent | null> {
  const query = `*[_type == "aboutContent"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,
    storyEyebrow,
    storyTitle,
    introText,
    storyPoints,
    storyImage,
    visionTitle,
    visionDescription,
    missionTitle,
    missionDescription,
    historyEyebrow,
    historyTitle,
    historyDescription,
    milestones[]{year, title, desc},
    valuesTitle,
    valuesDescription,
    valuesList[]{title, description, icon},
    whatWeDoTitle,
    whatWeDoDescription,
    whatWeDoList[]{title, description, icon},
    whatWeDoLinkLabel,
    whatWeDoLinkHref
  }`;

  try {
    const data = await client.fetch<AboutContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

export async function fetchProgramsPageContent(): Promise<ProgramsPageContent | null> {
  const query = `*[_type == "programsPageContent"][0] {
    heroEyebrow,
    heroTitle,
    heroDescription,
    heroImage,
    introTitle,
    introDescription,
    ctaTitle,
    ctaDescription,
    ctaPrimaryLabel,
    ctaPrimaryLink,
    ctaSecondaryLabel,
    ctaSecondaryLink
  }`;

  try {
    const data = await client.fetch<ProgramsPageContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching programs page content:', error);
    return null;
  }
}

export async function fetchTeamContent(): Promise<TeamPageContent | null> {
  const query = `*[_type == "teamPageContent"][0] {
    heroEyebrow,
    heroTitle,
    heroDescription,
    heroImage,
    sectionTitle,
    sectionDescription,
    fallbackStudioLabel,
    fallbackStudioLink,
    ctaTitle,
    ctaDescription,
    ctaPrimaryLabel,
    ctaPrimaryLink,
    ctaSecondaryLabel,
    ctaSecondaryLink
  }`;

  try {
    const data = await client.fetch<TeamPageContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching team content:', error);
    return null;
  }
}

export async function fetchAdvisoryContent(): Promise<AdvisoryPageContent | null> {
  const query = `*[_type == "advisoryPageContent"][0] {
    heroEyebrow,
    heroTitle,
    heroDescription,
    heroImage,
    stats[]{number, label, icon},
    sectionTitle,
    sectionDescription,
    fallbackStudioLabel,
    fallbackStudioLink,
    ctaTitle,
    ctaDescription,
    ctaPrimaryLabel,
    ctaPrimaryLink,
    ctaSecondaryLabel,
    ctaSecondaryLink
  }`;

  try {
    const data = await client.fetch<AdvisoryPageContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching advisory content:', error);
    return null;
  }
}

export async function fetchContactContent(): Promise<ContactPageContent | null> {
  const query = `*[_type == "contactPageContent"][0] {
    heroEyebrow,
    heroTitle,
    heroDescription,
    officeSectionTitle,
    officeSectionDescription,
    contactFormTitle,
    contactFormDescription,
    contactFormSubmitLabel,
    contactFaqs[]{q, a}
  }`;

  try {
    const data = await client.fetch<ContactPageContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching contact content:', error);
    return null;
  }
}

export async function fetchPageContent(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    description,
    content[] {
      ... 
    }
  }`;

  try {
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0] {
    siteName,
    tagline,
    metaTitle,
    metaDescription,
    logo,
    navLinks[]{label, href},
    navbarCtaLabel,
    navbarCtaLink,
    contactAddress,
    contactEmail,
    contactPhone,
    contactHours,
    footerDescription,
    footerQuote,
    focusAreas,
    footerQuickLinks[]{label, href},
    footerBottomLinks[]{label, href}
  }`;

  try {
    const data = await client.fetch<SiteSettings>(query);
    return data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
