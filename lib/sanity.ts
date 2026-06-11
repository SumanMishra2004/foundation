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

export interface HomeContent {
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroPrimaryCtaLabel?: string;
  heroSecondaryCtaLabel?: string;
  visionTitle?: string;
  visionDescription?: string;
  visionIcon?: string;
  missionTitle?: string;
  missionDescription?: string;
  missionIcon?: string;
  visionMissionEyebrow?: string;
  commitmentTitle?: string;
  commitmentDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  showHeroSection?: boolean;
  showStatsSection?: boolean;
  showAboutSection?: boolean;
  showProgramsSection?: boolean;
  showTransparencySection?: boolean;
  showTestimonialsSection?: boolean;
  showVisionMissionSection?: boolean;
  showQuoteBannerSection?: boolean;
  showCtaSection?: boolean;
}

export interface SiteSettings {
  siteName?: string;
  tagline?: string;
  metaTitle?: string;
  metaDescription?: string;
  logo?: any;
  navLinks?: Array<{ label?: string; href?: string }>;
  contactAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactHours?: string;
  footerDescription?: string;
  footerQuote?: string;
  focusAreas?: string[];
  homeHeroEyebrow?: string;
  homeHeroImage?: any;
  homeHeroImageAlt?: string;
  homeStats?: Array<{ number?: string; label?: string }>;
  homeAboutEyebrow?: string;
  homeAboutTitle?: string;
  homeAboutImage?: any;
  homeAboutImageAlt?: string;
  homeAboutInceptionYear?: string;
  homeAboutInceptionLabel?: string;
  homeAboutLinkLabel?: string;
  homeProgramsEyebrow?: string;
  programsIntroTitle?: string;
  programsIntroDescription?: string;
  homeProgramsCardLabel?: string;
  homeProgramsCardLinkAriaLabel?: string;
  homeTransparencyEyebrow?: string;
  homeTransparencyTitle?: string;
  homeTransparencyDescription?: string;
  homeTransparencyBars?: Array<{
    label?: string;
    value?: string;
    width?: number;
    color?: string;
  }>;
  homeTransparencyBadges?: Array<{
    title?: string;
    description?: string;
  }>;
  homeTestimonialsEyebrow?: string;
  homeTestimonialsTitle?: string;
  homeTestimonialsDescription?: string;
  homeTestimonials?: Array<{
    quote?: string;
    author?: string;
    role?: string;
  }>;
  homeCommitmentTitle?: string;
  homeCommitmentDescription?: string;
  homeCommitmentImage?: any;
  homeCommitmentImageAlt?: string;
  homeCtaEyebrow?: string;
  homeCtaTitle?: string;
  homeCtaDescription?: string;
  homeCtaPrimaryLabel?: string;
  homeCtaSecondaryLabel?: string;
  aboutHeroEyebrow?: string;
  aboutHeroImage?: any;
  aboutStoryEyebrow?: string;
  aboutStoryTitle?: string;
  aboutStoryPoints?: string[];
  aboutStoryImage?: any;
  aboutMilestones?: Array<{ year?: string; title?: string; desc?: string }>;
  aboutValuesTitle?: string;
  aboutValuesDescription?: string;
  aboutValues?: Array<{
    title?: string;
    description?: string;
    icon?: string;
  }>;
  aboutWhatWeDoTitle?: string;
  aboutWhatWeDoDescription?: string;
  aboutWhatWeDo?: Array<{
    title?: string;
    description?: string;
    icon?: string;
  }>;
  aboutQuoteImage?: any;
  aboutCommitmentTitle?: string;
  aboutCommitmentDescription?: string;
  programsHeroEyebrow?: string;
  programsHeroImage?: any;
  programsHeroTitle?: string;
  programsHeroDescription?: string;
  programsCtaTitle?: string;
  programsCtaDescription?: string;
  teamHeroEyebrow?: string;
  teamHeroImage?: any;
  teamHeroTitle?: string;
  teamHeroDescription?: string;
  teamSectionTitle?: string;
  teamSectionDescription?: string;
  teamCtaTitle?: string;
  teamCtaDescription?: string;
  advisoryHeroEyebrow?: string;
  advisoryHeroImage?: any;
  advisoryHeroTitle?: string;
  advisoryHeroDescription?: string;
  advisorySectionTitle?: string;
  advisorySectionDescription?: string;
  advisoryCtaTitle?: string;
  advisoryCtaDescription?: string;
  contactHeroEyebrow?: string;
  contactHeroTitle?: string;
  contactHeroDescription?: string;
  contactOfficeTitle?: string;
  contactOfficeDescription?: string;
  contactFormTitle?: string;
  contactFormDescription?: string;
  contactFaqs?: Array<{ q?: string; a?: string }>;
}

