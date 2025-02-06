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
        console.log("Fetching data for jobName:", jobName);
        const result = await client.fetch<SanityDocument[]>(POSTS_QUERY, { jobName: jobName }, options);
        console.log("Fetch result:", result);
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to load questions.");
    }
}