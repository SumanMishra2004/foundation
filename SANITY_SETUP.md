# Sanity CMS Setup Guide

## Overview
This website now uses **Sanity CMS** for content management instead of MongoDB. All website content (team members, programs, advisory board, pages) can be managed through Sanity's intuitive content platform.

## Quick Start

### 1. Create a Sanity Project

```bash
npm install -g @sanity/cli
sanity init
```

Follow the prompts and create a new project. Make note of your:
- **Project ID**
- **Dataset name** (usually "production")

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 3. Set Up Sanity Schemas

Create a new folder structure in your Sanity project:

```
sanity/
├── schemaTypes/
│   ├── teamMember.ts
│   ├── advisoryMember.ts
│   ├── program.ts
│   ├── homeContent.ts
│   └── page.ts
└── sanity.config.ts
```

### 4. Define Schema Types

#### Team Member Schema

```typescript
// sanity/schemaTypes/teamMember.ts
export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role/Position',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
};
```

#### Advisory Member Schema

```typescript
// sanity/schemaTypes/advisoryMember.ts
export const advisoryMember = {
  name: 'advisoryMember',
  title: 'Advisory Board Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title/Designation',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
};
```

#### Program Schema

```typescript
// sanity/schemaTypes/program.ts
export const program = {
  name: 'program',
  title: 'Program/Initiative',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon Name (lucide-react)',
      type: 'string',
      description: 'e.g., GraduationCap, Heart, Leaf',
    },
    {
      name: 'color',
      title: 'Gradient Color',
      type: 'string',
      description: 'e.g., from-blue-500 to-cyan-500',
    },
    {
      name: 'details',
      title: 'Program Details',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
```

#### Home Content Schema

```typescript
// sanity/schemaTypes/homeContent.ts
export const homeContent = {
  name: 'homeContent',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
    },
    {
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text',
    },
    {
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
    },
    {
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
    },
    {
      name: 'commitmentTitle',
      title: 'Commitment Title',
      type: 'string',
    },
    {
      name: 'commitmentDescription',
      title: 'Commitment Description',
      type: 'text',
    },
  ],
};
```

### 5. Migrate Existing Data

Copy your existing team and advisory board data from:
- `/data/team.js` → Create in Sanity
- `/data/advisory-Board/advisory.js` → Create in Sanity

Use the Sanity CLI or dashboard to import this data.

### 6. Update Queries

The `/lib/sanity.ts` file already has query functions. You may need to adjust them based on your specific schema setup:

```typescript
// Example query function
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
```

### 7. Deploy to Production

1. **Set up Sanity project deployment:**
   ```bash
   sanity deploy
   ```

2. **Add environment variables to your hosting:**
   - Vercel: Project Settings → Environment Variables
   - Other platforms: Add to `.env.production`

3. **Deploy your Next.js app:**
   ```bash
   npm run build
   npm start
   ```

## Features

### Content Management
- **Team Members**: Manage staff profiles, roles, and bios
- **Advisory Board**: Display distinguished advisory members
- **Programs**: Create and manage all program descriptions
- **Home Page**: Manage hero section and key messages

### Benefits
- **No code changes** needed to update content
- **Rich media support** for images
- **Version control** for all content changes
- **Real-time preview** of changes
- **User management** for multiple editors
- **Webhooks** for automated deployments

## Troubleshooting

### Images not loading?
- Ensure images are hosted on Sanity CDN
- Check URL format in queries

### Content not updating?
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Sanity project ID in `.env.local`

### API errors?
- Verify `SANITY_API_TOKEN` is valid
- Check dataset name matches your Sanity project
- Ensure project is public or token has correct permissions

## Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Integration](https://www.sanity.io/guides/nextjs)
- [Sanity Schema Reference](https://www.sanity.io/docs/schema-types)

## Support

For questions or issues:
1. Check Sanity documentation
2. Visit Sanity community forum
3. Contact your development team
