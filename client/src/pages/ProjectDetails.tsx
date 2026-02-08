import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code, Layers, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/portfolio" className="text-indigo-400 hover:text-indigo-300">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    const {
        title,
        category,
        image,
        fullDescription,
        challenge,
        solution,
        technologies,
        impact,
        gallery
    } = project;

    // Schema for SEO
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": title,
        "description": fullDescription || project.description,
        "image": image,
        "genre": category,
        "publisher": {
            "@type": "Organization",
            "name": "Klypso"
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <SEO
                title={`${title} - Case Study | Klypso`}
                description={`Discover how Klypso helped ${title} achieve digital excellence. ${project.description}`}
                canonical={`/project/${id}`}
                schema={projectSchema}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto"
                    >
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
                        </Link>
                        <span className="block text-indigo-400 font-medium tracking-wider uppercase mb-4">{category}</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <Layers className="text-indigo-400" /> The Challenge
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {challenge || "No challenge detailed."}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <Zap className="text-amber-400" /> The Solution
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {solution || fullDescription}
                                </p>
                            </motion.div>

                            {/* Gallery Grid */}
                            {gallery && gallery.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                    {gallery.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            src={img}
                                            alt={`${title} gallery ${index + 1}`}
                                            className="rounded-xl border border-white/10 hover:border-white/30 transition-colors object-cover h-64 w-full"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Project Details</h3>

                                <div className="space-y-6">
                                    {technologies && (
                                        <div>
                                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <Code size={16} /> Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {technologies.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-indigo-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {impact && (
                                        <div>
                                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Key Impact</h4>
                                            <p className="text-white font-medium leading-snug border-l-2 border-green-500 pl-4">
                                                {impact}
                                            </p>
                                        </div>
                                    )}

                                    <div className="pt-6">
                                        <button className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2 group">
                                            Visit Live Site <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-xs text-center text-gray-500 mt-3">Link may be archived for privacy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project CTA */}
            <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
                    <Link to="/contact" className="btn-primary px-8 py-4 text-lg rounded-full inline-flex items-center gap-2">
                        Get in Touch <ArrowLeft className="rotate-180" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
