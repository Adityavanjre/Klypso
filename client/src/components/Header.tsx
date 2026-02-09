import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for styling
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Insights', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-[100] transition-all duration-700 py-6 pointer-events-none lg:pointer-events-auto ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className={`container mx-auto px-4 transition-all duration-500 pointer-events-auto ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 rounded-[2rem] px-8 py-4 ${scrolled
          ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border border-transparent'
          }`}>
          {/* Logo */}
          <NavLink to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              K
            </div>
            <span className="text-2xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
              KLYPSO
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${isActive
                      ? 'bg-white text-black shadow-lg shadow-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="ml-4 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center border border-indigo-400/30 group shadow-lg shadow-indigo-500/20"
            >
              Start Project
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full p-4"
          >
            <div className="bg-zinc-900/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-4xl font-black tracking-tight transition-all block ${isActive ? 'text-indigo-400' : 'text-white hover:text-indigo-200'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-white/10 mt-4"
                >
                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-indigo-600 text-white w-full py-5 rounded-2xl font-bold text-center text-xl block shadow-xl shadow-indigo-500/20"
                  >
                    Start Your Project
                  </NavLink>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
