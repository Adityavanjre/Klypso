import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, Target, Zap, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { projects as projectsData } from '../data/projects';
import NotFound from './NotFound';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    if (!project) return <NotFound />;

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            <Helmet>
                <title>{project.title} | Klypso Portfolio</title>
                <meta name="description" content={project.description} />
            </Helmet>

            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-end p-8 md:p-16 overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </motion.div>

                <div className="relative z-10 max-w-4xl">
                    <Link to="/portfolio" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-4 text-sm font-medium"
                    >
                        <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                            {project.category}
                        </span>
                    </motion.div>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-indigo-400">Overview</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                    </section>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.challenge && (
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="flex items-center text-xl font-bold mb-4 text-red-400">
                                    <Target className="mr-2" size={20} /> The Challenge
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="flex items-center text-xl font-bold mb-4 text-green-400">
                                    <Zap className="mr-2" size={20} /> The Solution
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Impact / Results */}
                    {project.impact && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center">
                                <Award className="mr-2" /> Key Impact
                            </h2>
                            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 p-8 rounded-2xl">
                                <p className="text-xl text-gray-200 font-medium leading-relaxed">
                                    "{project.impact}"
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Gallery if present */}
                    {project.gallery && project.gallery.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-indigo-400">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.gallery.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Gallery ${idx + 1}`}
                                        className="rounded-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <aside className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                        <h3 className="font-bold mb-6 flex items-center text-xl">
                            <Code size={20} className="mr-2 text-indigo-400" />
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies?.map((tech) => (
                                <span key={tech} className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-lg text-sm font-medium border border-indigo-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.testimonial && (
                            <div className="mb-8 pt-8 border-t border-white/10">
                                <p className="italic text-gray-400 text-sm mb-4">"{project.testimonial.quote}"</p>
                                <div>
                                    <div className="font-bold text-white">{project.testimonial.author}</div>
                                    <div className="text-xs text-indigo-400">{project.testimonial.role}</div>
                                </div>
                            </div>
                        )}

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full flex items-center justify-center p-4 rounded-xl text-lg font-bold group"
                            >
                                Visit Live Site
                                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default ProjectDetails;
