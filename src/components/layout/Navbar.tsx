import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sparkle } from 'lucide-react';
import logo from '../../assets/seds-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Events', path: '/events' },
    { name: 'Board', path: '/board' },
    { name: 'Contact', path: '/contact' },
  ];

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
      <nav className="hidden md:flex navbar-pill">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-link relative flex flex-col items-center ${isActive ? 'active text-glow' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <Sparkle
                    size={14}
                    className="indicator-icon absolute -top-4 animate-pulse"
                  />
                )}
                {item.name}
              </>
            )}
          </NavLink>
        ))}
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
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-white text-2xl font-medium tracking-wide transition-colors ${isActive ? 'text-[#E0B6E4]' : 'hover:text-[#d8a6ff]'}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
