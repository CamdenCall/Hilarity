"use client"
import "./Application.scss"
import { usePathname } from 'next/navigation'
import { type SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";
import { fetchSanityData } from "@/lib/application";
import JobDescription from "../JobDescription/JobDescription";



function capitalizeWords(str: string | undefined) {
    if (str == null) {
      return null;
    }
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function JobApplication() {
    const pathname = usePathname();
    let jobName = pathname.split('/').pop()?.toLowerCase() || "";
    jobName = decodeURIComponent(jobName).replace(/-/g, ' '); 
    const [questions, setQuestions] = useState<SanityDocument[]>([]);
    const [answers, setAnswers] = useState<{ question: string, value: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const result = await fetchSanityData(jobName);
                console.log(result)
                setQuestions(result);
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
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
            <h1 className="-s32 -w600 -white">{capitalizeWords(jobName)} Application</h1>
            {questions[0] && (
                <JobDescription content={questions[0].longDescription} />
            )}
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