import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white/80 pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6 tracking-wide text-white">KLYPSO</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A premium digital agency dedicated to crafting exceptional web and mobile experiences. We turn complex problems into elegant solutions.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={20} />} href="#" />
              <SocialLink icon={<Instagram size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Web Development</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Mobile Apps</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">UI/UX Design</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Digital Strategy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/portfolio" className="hover:text-amber-400 transition-colors">Our Work</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="/legal" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="block text-white">E:</span>
                <a href="mailto:adityavanjre280@gmail.com" className="hover:text-amber-400 transition-colors">adityavanjre280@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="block text-white">P:</span>
                <a href="tel:+919449734414" className="hover:text-amber-400 transition-colors">+91 9449734414</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="block text-white">L:</span>
                <span>
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Klypso Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/legal" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/legal" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: any, href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
