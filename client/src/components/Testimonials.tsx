import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CTO, SecurePay Systems",
            quote: "Klypso transformed our legacy system into a state-of-the-art platform. Their attention to detail is unmatched.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Founder, StreamLine",
            quote: "We saw a significant increase in user engagement after launching our new app. The design is simply beautiful.",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            role: "Marketing Lead, Mode Luxe",
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
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">Social Logic</div>
                    <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic font-serif">Partners in <br /><span className="not-italic font-sans text-indigo-500">Excellence.</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">We align with visionaries who demand technical rigor and aesthetic precision.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Featured Testimonial */}
                    <motion.div
                        className="md:col-span-2 bg-white/[0.02] border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-700 h-full flex flex-col justify-between"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -z-10 group-hover:bg-indigo-500/10 transition-colors" />
                        <div>
                            <div className="flex gap-1 mb-8 text-indigo-400">
                                {[...Array(5)].map((_, r) => <Star key={r} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-2xl md:text-4xl font-serif italic text-white leading-tight mb-12">
                                "Klypso transformed our legacy system into a state-of-the-art platform. Their attention to detail is actually unmatched in the industry."
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center font-black text-indigo-400">SJ</div>
                            <div>
                                <h4 className="font-black text-white uppercase tracking-widest text-xs">Sarah Jenkins</h4>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Head of Operations, SecurePay</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Testimonials */}
                    {testimonials.slice(1).map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/[0.03] hover:border-indigo-500/30 transition-all duration-500"
                        >
                            <p className="text-gray-300 mb-10 font-light leading-relaxed italic">"{t.quote}"</p>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-gray-400 text-xs">
                                    {t.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">{t.name}</h4>
                                    <p className="text-[10px] text-indigo-400 uppercase tracking-widest">{t.role.split(',')[0]}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
