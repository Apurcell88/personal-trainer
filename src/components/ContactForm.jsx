"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, message } = formData;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, message }),
    });

    if (res.ok) {
      toast.success("Message sent!");
      setFormData({ fullName: "", email: "", message: "" });
      router.push("/");
    } else {
      toast.error("Message not sent.");
    }
  };

  return (
    <section className="bg-gray-900 py-12 px-4 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bolf text-center text-gray-300 mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-7-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded transtion-colors duration-300 hover:cursor-pointer"
            >
              Send Message
            </button>
            <a
              href="/"
              className="text-gray-500 hover:text-amber-500 mt-1 underline hover:no-underline transition-colors duration-300"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
