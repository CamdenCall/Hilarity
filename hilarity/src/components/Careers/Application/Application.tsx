"use client"
import "./Application.scss"
import { usePathname } from 'next/navigation'
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { useEffect, useState } from "react";

const POSTS_QUERY = `*[_type == "job" && lower(name) == $jobName] {
    questions
  }`;
const options = { next: { revalidate: 30 } };

function capitalizeFirstLetter(str: string | undefined) {
    if (str == null) {
      return null;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function JobApplication() {
    const pathname = usePathname();
    const jobName = pathname.split('/').pop()?.toLowerCase();
    const [questions, setQuestions] = useState<SanityDocument[]>([]);
    const [answers, setAnswers] = useState<{ question: string, value: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const result = await client.fetch<SanityDocument[]>(POSTS_QUERY, { jobName }, options);
            setQuestions(result);
            setLoading(false);
        }
        fetchData();
    }, [jobName]);

    const handleChange = (question: string, value: string) => {
        setAnswers(prevAnswers => {
            const existingQuestionIndex = prevAnswers.findIndex(answer => answer.question === question);
            if (existingQuestionIndex !== -1) {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[existingQuestionIndex] = { question, value };
                return updatedAnswers;
            } else {
                return [...prevAnswers, { question, value }];
            }
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const response = await fetch("/api/application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobName, answers }),
        });
    
        if (response.ok) {
          setStatusMessage("Application sent successfully");
        } else {
          setStatusMessage("Failed to send application");
        }
    };

    return (
        <section className="job-app">
            <h1 className="-s24 -w600 -white">{capitalizeFirstLetter(jobName)} Application</h1>
            <form className="form" onSubmit={handleSubmit}>
            {loading ? (
                <div className="spinner"></div>
            ) : questions.length > 0 && questions[0]?.questions ? (
                <>
                    {questions[0].questions.map((questionObj: { question: string, placeholder: string, _key: string }) => (
                        <div className="field" key={questionObj._key}>
                            <label>{questionObj.question}</label>
                            <input
                            type="text"
                            placeholder={questionObj.placeholder}
                            required
                            onChange={(e) => handleChange(questionObj.question, e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                    {statusMessage && (<p className="status-text -s14">{statusMessage}</p>)}
                </>
            ) : (
                <p>No questions available.</p>
            )}
            </form>
        </section>
    );
}