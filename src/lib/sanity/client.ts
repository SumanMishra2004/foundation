import { createClient } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

function resolveProjectId() {
  const value = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return value && !["placeholder", "your_project_id"].includes(value)
    ? value
    : "o7jlk18r";
}

export const projectId = resolveProjectId();
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
