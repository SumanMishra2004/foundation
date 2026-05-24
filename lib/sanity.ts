import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-05-24',
  useCdn: true,
  token,
});

// Fetch functions
export async function fetchTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    image {
      asset -> {
        url
      }
    }
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
    title,
    bio,
    image {
      asset -> {
        url
      }
    }
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
    details
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
