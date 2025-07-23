import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white">AP Fit</h2>
          <p className="text-sm mt-2">
            Helping you build strength, confidence, and lasting results.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="#about"
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a href="mailto:apurcell88@gmail.com" className="hover:underline">
              apurcell88@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://instagram.com/apurcell_88"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <Instagram />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=apurcell88@gmail.com"
              className="hover:text-amber-500"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} AP Fit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
