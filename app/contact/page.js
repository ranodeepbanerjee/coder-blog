"use client"
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call or send email with the contact form data
    // Example: You can use a service like EmailJS to send emails from your Next.js app

    // Simulating sending message
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        {isSent ? (
          <div className="mt-8 p-4 bg-green-100 border border-green-500 text-green-900 rounded">
            Message sent successfully! We'll get back to you soon.
          </div>
        ) : (
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default page;
