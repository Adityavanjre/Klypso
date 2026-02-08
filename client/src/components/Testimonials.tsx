import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CTO, FinTech Global",
            quote: "Klypso transformed our legacy system into a state-of-the-art platform. Their attention to detail is unmatched.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Founder, EcoStream",
            quote: "We saw a 200% increase in user engagement after launching our new app. The design is simply beautiful.",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            role: "Marketing Director, LuxLife",
            quote: "Professional, creative, and incredibly fast. Klypso is now our go-to partner for all digital initiatives.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Stories</h2>
                    <p className="text-gray-400">What industry leaders say about working with us.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-black border border-white/10 p-8 rounded-2xl relative"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
                            <div>
                                <h4 className="font-bold text-white">{t.name}</h4>
                                <p className="text-sm text-indigo-400">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
