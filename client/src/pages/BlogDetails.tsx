import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowLeft, Tag, Share2 } from 'lucide-react';
import Loader from '../components/Loader';

interface BlogPost {
    _id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
    content: string;
}

const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); // This state is used in the `if (error || !post)` condition.

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setPost(data);
            } catch (err) {
                console.error("Error fetching blog post:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center bg-black"><Loader /></div>;
    if (error || !post) return <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/resources" className="text-indigo-400 font-bold hover:underline">Back to Resources</Link>
    </div>;

    const sharePost = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                url: window.location.href,
            }).catch(console.error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20">
            <Helmet>
                <title>{post.title} | Klypso Insights</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <div className="container mx-auto max-w-4xl px-4">
                <Link to="/resources" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Tag size={12} /> {post.category}
                        </span>
                        <div className="h-1 w-1 bg-gray-600 rounded-full" />
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between mb-12 py-6 border-y border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-white">{post.author}</p>
                                <p className="text-gray-500 text-xs">Expert Contributor</p>
                            </div>
                        </div>
                        <button onClick={sharePost} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <Share2 size={20} className="text-indigo-400" />
                        </button>
                    </div>

                    <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="prose prose-invert prose-indigo max-w-none">
                        <div className="text-xl text-gray-300 italic mb-10 leading-relaxed font-light">
                            {post.excerpt}
                        </div>
                        {/* We use dangerouslySetInnerHTML here. In production, we'd sanitize it or use a markdown library */}
                        <div
                            className="text-gray-300 leading-relaxed space-y-6 text-lg"
                            dangerouslySetInnerHTML={{ __html: post.content || '<p>Detailed content for this article is coming soon. Stay tuned for expert insights and deep dives into this topic.</p>' }}
                        />
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold mb-4">Did you enjoy this article?</h3>
                        <p className="text-gray-400 mb-8">Join our newsletter to receive the latest digital trends directly in your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full focus:outline-none focus:border-indigo-500 flex-1"
                            />
                            <button className="btn-primary">Subscribe</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogDetails;
