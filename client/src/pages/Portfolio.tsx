import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/Loader';
import type { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { projects as projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    // We can use local data for now as a reliable source since backend is using memory server
    // which resets on restart. This ensures the portfolio always looks good.
    const [projects] = useState<Project[]>(projectsData);
    const [loading] = useState(false);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web', 'App', 'Security', 'AR/VR', 'Data'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(filter));

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
        <Link to={`/project/${project.id}`} className="flex flex-col h-full">
            {/* Project Image Area */}
            <div className={`h-1/2 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {project.category}
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
    </motion.div>
);

export default Portfolio;
