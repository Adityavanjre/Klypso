import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
    _id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
}

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/blogs');
                setBlogPosts(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 relative overflow-hidden">
            <Helmet>
                <title>Intelligence Hub | Klypso Collective</title>
                <meta name="description" content="Read our latest thoughts on web development, design, and digital marketing strategies." />
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
                            Intelligence Hub
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.8] italic font-serif">
                        Digital <br />
                        <span className="bg-gradient-to-r from-white via-indigo-400 to-indigo-600 bg-clip-text text-transparent not-italic font-sans inline-block mt-4">
                            Insights.
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
                        Deep dives into technology architecture, design psychology,
                        and the future of digital product development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {loading ? (
                        Array(3).fill(0).map((_, i) => (
                            <div key={i} className="h-[500px] bg-white/5 animate-pulse rounded-[2.5rem]" />
                        ))
                    ) : error ? (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20 bg-red-500/10 border border-red-500/20 rounded-3xl">
                            <p className="text-red-400 font-bold uppercase tracking-widest text-xs">Failed to synchronize intelligence feed.</p>
                        </div>
                    ) : blogPosts.length === 0 ? (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20 bg-white/5 border border-white/5 rounded-3xl">
                            <p className="text-gray-500 text-xl font-light">Standby for upcoming transmissions.</p>
                        </div>
                    ) : (
                        blogPosts.map((post, idx) => (
                            <motion.article
                                key={post._id}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col h-full bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
                            >
                                <Link to={`/insights/${post._id}`} className="flex flex-col h-full">
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-all duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-black/40 backdrop-blur-md text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-white">
                                                <Tag size={10} className="text-indigo-400" /> {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-10 flex flex-col flex-1">
                                        <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6 gap-6">
                                            <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                                            <span className="flex items-center gap-2"><User size={12} /> BY {post.author}</span>
                                        </div>

                                        <h2 className="text-2xl font-black mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed font-light">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-all duration-500">
                                            <span className="flex items-center gap-3">
                                                <BookOpen size={14} className="text-indigo-500" />
                                                Download Report
                                            </span>
                                            <ArrowRight size={16} className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        )))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
