import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Send, Layout, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import BrandTicker from '../components/BrandTicker';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const heroRef = useRef(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/projects');
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
            }
        };
        fetchProjects();
    }, []);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["0 0", "1 1"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Klypso Agency",
        "url": "https://klypso.agency",
        "logo": "https://klypso.agency/logo.png",
        "image": "https://klypso.agency/og-image.jpg",
        "description": "Klypso is a premium IT services agency in Bangalore offering Web Development, App Development, Digital Marketing, and SEO services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tech Park",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560001",
            "addressCountry": "IN"
        },
        "telephone": "+919449734414",
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/klypso",
            "https://www.instagram.com/klypso",
            "https://www.linkedin.com/company/klypso"
        ]
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Klypso | Best Web & App Development Company in Bangalore"
                description="Klypso is a leading IT services agency in Bangalore specializing in Custom Web Development, Mobile App Development, Digital Marketing, SEO, and E-commerce Solutions. We deliver premium digital experiences."
                keywords="Web Development Company Bangalore, App Development Services, Digital Marketing Agency, SEO Services Bangalore, Custom Software Development, IT Services Agency, Klypso, Best Web Design Company, React Native Developers, MERN Stack Development, E-commerce Trends, Premium Digital Agency India"
                canonical="/"
                schema={homeSchema}
            />

            {/* Hero Section */}
            <section ref={heroRef} className="h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black -z-10" />

                <motion.div
                    style={{ y }}
                    className="max-w-4xl text-center space-y-8 z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-900/30 rounded-full">
                        Digital Excellence Redefined
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                        Engineering Digital <br />
                        <span className="italic text-indigo-500">Masterpieces.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We are a collective of architects, designers, and strategists. We don't just write code;
                        we build the robust digital infrastructure that powers your business growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <Link to="/contact" className="btn-primary group">
                            Let's Talk
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="btn-secondary">
                            View Our Work
                            <Code className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Scroll to Explore
                    <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
                </motion.div>
            </section>

            <BrandTicker />

            {/* Services Preview */}
            <section className="py-24 px-4 bg-black relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Crafting Digital Perfection</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We deliver a full suite of digital services designed to elevate your brand.</p>
                    </motion.div>


                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Layout size={32} className="text-indigo-400" />}
                            title="Web Development"
                            desc="We build scalable, high-performance web applications using the MERN stack, Next.js, and TypeScript. Our code is clean, modular, and built for the future."
                        />
                        <ServiceCard
                            icon={<Smartphone size={32} className="text-pink-400" />}
                            title="App Development"
                            desc="Native-quality mobile experiences with React Native. We focus on smooth animations, offline-first architecture, and cross-platform consistency."
                        />
                        <ServiceCard
                            icon={<TrendingUp size={32} className="text-green-400" />}
                            title="Digital Strategy"
                            desc="We integrate technical SEO, content marketing, and data analytics to drive measurable growth. We don't just guess; we rely on data."
                        />
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mt-20 pt-10 border-t border-white/5">
                        <h3 className="text-center text-xl font-semibold mb-8 text-gray-400">Powering Solutions With Modern Tech</h3>
                        <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {['React', 'Next.js', 'Node.js', 'AWS', 'MongoDB', 'TypeScript', 'Docker', 'GraphQL'].map(tech => (
                                <span key={tech} className="text-lg font-bold text-white/40 hover:text-white transition-colors cursor-default">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="text-indigo-400 hover:text-indigo-300 font-semibold group inline-flex items-center">
                            View All Services
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact / Stats Section */}
            <section className="py-20 bg-zinc-900/50 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
                        <StatItem number="150+" label="Projects Delivered" />
                        <StatItem number="98%" label="Client Retention" />
                        <StatItem number="25+" label="Industries Served" />
                        <StatItem number="5+" label="Years Experience" />
                    </div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="py-24 px-4 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Selected Work</span>
                            <h2 className="text-3xl md:text-5xl font-bold">Recent Masterpieces</h2>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center text-white hover:text-indigo-400 transition-colors">
                            View Full Portfolio <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.slice(0, 2).map((project: any, index: number) => (
                            <Link to={`/project/${project._id || project.id}`} key={index}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                                        <p className="text-gray-300 text-sm">{project.categories ? project.categories[0] : 'Web Design'}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/portfolio" className="btn-secondary w-full justify-center">
                            View Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* CTA Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 -z-10" />
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 p-12 rounded-3xl backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to build something extraordinary. Your vision, our expertise.
                        </p>
                        <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                            Get in Touch <Send className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div >
    );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">{number}</span>
        <span className="text-sm text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
);

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
    >
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
);

export default Home;
