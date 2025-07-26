import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { prisma } from "@/lib/prisma";

const About = async () => {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 py-28 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-amber-500 mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-6 px-2 text-center">
          Hi, I'm Adam Purcell. My journey into fitness started over 5 years ago
          as a personal mission to become stronger, healthier, and more
          confident. Over time, that mission evolved into a deep passion for
          helping others do the same. While my early experience has been focused
          on training family and friends, it's given me the chance to develop a
          hands-on, personalized approach that’s rooted in real-world results.
          I'm a certified personal trainer through the American Council on
          Exercise (ACE), and I bring both professional knowledge and personal
          commitment to every session. Whether you're just starting out or
          looking to level up your training, I'm here to guide you with a plan
          that fits your lifestyle, goals, and potential.{" "}
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What I Offer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>1-on-1 Personal Training</li>
          <li>Online Coaching</li>
          <li>Nutrition Guidance</li>
          <li>Free Consultations</li>
        </ul>

        <div className="mt-10">
          <Link href="/services">
            <button className="bg-amber-500 px-6 py-2 rounded-md cursor-pointer hover:bg-amber-600 transition-all duration-300">
              Book a Session
            </button>
          </Link>
        </div>

        <div className="mt-14">
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
