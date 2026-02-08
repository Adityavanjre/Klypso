import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const services = [
    'Website Development & Integration',
    'App Development',
    'Social Media Management',
    'Digital Marketing',
    'Creative Content',
    'Content Creation',
    'Photography',
    'Other',
];

import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: services[0],
        message: '',
    });

    const [status, setStatus] = useState<null | 'success' | 'error'>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await axios.post('http://localhost:5000/api/enquiries', formData);
            setStatus('success');
            setFormData({ name: '', email: '', service: services[0], message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-black text-white py-24 px-4 flex justify-center items-center">
            <Helmet>
                <title>Contact Us | Klypso</title>
                <meta name="description" content="Get in touch with Klypso for all your web, app, and digital marketing needs." />
            </Helmet>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2">Get in Touch</h2>
                    <p className="text-gray-400">We'd love to hear about your project.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                        <select 
                            name="service" 
                            value={formData.service} 
                            onChange={handleChange} 
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
                        >
                            {services.map((svc) => (
                                <option key={svc} value={svc} className="bg-gray-900 text-white">{svc}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                            rows={4}
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {loading ? 'Sending...' : 'Send Enquiry'}
                        {!loading && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                    </button>

                    {status === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-4 p-4 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg flex items-center gap-2 justify-center"
                        >
                            <CheckCircle size={20} />
                            <span>Message sent successfully! We'll get back to you soon.</span>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-4 p-4 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg flex items-center gap-2 justify-center"
                        >
                            <AlertCircle size={20} />
                            <span>Failed to send message. Please try again later.</span>
                        </motion.div>
                    )}
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
