import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/seds-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Board', path: '/board' },
  ];

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close menu when viewport resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50 box-border px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center z-50 shrink-0">
        <img
          src={logo}
          alt="SEDS Logo"
          className="w-[44px] sm:w-[54px] md:w-[70px] h-auto rounded-full transition-transform hover:scale-105 object-contain"
        />
      </Link>

      {/* Desktop Navigation — only rendered on lg+ screens */}
      {isDesktop && (
        <nav className="navbar-pill">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link relative flex flex-col items-center ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Mobile Hamburger Button — only rendered on mobile */}
      {!isDesktop && (
        <button
          ref={hamburgerRef}
          className="z-50 text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B6E4] transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span
            className="block transition-all duration-300"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </span>
        </button>
      )}

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-nav"
        ref={menuRef}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 bg-[#090709]/98 backdrop-blur-xl flex flex-col justify-center items-center z-40 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative Space Glows */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] bg-[rgba(224,182,228,0.12)] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[15%] left-[10%] w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-[rgba(127,106,129,0.12)] rounded-full blur-[80px] pointer-events-none" />

        <nav className="flex flex-col items-center gap-5 sm:gap-7 z-10 w-full px-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${index * 65}ms` : '0ms',
              }}
              className={({ isActive }) =>
                `text-2xl sm:text-3xl font-medium tracking-widest uppercase transition-all duration-500 transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  isActive
                    ? 'text-[#E0B6E4] font-semibold drop-shadow-[0_0_12px_rgba(224,182,228,0.4)] scale-105'
                    : 'text-white/80 hover:text-[#d8a6ff] hover:scale-105'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

