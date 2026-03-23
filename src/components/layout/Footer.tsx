import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../assets/seds-logo.png";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-[#090709] pt-20 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_0.7fr_0.7fr_1fr] gap-12 mb-16 items-start">

          {/* Logo & Description */}
          <div className="flex items-start gap-6 lg:-ml-4">
            <Link to="/" className="shrink-0 -mt-1">
              <img
                src={logo}
                alt="SEDS Logo"
                style={{ width: "78px", height: "78px", borderRadius: "39px" }}
              />
            </Link>
            <div className="flex flex-col gap-4">
              <p className="text-[#d4d0d8] font-semibold text-[15px] leading-[1.3] tracking-normal">
                Welcome to SEDS SLIIT a student-led space organization<br />
                at Sri Lanka institute of Information Technology,<br />
                empovering students to explore,build and innovate<br />
                beyond the classroom
              </p>
              <div className="mt-20">
                <h4 className="text-[#e5e1e8] font-normal text-2xl tracking-tight mb-5">
                  Follow Us on Socials!
                </h4>
                <div className="flex gap-6 items-center">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#E0B6E4] transition-all"
                  >
                    <FaTwitter size={26} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#E0B6E4] transition-all"
                  >
                    <FaGithub size={26} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#E0B6E4] transition-all"
                  >
                    <FaLinkedin size={26} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#E0B6E4] transition-all"
                  >
                    <AiFillInstagram size={26} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-[#e5e1e8] font-normal text-2xl mb-8 tracking-tight">
              Links
            </h4>
            <ul className="flex flex-col gap-2.5 mt-1">
              <li className="h-[19px] w-[35px]">
                <Link
                  to="/"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="h-[19px] w-[36px]">
                <Link
                  to="/about"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="h-[19px] w-[33px]">
                <Link
                  to="/blogs"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li className="h-[19px] w-[41px]">
                <Link
                  to="/events"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  Events
                </Link>
              </li>
              <li className="h-[19px] w-[36px]">
                <Link
                  to="/board"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  Board
                </Link>
              </li>
              <li className="h-[19px] w-[48px]">
                <Link
                  to="/contact"
                  className="text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#e5e1e8] font-normal text-2xl mb-8 tracking-tight">
              Contact
            </h4>
            <ul className="flex flex-col gap-1 text-[#b8b4be] font-light text-[15px] leading-snug">
              <li>SLIIT Malabe Campus</li>
              <li>New Kandy Road</li>
              <li>Malabe, Sri Lanka</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-[#e5e1e8] font-normal text-2xl mb-8 tracking-tight">
              Subscribe
            </h4>
            <p className="text-[#b8b4be] font-light text-[15px] mb-6 leading-relaxed">
              Don't forget to subscribe to our news letters, enter your e-mail here.
            </p>
            <form
              className="flex items-center bg-white rounded-md overflow-hidden h-11"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 h-full px-4 bg-transparent text-gray-900 text-sm font-medium outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="h-full px-4 text-gray-800 hover:text-black transition-colors"
              >
                <Mail size={22} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-12 flex justify-center items-center">
          <p className="text-white/60 text-sm font-light">
            Copyright © {new Date().getFullYear()} | All Rights Reserved SEDS SLIIT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;