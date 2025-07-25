"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Booking = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "1-on-1 Personal Training",
    notes: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Booking request sent!");
      router.push("/");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 px-4 min-h-screen">
      {/* Decorative blurred background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Book a Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Free Consultation">Free Consultation</option>
              <option value="1-on-1 Personal Training">
                1-on-1 Personal Training
              </option>
              <option value="Online Coaching">Online Coaching</option>
              <option value="Nutrition Guidance">Nutrition Guidance</option>
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
          >
            Submit Booking
          </button>
          <div className="flex justify-center cursor-pointer">
            <a href="/services">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
