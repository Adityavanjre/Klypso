import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white/80 pt-20 border-t border-white/10 mt-auto overflow-hidden">
      {/* Massive CTA Section */}
      <div className="container mx-auto px-4 mb-24 text-center">
        <h2 className="text-[12vw] font-black leading-none tracking-tighter text-white opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default select-none">
          KLYPSO
        </h2>
        <div className="mt-[-2vw] relative z-10">
          <a href="/contact" className="inline-flex items-center gap-4 text-4xl md:text-7xl font-bold hover:text-indigo-400 transition-colors group">
            Let's Work Together
            <span className="bg-indigo-600 rounded-full p-2 md:p-4 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" color="white" />
            </span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-white/10 pt-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 tracking-wide text-white">Get in touch</h2>
            <div className="space-y-2">
              <a href="mailto:hello@klypso.agency" className="text-xl hover:text-white transition-colors block">hello@klypso.agency</a>
              <a href="tel:+919449734414" className="text-xl hover:text-white transition-colors block">+91 9449734414</a>
            </div>

            <div className="flex gap-4 mt-8">
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
              <li><a href="/services" className="hover:text-amber-400 transition-colors">App Development</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Digital Strategy (SEO)</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Professional Photography</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/portfolio" className="hover:text-amber-400 transition-colors">Our Work</a></li>
              <li><a href="/careers" className="hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="/resources" className="hover:text-amber-400 transition-colors">Insights & Blog</a></li>
              <li><a href="/legal" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Location</h3>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              Tech Park, <br />
              Bangalore, Karnataka<br />
              India 560001
            </address>
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

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
