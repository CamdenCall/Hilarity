import "./Jobs.scss"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
const POSTS_QUERY = `*[_type == "job" && !(_id in path("drafts.**"))]`;

const options = { next: { revalidate: 30 } };

export default async function JobBoard() {
  const jobs = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(jobs)
  return (
    <section>
      <div className="job-board">
        <div className="job-header">
          Career Board
        </div>
        <div className="jobs">
          {jobs.map((job) => (
            <div className="job" key={job.name}>
              <div className="details">
                <div className="-s18 -w600">{job.name}</div>
                <p className="s-16">{job.description}</p>
              </div>
              <a href={`/careers/${job.name.toLowerCase().replace(/ /g, '-')}`} className="apply -w600 gradient">
                Apply
                <img src="/images/link.svg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};