import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email.includes("@") && form.message.length > 5) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else alert("Please fill in all fields correctly!");
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      {submitted && <div className="bg-green-100 p-3 mb-4 rounded">Message sent successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name"
          className="w-full border px-3 py-2 rounded" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email"
          className="w-full border px-3 py-2 rounded" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"
          rows="5" className="w-full border px-3 py-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
