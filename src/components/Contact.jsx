import { useState } from "react";
import { Section } from "./Section";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  setStatus("Sending message...");

  try {
    await emailjs.send(
      "service_gimj4nr",
      "template_1xxxb0t",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "pHZUVuawG2abAB7tS"
    );

    setStatus("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Emailjs Error:", error);
    setStatus(`Error: ${error.text || error.message}`);
  }
};

  return (
    <Section id="contact" title="Contact">
      <p className="section-description">
        Want to work together or have a project idea? Send a message and I'll get back to you shortly.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email" />
        <textarea
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project" />
        <button type="submit">Send Message</button>
      </form>
      {status && <p style={{ marginTop: "1rem", color: "var(--muted)" }}>{status}</p>}
    </Section>
  );
}
