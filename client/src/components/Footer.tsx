import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white/80 pt-32 border-t border-white/5 mt-auto overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_20px_rgba(79,70,229,0.5)]" />

      {/* Massive CTA Section */}
      <div className="container mx-auto px-4 mb-32 text-center relative group">
        <h2 className="text-[14vw] font-black leading-none tracking-tighter text-white opacity-[0.03] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          KLYPSO
        </h2>
        <div className="relative z-10">
          <NavLink to="/contact" className="inline-flex items-center gap-6 text-4xl md:text-8xl font-black text-white hover:text-indigo-400 transition-all duration-700 ease-[0.16, 1, 0.3, 1] group leading-none">
            <span className="relative overflow-hidden block">
              <span className="inline-block transition-transform duration-700 group-hover:-translate-y-full">Let's Work Together</span>
              <span className="absolute top-full left-0 inline-block transition-transform duration-700 group-hover:-translate-y-full text-indigo-400">Let's Work Together</span>
            </span>
            <span className="bg-white text-black rounded-full p-4 md:p-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-700 shadow-2xl scale-75 md:scale-100 group-hover:rotate-45">
              <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16" />
            </span>
          </NavLink>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24 border-t border-white/5 pt-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white text-sm">K</div>
              <span className="text-xl font-black text-white tracking-widest">KLYPSO</span>
            </div>

            <div className="space-y-4">
              <a href="mailto:klypsoproduct@gmail.com" className="group flex items-center gap-3 text-lg hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Mail size={18} className="text-indigo-400" />
                </div>
                klypsoproduct@gmail.com
              </a>
              <a href="tel:+919449734414" className="group flex items-center gap-3 text-lg hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Phone size={18} className="text-indigo-400" />
                </div>
                +91 9449734414
              </a>
            </div>

            <div className="flex gap-3 mt-10">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Expertise</h3>
            <ul className="space-y-5 text-sm">
              <li><NavLink to="/services" className="hover:text-indigo-400 transition-colors">Web Systems</NavLink></li>
              <li><NavLink to="/services" className="hover:text-indigo-400 transition-colors">Mobile Platforms</NavLink></li>
              <li><NavLink to="/services" className="hover:text-indigo-400 transition-colors">Visual Assets & Photo</NavLink></li>
              <li><NavLink to="/services" className="hover:text-indigo-400 transition-colors">Professional Photography</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Resources</h3>
            <ul className="space-y-5 text-sm">
              <li><NavLink to="/about" className="hover:text-indigo-400 transition-colors">Our Ethos</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-indigo-400 transition-colors">Case Studies</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-indigo-400 transition-colors">Join the Collective</NavLink></li>
              <li><NavLink to="/resources" className="hover:text-indigo-400 transition-colors">Intelligence Hub</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Presence</h3>
            <address className="not-italic text-sm leading-relaxed space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-indigo-400 shrink-0" />
                <p>Digital Excellence Center<br />Tech Hub, Bangalore</p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 inline-block">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">High-Performance Ops</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
          <p>© {new Date().getFullYear()} Klypso Collective. Engineered for Excellence.</p>
          <div className="flex gap-12">
            <NavLink to="/legal" className="hover:text-white transition-colors">Protocol</NavLink>
            <NavLink to="/legal" className="hover:text-white transition-colors">Security</NavLink>
            <NavLink to="/login" className="hover:text-white transition-colors">Admin</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a
    href={href}
    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-white/5 shadow-2xl"
  >
    {icon}
  </a>
);

export default Footer;
