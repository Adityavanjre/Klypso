import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-extrabold text-white tracking-widest hover:text-gray-200 transition-colors">
          KLYPSO
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase transition-colors hover:text-white ${isActive ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[88px] left-0 w-full bg-black border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-12 gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-light tracking-widest uppercase transition-colors ${isActive ? 'text-white' : 'text-gray-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
