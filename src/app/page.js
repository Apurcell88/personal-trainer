import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/training-homepage.jpg')" }}
    >
      {/* OVERLAY DIV */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <Nav />
      <div className="relative z-10 text-white flex flex-col items-center text-center gap-4 px-4 mt-14 space-y-3">
        <h1 className="text-5xl font-semibold">
          Transform Your <span className="text-amber-500">Body</span>, Transform
          Your <span className="text-amber-500">Life</span>
        </h1>
        <Image
          src="/images/me.jpg"
          alt="Adam Purcell"
          width={110}
          height={110}
          className="rounded-full object-cover my-2"
        />
        <p className="leading-relaxed text-lg max-w-6xl">
          My name is Adam Purcell (located in the Chicagoland area), and
          I&apos;ve been on my own fitness journey for the past 5 years. Along
          the way, I discovered a deep passion for bodybuilding and overall
          wellness. What started as a personal goal turned into a lifestyle, and
          now I&apos;m driven to help others experience the same transformation.
          Whether it&apos;s building strength, gaining confidence, or just
          feeling better day to day, I love guiding people toward their fitness
          goals. I believe with the right support and plan, anyone can unlock
          their potential—and I&apos;m here to help make that happen.
        </p>

        <Link href="/about">
          <button className="bg-amber-500 w-35 h-10 rounded-md mb-4 hover:cursor-pointer hover:scale-105 hover:bg-amber-600 transition-all duration-300 hover:shadow-lg">
            Start Now
          </button>
        </Link>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
