import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send, CheckCircle, AlertCircle, Mail, MapPin,
    Phone, MessageSquare, Facebook, Instagram,
    Twitter, Linkedin
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const services = [
    'Web Architecture',
    'Mobile Experience',
    'Organic Strategy (SEO)',
    'Visual Assets & Photo',
    'Intelligence Systems',
    'Professional Photography',
    'Brand Narrative',
    'Other Evolution',
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: services[0],
        message: '',
    });

    const [status, setStatus] = useState<null | 'success' | 'error'>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let value = e.target.value;

        if (e.target.name === 'phone') {
            value = value.replace(/[^0-9+]/g, '').slice(0, 15);
        }

        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("http://localhost:5000/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to send enquiry');

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: services[0], message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-24 px-4 relative overflow-hidden">
            <Helmet>
                <title>Initiate Partnership | Klypso Collective</title>
                <meta name="description" content="Get in touch with Klypso for all your web, app, and digital marketing needs." />
            </Helmet>

            {/* Mesh Background */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: Context & Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8">
                                <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-indigo-300 uppercase">
                                    Initiate Protocol
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                Let's Build <br />
                                <span className="text-indigo-500">Something Real.</span>
                            </h1>
                            <p className="max-w-md text-xl text-gray-400 font-light leading-relaxed">
                                Ready to scale your digital presence? Send us a message and we'll get back to you within 24 hours.
                            </p>
                        </motion.div>

                        <div className="space-y-8 pt-8 border-t border-white/5">
                            <ContactLink
                                icon={<Mail className="text-indigo-400" />}
                                label="Electronic Mail"
                                value="klypsoproduct@gmail.com"
                                href="mailto:klypsoproduct@gmail.com"
                            />
                            <ContactLink
                                icon={<Phone className="text-indigo-400" />}
                                label="Direct Liaison"
                                value="+91 9449734414"
                                href="tel:+919449734414"
                            />
                            <ContactLink
                                icon={<MapPin className="text-indigo-400" />}
                                label="Physical Presence"
                                value="siddaverappa badavane, 12th cross"
                                isLabelOnly
                            />
                        </div>

                        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs">Technical Support</h4>
                                    <p className="text-[10px] text-gray-500">24/7 Global Response</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 font-light">
                                Existing clients can access their dedicated Slack channel for instantaneous protocol feedback.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-8 border-t border-white/5">
                            <SocialLink icon={<Facebook size={18} />} />
                            <SocialLink icon={<Instagram size={18} />} />
                            <SocialLink icon={<Twitter size={18} />} />
                            <SocialLink icon={<Linkedin size={18} />} />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900 border border-white/5 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -z-10" />

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Identity</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Communication</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                                        placeholder="Work Email"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Phone Line</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Objective</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer"
                                >
                                    {services.map((svc) => (
                                        <option key={svc} value={svc} className="bg-zinc-900 text-white">{svc}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">The Mission</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500/50 transition-all resize-none placeholder:text-gray-700"
                                    placeholder="Describe the challenge..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-6 rounded-2xl font-black flex items-center justify-center gap-4 hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-500/20 disabled:opacity-50 group"
                            >
                                {loading ? 'Transmitting...' : 'Initiate Briefing'}
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center gap-4 text-indigo-300"
                                    >
                                        <CheckCircle size={24} className="shrink-0" />
                                        <p className="text-sm font-bold">Protocol initiated. Our tactical team will reach out shortly.</p>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400"
                                    >
                                        <AlertCircle size={24} className="shrink-0" />
                                        <p className="text-sm font-bold">Transmission failed. Please check your network or try again later.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href?: string }) => {
    const content = (
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-white/5 shadow-2xl cursor-pointer">
            {icon}
        </div>
    );

    if (!href) return content;
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    );
};

const ContactLink = ({ icon, label, value, href, isLabelOnly }: { icon: React.ReactNode, label: string, value: string, href?: string, isLabelOnly?: boolean }) => {
    const content = (
        <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] group-hover:text-white">
                {icon}
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-1">{label}</h4>
                <p className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{value}</p>
            </div>
        </div>
    );

    if (isLabelOnly) return <div className="cursor-default">{content}</div>;
    return <a href={href} className="block">{content}</a>;
};

export default Contact;
