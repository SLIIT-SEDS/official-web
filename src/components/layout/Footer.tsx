import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Instagram, Send } from "lucide-react";
import logo from "../../assets/seds-logo.png";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative z-20 bg-transparent overflow-hidden">
      <div className="pt-16 pb-8 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Logo, Description & Socials */}
            <div className="flex flex-col gap-5">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="SEDS Logo"
                  className="w-14 h-14 rounded-full"
                />
              </Link>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Welcome to SEDS SLIIT a student-led space organization at Sri
                Lanka Institute of Information Technology, empowering students to
                explore, build, and innovate beyond the classroom.
              </p>
              <div className="mt-2">
                <p className="text-white font-medium text-sm mb-4 tracking-wide">
                  Follow Us on Socials!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={22} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
                Links
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/board"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    Board
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white font-light transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
                Contact
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                SLIIT Malabe Campus
                <br />
                New Kandy Road
                <br />
                Malabe, Sri Lanka
              </p>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
                Subscribe
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm mb-4">
                Don't forget to subscribe to our news letters, enter your e-mail
                here.
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white font-light text-sm focus:outline-none focus:border-white/40 transition-colors pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm font-light">
              Copyright © {new Date().getFullYear()} | All Rights Reserved SEDS
              SLIIT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
