"use client"
import React, { useState } from "react";
import { motion } from "motion/react"
import "./Contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      setStatusMessage("Email sent successfully");
    } else {
      setStatusMessage("Failed to send email");
    }
  };

  return (
    <motion.section 
    className="contact"
    id="contact"
    initial={{ opacity: 0, y: -15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={ { duration: 0.75 } }
    viewport={{ once: true }}
    >
      <div className="header">
        <h2 className="gradient">Contact</h2>
        <p className="-s16">Where Style Meets the Digital Future.</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            placeholder="Any extra information you want us to know"
            rows={20}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {statusMessage && (<p className="status-text -s14">{statusMessage}</p>)}
        </div>

        <button type="submit">Submit</button>
      </form>
    </motion.section>
  );
};

export default Contact;