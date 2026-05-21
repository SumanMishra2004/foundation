import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

function resolveProjectId() {
  const value = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return value && !["placeholder", "your_project_id"].includes(value)
    ? value
    : "o7jlk18r";
}

const projectId = resolveProjectId();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "lorem-summit",
  title: "Lorem Summit 2025",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
