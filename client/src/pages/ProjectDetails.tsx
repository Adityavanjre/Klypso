import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft, ExternalLink, Target,
    Zap, Award, ArrowRight, Layers,
    Cpu, CheckCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import projectsData from '../data/projects.json';
import NotFound from './NotFound';
import Loader from '../components/Loader';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/projects/${id}`, { timeout: 1500 });
                setProject(data);
            } catch (err) {
                // Fallback to local JSON if backend fails
                const localProject = (projectsData as any[]).find(p => p.id === id || p._id === id);
                if (localProject) {
                    setProject(localProject);
                } else {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    if (loading) return <div className="h-screen flex items-center justify-center bg-black"><Loader /></div>;
    if (error || !project) return <NotFound />;

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden">
            <SEO
                title={`${project.title} | Global Masterwork`}
                description={project.description}
            />

            {/* Hero Section */}
            <header className="relative h-screen flex items-end justify-start p-8 md:p-32 overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </motion.div>

                <motion.div style={{ opacity }} className="relative z-10 max-w-5xl">
                    <Link to="/portfolio" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white mb-12 transition-all backdrop-blur-md group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Return to Portfolio</span>
                    </Link>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {project.categories?.map((cat: string) => (
                            <span key={cat} className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 bg-indigo-500/10 px-6 py-2 rounded-full border border-indigo-500/20 backdrop-blur-md">
                                {cat}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-6xl md:text-[10vw] font-black mb-8 tracking-tighter leading-[0.8] italic font-serif">
                        {project.title.split(' ')[0]} <br />
                        <span className="not-italic font-sans text-white/20">{project.title.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    <p className="max-w-2xl text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                        {project.description}
                    </p>
                </motion.div>

                <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6">
                    <div className="text-right">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1">Status</div>
                        <div className="text-sm font-bold text-white uppercase tracking-widest">Protocol Active</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                        <ArrowRight size={20} className="rotate-90 text-indigo-500" />
                    </div>
                </div>
            </header>

            {/* Main Content Integration */}
            <main className="container mx-auto px-4 py-32 relative">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-32">
                        {/* Detailed Briefing */}
                        <section className="relative">
                            <div className="absolute -left-12 top-0 text-[10vw] font-black text-white/[0.02] -z-10 select-none">01</div>
                            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter italic font-serif">The <span className="not-italic font-sans text-indigo-500">Briefing.</span></h2>
                            <div className="prose prose-invert prose-2xl max-w-none">
                                <p className="text-gray-300 font-light leading-relaxed">
                                    {project.fullDescription || project.description}
                                </p>
                            </div>
                        </section>

                        {/* Tactical Execution (Challenge/Solution) */}
                        <section className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 relative group hover:border-red-500/20 transition-all duration-500">
                                <Target className="text-red-500 mb-8" size={32} />
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-sm">Strategic Friction</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-lg">
                                    {project.challenge || "Analyzing core system complexities and market disruptions."}
                                </p>
                            </div>
                            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 relative group hover:border-green-500/20 transition-all duration-500">
                                <Zap className="text-green-500 mb-8" size={32} />
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-sm">Architectural Fluidity</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-lg">
                                    {project.solution || "Engineering reactive components and seamless integration protocols."}
                                </p>
                            </div>
                        </section>

                        {/* Visual Evidence (Gallery) */}
                        {project.gallery && project.gallery.length > 0 && (
                            <section>
                                <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter italic font-serif">Visual <span className="not-italic font-sans text-indigo-500">Evidence.</span></h2>
                                <div className="space-y-12">
                                    {project.gallery.map((img: string, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            className="rounded-[3rem] overflow-hidden border border-white/5 group"
                                        >
                                            <img
                                                src={img}
                                                alt={`Evidence ${idx + 1}`}
                                                className="w-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-[0.16, 1, 0.3, 1]"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Technical Registry (Sidebar) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit space-y-12">
                        <RegistryCard
                            icon={<Cpu className="text-indigo-400" />}
                            title="Tech Stack"
                        >
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech: string) => (
                                    <span key={tech} className="bg-white/5 text-gray-400 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 hover:border-indigo-500/30 hover:text-white transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </RegistryCard>

                        {project.services && project.services.length > 0 && (
                            <RegistryCard
                                icon={<CheckCircle className="text-green-400" />}
                                title="Services Provided"
                            >
                                <div className="space-y-3">
                                    {project.services.map((service: string) => (
                                        <div key={service} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </RegistryCard>
                        )}

                        {project.impact && (
                            <RegistryCard
                                icon={<Layers className="text-purple-400" />}
                                title="Benchmark Impact"
                            >
                                <p className="text-gray-300 font-light italic leading-relaxed">"{project.impact}"</p>
                            </RegistryCard>
                        )}

                        {project.testimonial && (
                            <div className="p-10 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/10 relative">
                                <Award className="absolute -top-6 -right-6 text-indigo-500/20" size={80} />
                                <p className="text-gray-300 italic mb-8 relative z-10 font-serif text-lg leading-relaxed">"{project.testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center font-black text-indigo-400">
                                        {project.testimonial.author[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-black uppercase tracking-widest text-white">{project.testimonial.author}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-indigo-400/60 font-black">{project.testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <div className="bg-white text-black p-8 rounded-3xl flex items-center justify-between group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl">
                                    <span className="font-black uppercase tracking-[0.2em] text-xs">Access Production</span>
                                    <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </main>

            {/* Massive Call to Collaboration */}
            <section className="py-40 border-t border-white/5 bg-zinc-950 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
                    NEXT CHAPTER
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter">Ready to Forge <br /><span className="text-indigo-500">Your Identity?</span></h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-6 text-xl md:text-3xl font-black uppercase tracking-[0.3em] hover:text-indigo-400 transition-all duration-700 group"
                    >
                        Initiate Briefing <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform text-indigo-500" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

const RegistryCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="p-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="font-black text-[10px] uppercase tracking-[0.4em] text-gray-500">{title}</h3>
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default ProjectDetails;
