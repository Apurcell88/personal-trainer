"use client";

import Nav from "@/components/Nav";
import { Dumbbell, Laptop, Utensils } from "lucide-react";
import Link from "next/link";

const serviceDetails = [
  {
    icon: <Dumbbell size={36} className="text-amber-400" />,
    title: "1-on-1 Personal Training",
    description: `
      In-person sessions tailored to your body, goals, and lifestyle. 
      Whether you're new to fitness or leveling up, we’ll build a plan together.
    `,
    bullets: [
      "Custom strength & conditioning programs",
      "Hands-on guidance with proper form",
      "Progress tracking & weekly adjustments",
    ],
    cta: "Book a Session",
  },
  {
    icon: <Laptop size={36} className="text-amber-400" />,
    title: "Online Coaching",
    description: `
      Train on your schedule. You’ll get a fully customized program, 
      feedback on form, and ongoing accountability via video or messaging.
    `,
    bullets: [
      "Flexible workout scheduling",
      "Weekly video check-ins",
      "Form reviews and progress updates",
    ],
    cta: "Start Coaching",
  },
  {
    icon: <Utensils size={36} className="text-amber-400" />,
    title: "Nutrition Guidance",
    description: `
      Learn how to fuel your body, not restrict it. 
      We’ll work together to build sustainable eating habits that support your training goals.
    `,
    bullets: [
      "Personalized nutrition coaching",
      "Macronutrient & portion guidance",
      "Meal strategies for energy and recovery",
    ],
    cta: "Get Nutrition Help",
  },
];

const pricingTiers = [
  {
    title: "Free Consultation",
    price: "$0",
    features: [
      "Fitness & health assessment",
      "Goal discussion",
      "Outline of personalized plan",
    ],
  },
  {
    title: "1-on-1 Training",
    price: "$35 / 30 mins or $60 / 60 mins",
    features: [
      "30 or 60 minute in-person session",
      "Fully customized workout",
      "Form correction & coaching",
    ],
  },
  {
    title: "Online Coaching",
    price: "$150 / month",
    features: [
      "Weekly check-ins",
      "Customized workout plan",
      "Ongoing support & video feedback",
    ],
  },
  {
    title: "Nutrition Guidance",
    price: "$50 / consult",
    features: ["Initial intake", "Custom strategy", "1-on-1 discussion & Q&A"],
  },
];

const ServicesInfo = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 px-4">
      <Nav />
      {/* Decorative blurred background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">My Services</h1>

        <div className="grid gap-12 md:grid-cols-3">
          {serviceDetails.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-center mb-3 text-white">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {service.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/booking"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-transform"
              >
                <div>
                  <h2 className="text-xl font-semibold text-center mb-5 text-white">
                    {tier.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                    {tier.price}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {tier.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/booking"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-200"
                  >
                    Book Your Free Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
