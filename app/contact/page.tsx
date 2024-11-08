"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Education() {
  // State for form fields and submission feedback
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Ref for the form
  const formRef = useRef<HTMLFormElement | null>(null);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
  
    // Check if formRef.current is defined
    if (!formRef.current) {
      setError("Form reference is not available.");
      return;
    }
  
    // Use EmailJS to send the email
    emailjs
      .sendForm(
        "service_o1lvgak",   // Replace with your actual Service ID
        "template_0d4kjrr",  // Replace with your actual Template ID
        formRef.current,     // Guaranteed to be non-null here
        "w8MT3unbN8nLZnk9t"  // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSubmitted(true);
          setError(""); // Clear any errors
          setFormData({ name: "", email: "", message: "" }); // Clear form fields
        },
        (error) => {
          console.log("Error:", error.text);
          setError("There was an error sending your message.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4" style={{ marginTop: "40px" }}>
      {/* Contact Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul className="mt-4">
          <li>Email: <a href="mailto:potharajutharunrana@gmail.com" className="text-blue-500">potharajutharunrana@gmail.com</a></li>
          <li>Phone: <span className="text-blue-500">+91 6303748354</span></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/tharunpotharaju" target="_blank" className="text-blue-500">LinkedIn Profile</a></li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-black">Get in Touch</h2>

        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md text-black">
            <p className="text-black">Your message has been sent successfully!</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-800 p-4 mb-4 rounded-md">
            <p>{error}</p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2 text-black">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-black font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-black p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
