import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name &&
      form.email.includes("@") &&
      form.subject &&
      form.message.length > 5
    ) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        We welcome your questions, feedback or comments
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE – FORM */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-4">
            Fill out the form below and we'll get back to you as soon as possible
          </p>

          {submitted && (
            <div className="bg-green-100 p-3 rounded mb-4">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            <div>
              <label className="font-medium">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            <div>
              <label className="font-medium">Subject *</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            <div>
              <label className="font-medium">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – CONTACT INFO */}
        <div className="space-y-6">
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

            <p className="mb-3">
              <span className="font-medium">🖂️ Email</span> <br />
              <span className="text-gray-500">library@sinhalaabookss.lk</span>
            </p>

            <p className="mb-3">
              <span className="font-medium">☎️ Phone</span> <br />
              <span className="text-gray-500">+94 11 234 5678</span>
            </p>

            <p className="mb-3">
              <span className="font-medium">🏢 Address</span> <br />
              <span className="text-gray-500">123 Galle Road, <br />
              Colombo 03, <br />
              Sri Lanka</span>
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Office Hours</h2>

            <p className="mb-2">
              <span className="font-medium">🕒 Monday - Friday</span> <br />
              9:00 AM - 5:00 PM
            </p>

            <p>
              <span className="font-medium">🕒 Saturday</span> <br />
              10:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
