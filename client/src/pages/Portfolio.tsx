import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/Loader';
import type { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/projects');
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const categories = ['All', 'Web', 'App', 'Marketing', 'Design', 'Cloud', 'Photography'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.categories && p.categories.includes(filter));

    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>Our Work | Klypso Portfolio</title>
                <meta name="description" content="Showcasing our finest digital creations and success stories." />
            </Helmet>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        Selected Works
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Innovative solutions for complex challenges. Browse our recent projects.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${filter === cat
                                ? 'bg-white text-black border-white scale-105'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project._id || project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* CTA Section */}
            <div className="container mx-auto max-w-4xl mt-24 text-center">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Inspired? Let's Build Yours.</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                        From concept to launch, we bring your digital vision to life with precision and passion.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -5 }}
        className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-[400px]"
    >
        <Link to={`/project/${project._id || project.id}`} className="flex flex-col h-full">
            {/* Project Image Area */}
            <div className="h-1/2 w-full relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {project.categories ? project.categories[0] : 'General'}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1 relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    <span>View Case Study</span>
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-indigo-500 transition-colors">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </Link>
    </motion.div >
);

export default Portfolio;
