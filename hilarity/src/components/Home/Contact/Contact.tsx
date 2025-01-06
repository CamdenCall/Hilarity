"use client"
import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    <section className="contact" id="contact">
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
    </section>
  );
};

export default Contact;