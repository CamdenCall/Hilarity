import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "0qfjzcek",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.API_KEY
});