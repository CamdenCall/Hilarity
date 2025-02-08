import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[_type == "job" && lower(name) match $jobName] {
    name,
    questions,
    longDescription
  }`;
const options = { next: { revalidate: 30 } };

export async function fetchSanityData(jobName: string): Promise<SanityDocument[]> {
    try {
        const result = await client.fetch<SanityDocument[]>(POSTS_QUERY, { jobName: jobName }, options);
        return result;
    } catch (error) {
        throw new Error("Failed to load questions.");
    }
}