import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import logo from '@/assets/seds-logo.png';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
};

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Board', to: '/board' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/SEDS.SLIIT/',
    icon: FaFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sedssliit/',
    icon: AiFillInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/seds-sliit/posts/?feedView=all',
    icon: FaLinkedin,
  },
];

const socialIconClass =
  'text-white hover:text-[#E0B6E4] transition-all';

const linkClass =
  'text-[#b8b4be] hover:text-[#e5e1e8] font-normal text-base transition-colors';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-[#e5e1e8] font-normal text-2xl mb-6 tracking-tight">
    {children}
  </h4>
);

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-transparent via-[#090709]/80 to-[#090709] pt-20 pb-10 px-4 sm:px-8 md:px-12 lg:px-20 font-sans">
      {/* Wrapper to clip the bottom of the glow and prevent page extension */}
      <div className="absolute top-[-800px] bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0">
        {/* Dynamic CSS Center-Bottom Glow */}
        <div
          className="absolute rounded-full mix-blend-screen w-[800px] h-[800px] md:w-[1600px] md:h-[1600px]"
          style={{
            left: '50%',
            bottom: 0,
            transform: 'translate(-50%, 50%)',
            background:
              'radial-gradient(circle, rgba(224,182,228,0.25) 0%, rgba(224,182,228,0) 70%)',
            filter: 'blur(150px)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link to="/" onClick={scrollToTop} className="shrink-0">
              <img
                src={logo}
                alt="SEDS Logo"
                style={{ width: '78px', height: '78px', borderRadius: '39px' }}
              />
            </Link>
            <p className="text-[#d4d0d8] font-semibold text-[15px] leading-relaxed tracking-normal max-w-md text-center md:text-left">
              Welcome to SEDS SLIIT, A student-led space organization at Sri
              Lanka Institute of Information Technology, empowering students to
              explore, build, and innovate beyond the classroom.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start md:justify-self-center">
            <SectionHeading>Links</SectionHeading>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} onClick={scrollToTop} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start md:justify-self-center">
            <SectionHeading>Follow Us</SectionHeading>
            <div className="flex gap-6 items-center justify-center md:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={socialIconClass}
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start md:justify-self-end lg:pr-12">
            <SectionHeading>Contact</SectionHeading>
            <ul className="flex flex-col gap-1 text-[#b8b4be] font-light text-[15px] leading-snug text-center md:text-left">
              <li>SLIIT Malabe Campus</li>
              <li>New Kandy Road</li>
              <li>Malabe, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex justify-center items-center">
          <p className="text-white/60 text-sm font-light">
            Copyright © {new Date().getFullYear()} | All Rights Reserved SEDS
            SLIIT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
