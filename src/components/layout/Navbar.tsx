import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/seds-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 box-border px-4 md:px-8 py-6 md:py-8 flex justify-between items-center">
      <Link to="/" className="flex items-center z-50">
        <img
          src={logo}
          alt="SEDS Logo"
          className="w-[50px] md:w-[70px] h-auto rounded-full transition-transform hover:scale-105 object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex border border-white/20 rounded-full px-8 py-3 bg-white/5 backdrop-blur-md items-center gap-10">
        <Link
          to="/"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          About
        </Link>
        <Link
          to="/blogs"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          Blogs
        </Link>
        <Link
          to="/events"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          Events
        </Link>
        <Link
          to="/board"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          Board
        </Link>
        <Link
          to="/contact"
          className="text-white text-lg hover:text-[#d8a6ff] transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden z-50 text-white p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#090709]/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          About
        </Link>
        <Link
          to="/blogs"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          Blogs
        </Link>
        <Link
          to="/events"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          Events
        </Link>
        <Link
          to="/board"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          Board
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-medium tracking-wide hover:text-[#d8a6ff] transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
