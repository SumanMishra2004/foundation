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

// Fetch functions
export async function fetchTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
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

export async function fetchHomeContent() {
  const query = `*[_type == "homeContent"][0] {
    heroTitle,
    heroSubtitle,
    heroDescription,
    visionTitle,
    visionDescription,
    missionTitle,
    missionDescription,
    commitmentTitle,
    commitmentDescription,
    ctaTitle,
    ctaDescription
  }`;

  try {
    const data = await client.fetch(query);
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

export async function fetchSiteSettings() {
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
    homeStats[]{number, label},
    homeAboutEyebrow,
    homeAboutTitle,
    homeAboutImage,
    homeTransparencyTitle,
    homeTransparencyDescription,
    homeTransparencyBars[]{label, value, width, color},
    homeTestimonials[]{quote, author, role},
    homeCommitmentTitle,
    homeCommitmentDescription,
    homeCommitmentImage,
    homeCtaTitle,
    homeCtaDescription,
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
    programsIntroTitle,
    programsIntroDescription,
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
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
