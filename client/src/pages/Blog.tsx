import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
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
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>Insights & Resources | Klypso Agency</title>
                <meta name="description" content="Read our latest thoughts on web development, design, and digital marketing strategies." />
            </Helmet>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
                        Klypso Insights
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Deep dives into technology, design philosophy, and the future of digital product development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array(3).fill(0).map((_, i) => (
                            <div key={i} className="h-96 bg-white/5 animate-pulse rounded-2xl" />
                        ))
                    ) : error ? (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20">
                            <p className="text-red-400">Failed to load articles. Please check back later.</p>
                        </div>
                    ) : blogPosts.length === 0 ? (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20">
                            <p className="text-gray-500 text-xl font-light">Stay tuned for upcoming insights.</p>
                        </div>
                    ) : (
                        blogPosts.map((post) => (
                            <motion.article
                                key={post._id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/60 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 text-white">
                                            <Tag size={12} className="text-indigo-400" /> {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <Link to={`/insights/${post._id}`} className="inline-flex items-center text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        )))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
