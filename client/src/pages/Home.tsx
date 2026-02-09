import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Layout,
    Smartphone,
    TrendingUp,
    Play,
    Camera,
    Shield,
    PenTool
} from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const BrandTicker = () => {
    const brands = ['REACT', 'NODE.JS', 'MONGODB', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'FRAMER MOTION', 'REDUX'];
    return (
        <div className="py-12 border-y border-white/5 bg-zinc-950/20 overflow-hidden select-none">
            <div className="flex whitespace-nowrap animate-infinite-scroll">
                {[...brands, ...brands].map((brand, i) => (
                    <span key={i} className="mx-12 text-2xl font-black text-white/10 hover:text-indigo-500/30 transition-colors tracking-tighter">
                        {brand}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const [projects, setProjects] = useState<any>([]);
    const heroRef = useRef(null);
    const { scrollY } = useScroll();

    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/projects');
                setProjects(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="bg-black text-white selection:bg-indigo-500 selection:text-white">
            <SEO
                title="Klypso | Digital Architecture & Strategy"
                description="Klypso is a premium digital agency specialized in MERN stack development, high-end design, and tactical SEO."
            />

            {/* Premium Hero Section */}
            <section ref={heroRef} className="min-h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black" />
                    <motion.div
                        animate={{ x: mousePos.x, y: mousePos.y }}
                        transition={{ type: "spring", stiffness: 50, damping: 30 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.15),transparent_60%)]"
                    />
                    <motion.div
                        animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
                        transition={{ type: "spring", stiffness: 50, damping: 30 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.05),transparent_40%)]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />
                </div>

                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 text-center max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8">
                            <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-indigo-300 uppercase">
                                Accepting 2026 Partnerships
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-[0.02em] leading-[0.85] italic font-serif">
                            The New <br />
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent not-italic font-sans inline-block mt-4">
                                Standard.
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                            We build digital heavyweights. Fast, beautiful, and engineered to dominate.
                            No templates. No shortcuts. Just pure impact.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="btn-primary w-full md:w-auto px-10 py-5 text-sm">
                            Start a Project <ArrowRight className="ml-3 w-4 h-4" />
                        </Link>
                        <Link to="/portfolio" className="btn-secondary w-full md:w-auto px-10 py-5 text-sm">
                            View Work <Play className="ml-3 w-4 h-4 fill-white" />
                        </Link>
                    </div>
                </motion.div>

                {/* Refined Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-500/60 font-bold rotate-90 origin-left ml-[6px]">
                        Scroll
                    </span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />
                </motion.div>
            </section>

            <BrandTicker />

            {/* Services Preview */}
            <section className="py-32 px-4 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">Capabilities</div>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic font-serif">Deep Logic. <br /><span className="not-italic font-sans text-indigo-500">Pure Design.</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">Everything you need to lead your market. Nothing you don't.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Layout size={32} />}
                            title="Web Systems"
                            desc="We build flexible, high-speed web apps that scale. Think Next.js and MERN stack, optimized for raw performance."
                        />
                        <ServiceCard
                            icon={<Smartphone size={32} />}
                            title="Mobile Platforms"
                            desc="Native-grade experiences without the bloat. Smooth, responsive, and reliable on every device."
                        />
                        <ServiceCard
                            icon={<TrendingUp size={32} />}
                            title="Growth Logic"
                            desc="SEO isn't magic; it's math. We build improved visibility directly into the code structure."
                        />
                        <ServiceCard
                            icon={<PenTool size={32} />}
                            title="Visual Identity"
                            desc="Brands that look expensive. We craft aesthetics that position you above the noise."
                        />
                        <ServiceCard
                            icon={<Camera size={32} />}
                            title="Production"
                            desc="Cinematic visuals and photography. If you want to look premium, you can't use stock photos."
                        />
                        <ServiceCard
                            icon={<Shield size={32} />}
                            title="Marketing"
                            desc="Campaigns that actually convert. We focus on ROI, not vanity metrics."
                        />
                    </div>

                    <div className="text-center mt-20">
                        <Link to="/services" className="text-sm font-black uppercase tracking-[0.3em] text-indigo-400 hover:text-indigo-300 transition-colors group">
                            Explore All Expertise <ArrowRight size={14} className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Premium Stats Section - Authentic & Grounded */}
            <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(99,102,241,0.05),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <StatItem number="24" label="Global Territories" />
                        <StatItem number="12" label="Global Partners" />
                        <StatItem number="100%" label="Technical Rigor" />
                        <StatItem number="40+" label="Digital Ecosystems" />
                    </div>
                </div>
            </section>

            {/* The Klypso Edge - Depth section */}
            <section className="py-32 bg-zinc-950/30 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[2s] hover:scale-110"
                                    alt="Cyberpunk workspace"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 bg-indigo-600 p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                                <p className="text-4xl font-black italic tracking-tighter">99.9%</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-80">Uptime Protocol</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-indigo-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">The Advantage</span>
                                <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic font-serif leading-[0.9]">Technical <br /><span className="not-italic font-sans text-gray-400">Superiority.</span></h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                                    We cut the bloat. Our stacks are lean, fast, and built to handle scale. Your users won't wait, and neither should you.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <EdgeItem title="Bespoke Stack" desc="Zero dependency bloat. Only the tools that serve the mission." />
                                <EdgeItem title="SEO Logic" desc="Integrated schema and E-E-A-T flows from the first commit." />
                                <EdgeItem title="Security First" desc="Encrypted data layers and sub-system isolation protocols." />
                                <EdgeItem title="Brand Narrative" desc="Design that doesn't just look good—it tells your story." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="py-32 px-4 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Case Studies</span>
                            <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none italic font-serif">Selected <br /><span className="not-italic font-sans text-gray-400">Works.</span></h2>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center text-xs font-black uppercase tracking-[0.3em] text-white hover:text-indigo-400 transition-colors group">
                            Full Portfolio <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {projects.slice(0, 2).map((project: any, index: number) => (
                            <Link to={`/project/${project._id || project.id}`} key={index} className="group block">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative aspect-[4/5] md:aspect-[5/6] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-indigo-500/30 transition-all duration-700"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
                                    />

                                    <div className="absolute inset-x-8 bottom-8 p-10 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 flex justify-between items-center shadow-2xl">
                                        <div>
                                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">
                                                {project.categories ? project.categories[0] : 'Interface'}
                                            </p>
                                            <h3 className="text-3xl font-black text-white tracking-tight">{project.title}</h3>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 group-hover:bg-indigo-500 group-hover:text-white">
                                            <ArrowRight size={28} />
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-700 p-10 flex flex-col justify-end">
                                        <h3 className="text-4xl font-black text-white tracking-tight">{project.title}</h3>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center md:hidden">
                        <Link to="/portfolio" className="btn-secondary w-full justify-center">
                            Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Massive Masterpiece CTA */}
            <section className="py-40 px-4 relative overflow-hidden text-center">
                {/* Mesh Background for CTA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[160px] -z-10" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter leading-none italic font-serif">
                            Legacy <br />
                            <span className="not-italic font-sans text-gray-400">Starts Here.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                            Stop chasing trends. Start defining them. Let's build something the world can't ignore.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-white text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all duration-500 group shadow-2xl">
                            Initiate Protocol <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div >
    );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
    >
        <span className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter tabular-nums bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            {number}
        </span>
        <span className="text-[10px] md:text-xs text-indigo-400 uppercase tracking-[0.3em] font-black">
            {label}
        </span>
    </motion.div>
);

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group bg-zinc-900/50 border border-white/5 p-12 rounded-[3rem] backdrop-blur-xl hover:bg-white/[0.02] hover:border-indigo-500/40 transition-all duration-700 overflow-hidden relative flex flex-col h-full shadow-2xl"
    >
        {/* Animated Glow Backdrop */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[80px] -z-10 group-hover:bg-indigo-500/20 transition-all duration-700" />

        <div className="mb-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-700 text-indigo-400">
            {icon}
        </div>

        <h3 className="text-3xl font-black mb-6 tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            {title}
        </h3>

        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
            {desc}
        </p>

        <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500/50 group-hover:text-indigo-400 transition-colors border-t border-white/5 pt-8 mt-auto">
            Review Protocol <ArrowRight className="ml-3 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
        </div>
    </motion.div>
);

const EdgeItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
        <h4 className="text-white font-bold mb-2 tracking-tight">{title}</h4>
        <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
    </div>
);

export default Home;
