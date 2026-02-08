import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { projects } from '../data/projects';
import type { Project } from '../types';

const Portfolio = () => {
    // Schema for SEO
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Klypso Portfolio",
        "description": "Explore our portfolio of digital masterpieces.",
        "url": "https://klypso.agency/portfolio",
        "hasPart": projects.map(project => ({
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "url": `https://klypso.agency/project/${project.id}`
        }))
    };

    const stats = [
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Client Retention', value: '98%' },
        { label: 'Industries Served', value: '25+' },
        { label: 'Years Experience', value: '5+' },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <SEO
                title="Our Portfolio | Klypso - Exceptional Digital Solutions"
                description="Explore Klypso's portfolio of successful projects. From high-end e-commerce platforms to secure fintech dashboards, we deliver digital excellence that drives results."
                canonical="/portfolio"
                schema={portfolioSchema}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Masterpieces</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A showcase of our finest work. Each project represents a unique challenge solved with creativity, precision, and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 border-y border-white/5 bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id || index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-zinc-900/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Have a vision? Let's build it.</h2>
                    <Link to="/contact" className="btn-primary px-8 py-4 text-lg rounded-full inline-flex items-center gap-2 group">
                        Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white rounded-full border border-white/10">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors gap-2 mt-auto"
                >
                    View Case Study <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

export default Portfolio;
