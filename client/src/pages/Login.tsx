import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/admin'); // Redirect to admin dashboard on success
        } catch (err: any) {
            setError(err.message || 'Invalid credentials');
        }
    };

    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <Helmet>
                <title>Admin Login | Klypso</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-indigo-500/20 p-4 rounded-full">
                        <Lock className="w-8 h-8 text-indigo-400" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">Admin Access</h2>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            placeholder="Enter admin email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full btn-primary py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                    >
                        Sign In
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Login;
