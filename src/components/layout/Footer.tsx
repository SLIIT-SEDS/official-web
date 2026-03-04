import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from 'lucide-react';
import logo from '../../assets/seds-logo.png';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-transparent pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="SEDS Logo"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-2xl font-light tracking-wider text-white">
                SEDS SLIIT
              </span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed">
              Advancing space exploration and development through innovation,
              research, and student empowerment. Beyond the classroom, into the
              stars.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white font-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white font-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-white font-light transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-white font-light transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white font-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
              Divisions
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 font-light">
                Observation & Camping
              </li>
              <li className="text-gray-400 font-light">
                Data Analysis & Software
              </li>
              <li className="text-gray-400 font-light">Robotics & Rover</li>
              <li className="text-gray-400 font-light">
                Biotechnical Division
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 group">
                <Mail className="text-primary w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-400 group-hover:text-white transition-colors font-light">
                  info@sedssliit.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="text-primary w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-400 group-hover:text-white transition-colors font-light">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-400 group-hover:text-white transition-colors font-light">
                  SLIIT North Malabe, <br />
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light order-2 md:order-1">
            © {new Date().getFullYear()} SEDS SLIIT. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-sm font-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white text-sm font-light transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
