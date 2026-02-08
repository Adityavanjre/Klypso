import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loader from '../components/Loader';
import SEO from '../components/SEO';
import type { Project } from '../types';

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/projects');
                setProjects(data);
            } catch (err: any) {
                console.error('Failed to fetch projects:', err);
                setError('Unable to load projects at this time.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Fallback data if API fails to ensure the page always looks good
    const fallbackProjects: Project[] = [
        {
            _id: '1',
            title: 'Lumina Fashion',
            description: 'A bespoke e-commerce experience for a luxury fashion house, featuring 3D product visualization, AI-driven size recommendations, and a seamless checkout process that increased conversion by 40%.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop',
            category: 'E-Commerce'
        },
        {
            _id: '2',
            title: 'Nexus Health',
            description: 'A HIPAA-compliant telemedicine platform connecting patients with specialists. Features include encrypted video consultations, integrated prescription management, and real-time vital monitoring.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop',
            category: 'Healthcare'
        },
        {
            _id: '3',
            title: 'EstatePrime',
            description: 'A high-performance real estate portal processing over 100,000 listings daily. We implemented advanced map-based search, virtual tours, and automated valuation models for a premium user experience.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop',
            category: 'Real Estate'
        }
    ];

    const displayProjects = projects.length > 0 ? projects : fallbackProjects;

    const stats = [
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Client Retention', value: '98%' },
        { label: 'Industries Served', value: '25+' },
        { label: 'Awards Won', value: '12' },
    ];

    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Klypso Portfolio",
        "description": "Showcase of our successful web development and digital strategy projects.",
        "url": "https://klypso.agency/portfolio",
        "hasPart": displayProjects.map(p => ({
            "@type": "CreativeWork",
            "name": p.title,
            "description": p.description,
            "thumbnailUrl": p.image
        }))
    };

    return (
        <section className="min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
            <SEO
                title="Our Portfolio | Klypso - Exceptional Digital Solutions"
                description="Explore Klypso's portfolio of successful projects. From high-end e-commerce platforms to secure fintech dashboards, we deliver digital excellence that drives results."
                canonical="/portfolio"
                schema={portfolioSchema}
            />

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Proven Excellence</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
                        Crafting Digital Masterpieces
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                        We don't just build software; we engineer experiences. Over the years, we've partnered with visionary brands to transform complex challenges into elegant, high-impact digital solutions.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {error && (
                            <div className="text-center mb-12">
                                <p className="text-gray-400 italic">
                                    Displaying a curated selection of our best work.
                                </p>
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayProjects.map((project, index) => (
                                <ProjectCard key={project._id || index} project={project} index={index} />
                            ))}
                        </div>
                    </>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 text-center"
                >
                    <p className="text-xl text-gray-300 mb-8">Ready to start your own success story?</p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors transform hover:scale-105 duration-300">
                        Discuss Your Project
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const isUrl = project.image && (project.image.startsWith('http') || project.image.startsWith('/'));

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all cursor-pointer flex flex-col h-full"
        >
            <div className="relative h-64 w-full overflow-hidden">
                {isUrl ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className={`w-full h-full ${project.image} transition-transform duration-700 group-hover:scale-110`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {project.category}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-white group-hover:translate-x-2 transition-transform duration-300">
                    View Case Study <span className="ml-2 text-amber-400">&rarr;</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
