import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Save } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

const AddProject = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Web Development');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            await axios.post('http://localhost:5000/api/projects', {
                title,
                description,
                category,
                image,
                link
            }, config);

            navigate('/admin');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Helmet>
                <title>Add Project | Klypso Admin</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
            >
                <button
                    onClick={() => navigate('/admin')}
                    className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Dashboard
                </button>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h1 className="text-2xl font-bold mb-6">Add New Project</h1>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Project Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Digital Strategy">Digital Strategy</option>
                                    <option value="Content Creation">Content Creation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Project Link</label>
                                <input
                                    type="url"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                                    placeholder="https://"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Image Style (CSS Class)</label>
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="bg-gradient-to-br from-purple-600 to-indigo-600"
                                required
                            />
                            <p className="text-xs text-gray-500 mt-1">Enter a Tailwind gradient class string for now.</p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary py-3 rounded-lg flex items-center justify-center font-bold mt-8"
                        >
                            {loading ? 'Creating...' : (
                                <>
                                    <Save size={20} className="mr-2" />
                                    Create Project
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default AddProject;
