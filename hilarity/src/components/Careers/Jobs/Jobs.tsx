import "./Jobs.scss"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
const POSTS_QUERY = `*[_type == "job"]`;
const options = { next: { revalidate: 30 } };

const JobBoard = async () => {
    const jobs = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
      <section>
        <div className="job-board">
          <div className="job-header">
            Job Board
          </div>
          <div className="jobs">
            {jobs.map((job) => (
              <div className="job" key={job.name}>
                <div className="details">
                  <div className="-s18 -w600">{job.name}</div>
                  <p className="s-16">{job.description}</p>
                </div>
                <a href={job.url} className="apply -w600 gradient" target="_blank">
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
  
export default JobBoard;