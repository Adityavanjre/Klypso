import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import type { Project } from '../types';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

import projectsData from '../data/projects.json';

const Portfolio = () => {
    // Initialize with local data to ensure immediate visibility (SSR-like feel)
    const [projects, setProjects] = useState<Project[]>(projectsData as any);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Background fetch to update with latest data
                const { data } = await axios.get('http://localhost:5000/api/projects');
                if (data && data.length > 0) {
                    setProjects(data);
                }
            } catch (err) {
                console.error("Error fetching projects, using local fallback:", err);
                // Fallback is already set
            }
        };
        fetchProjects();
    }, []);

    const categories = ['All', 'Web', 'App', 'Marketing', 'Design', 'Cloud', 'Photography'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.categories && p.categories.includes(filter));

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-24 px-4 relative overflow-hidden">
            <Helmet>
                <title>Excellence Gallery | Klypso Portfolio</title>
                <meta name="description" content="Showcasing our finest digital creations and success stories." />
            </Helmet>

            {/* Mesh Background */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-gray-400 uppercase">
                            Case Studies
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.8] italic font-serif">
                        Digital <br />
                        <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent not-italic font-sans inline-block mt-4">
                            Artifacts.
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-xl text-gray-400 font-light">
                        Engineering innovative solutions for complex challenges.
                        A selection of our most impactful work.
                    </p>
                </motion.div>

                {/* Filter Tabs - Premium Floating Bar */}
                <div className="sticky top-24 z-40 mb-20">
                    <div className="max-w-fit mx-auto bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex items-center gap-1 shadow-2xl">
                        <div className="px-4 border-r border-white/10 hidden md:block">
                            <Filter size={16} className="text-gray-500" />
                        </div>
                        <div className="flex gap-1 overflow-x-auto no-scrollbar px-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat
                                        ? 'bg-white text-black shadow-xl shadow-white/5'
                                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project._id || project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Massive CTA Section */}
                <div className="mt-40 text-center relative group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
                        Ready to Start <br />
                        <span className="text-indigo-400">Your Ecosystem?</span>
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-white text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all duration-500 group shadow-2xl"
                    >
                        Initiate Protocol <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group relative flex flex-col h-full bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-700 shadow-2xl"
    >
        <Link to={`/project/${project._id || project.id}`} className="flex flex-col h-full">
            {/* Project Image Area */}
            <div className="aspect-[4/5] w-full relative overflow-hidden bg-black">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[2s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110 group-hover:opacity-30"
                />

                {/* Technical Meta - Reveal on Hover */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.categories?.slice(0, 2).map((cat, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-indigo-300">
                                {cat}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tighter italic font-serif">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 transition-all duration-500 group-hover:text-white">
                        Discovery Report <ArrowRight size={14} className="text-indigo-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:bg-indigo-500/5 transition-all duration-700 pointer-events-none" />
            </div>
        </Link>
    </motion.div >
);

export default Portfolio;