// Fetch functions
export async function fetchTeamMembers() {
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
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function fetchAdvisoryBoard() {
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
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching advisory board:', error);
    return [];
  }
}

export async function fetchPrograms() {
  const query = `*[_type == "program"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    color,
    link,
    details,
    order
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export async function fetchGallery() {
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
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return null;
  }
}

export async function fetchHomeContent(): Promise<HomeContent | null> {
  const query = `*[_type == "homeContent"][0] {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroPrimaryCtaLabel,
    heroSecondaryCtaLabel,
    visionTitle,
    visionDescription,
    visionIcon,
    missionTitle,
    missionDescription,
    missionIcon,
    visionMissionEyebrow,
    commitmentTitle,
    commitmentDescription,
    ctaTitle,
    ctaDescription,
    showHeroSection,
    showStatsSection,
    showAboutSection,
    showProgramsSection,
    showTransparencySection,
    showTestimonialsSection,
    showVisionMissionSection,
    showQuoteBannerSection,
    showCtaSection
  }`;

  try {
    const data = await client.fetch<HomeContent>(query);
    return data;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
}

export async function fetchAboutContent() {
  const query = `*[_type == "aboutContent"][0] {
    heroTitle,
    heroSubtitle,
    introText,
    visionTitle,
    visionDescription,
    missionTitle,
    missionDescription,
    valuesList[] {
      title,
      description,
      icon,
      color
    },
    whatWeDoList[] {
      title,
      description,
      icon
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching about content:', error);
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
    contactAddress,
    contactEmail,
    contactPhone,
    contactHours,
    footerDescription,
    footerQuote,
    focusAreas,
    homeHeroEyebrow,
    homeHeroImage,
    homeHeroImageAlt,
    homeStats[]{number, label},
    homeAboutEyebrow,
    homeAboutTitle,
    homeAboutImage,
    homeAboutImageAlt,
    homeAboutInceptionYear,
    homeAboutInceptionLabel,
    homeAboutLinkLabel,
    homeProgramsEyebrow,
    programsIntroTitle,
    programsIntroDescription,
    homeProgramsCardLabel,
    homeProgramsCardLinkAriaLabel,
    homeTransparencyEyebrow,
    homeTransparencyTitle,
    homeTransparencyDescription,
    homeTransparencyBars[]{label, value, width, color},
    homeTransparencyBadges[]{title, description},
    homeTestimonialsEyebrow,
    homeTestimonialsTitle,
    homeTestimonialsDescription,
    homeTestimonials[]{quote, author, role},
    homeCommitmentTitle,
    homeCommitmentDescription,
    homeCommitmentImage,
    homeCommitmentImageAlt,
    homeCtaEyebrow,
    homeCtaTitle,
    homeCtaDescription,
    homeCtaPrimaryLabel,
    homeCtaSecondaryLabel,
    aboutHeroEyebrow,
    aboutHeroImage,
    aboutStoryEyebrow,
    aboutStoryTitle,
    aboutStoryPoints,
    aboutStoryImage,
    aboutMilestones[]{year, title, desc},
    aboutValuesTitle,
    aboutValuesDescription,
    aboutValues[]{title, description, icon},
    aboutWhatWeDoTitle,
    aboutWhatWeDoDescription,
    aboutWhatWeDo[]{title, description, icon},
    aboutQuoteImage,
    aboutCommitmentTitle,
    aboutCommitmentDescription,
    programsHeroEyebrow,
    programsHeroImage,
    programsHeroTitle,
    programsHeroDescription,
    programsCtaTitle,
    programsCtaDescription,
    teamHeroEyebrow,
    teamHeroImage,
    teamHeroTitle,
    teamHeroDescription,
    teamSectionTitle,
    teamSectionDescription,
    teamCtaTitle,
    teamCtaDescription,
    advisoryHeroEyebrow,
    advisoryHeroImage,
    advisoryHeroTitle,
    advisoryHeroDescription,
    advisorySectionTitle,
    advisorySectionDescription,
    advisoryCtaTitle,
    advisoryCtaDescription,
    contactHeroEyebrow,
    contactHeroTitle,
    contactHeroDescription,
    contactOfficeTitle,
    contactOfficeDescription,
    contactFormTitle,
    contactFormDescription,
    contactFaqs[]{q, a}
  }`;

  try {
    const data = await client.fetch<SiteSettings>(query);
    return data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
