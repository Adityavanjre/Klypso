import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Zap } from 'lucide-react';

const About = () => {
    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-12 px-4 relative overflow-hidden">
            <Helmet>
                <title>Our Ethos | Klypso Collective</title>
                <meta name="description" content="Learn about Klypso, our mission, values, and the team driving digital innovation." />
            </Helmet>

            {/* Mesh Background */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8">
                        <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-indigo-300 uppercase">
                            The Collective
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none italic font-serif">
                        We Are <br />
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent not-italic font-sans inline-block mt-4">
                            Klypso.
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        A collective of visionaries, creators, and engineers dedicated to redefining the digital landscape.
                        We don't just build websites; we craft immersive digital ecosystems that resonate.
                    </p>
                </motion.div>

                {/* Mission & Vision with Glassmorphism */}
                <div className="grid md:grid-cols-2 gap-10 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
                        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8 shadow-2xl">
                            <Target className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                            To empower businesses with cutting-edge digital solutions that drive growth, enhance brand value,
                            and create meaningful connections with their audience. We strive to bridge the gap between
                            imagination and reality through technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
                        <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-8 shadow-2xl">
                            <Zap className="w-8 h-8 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                            To be the leading catalyst for digital transformation, setting new standards for design aesthetics,
                            performance, and user experience. We envision a web that is faster, more beautiful, and
                            universally accessible.
                        </p>
                    </motion.div>
                </div>

                {/* Our Ethos / Three Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    <EthosCard
                        title="Absolute Precision"
                        desc="We believe in the beauty of the decimal point. Every pixel, every millisecond of load time, and every line of code is scrutinized for optimal performance."
                    />
                    <EthosCard
                        title="Radical Transparency"
                        desc="No black boxes. Our partners have full access to our sprint cycles, staging environments, and logic. We build in the light."
                    />
                    <EthosCard
                        title="Future Obsession"
                        desc="We don't build for today's limitations. We architect for tomorrow's infrastructure, ensuring your legacy remains dominant as technology evolves."
                    />
                </div>

                {/* Our Story / Origin */}
                <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic font-serif">A Kinetic <br /><span className="not-italic font-sans text-indigo-500">Origin.</span></h2>
                        <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                            <p>
                                Klypso was founded in the pursuit of a simpler truth: that digital products should be as powerful as they are beautiful.
                                We saw a landscape filled with over-engineered monoliths and under-performing templates.
                            </p>
                            <p>
                                We decided to build a different kind of collective. One where engineering rigour meets high-end design.
                                We don't scale by headcount; we scale by talent. Every member of our collective is a master of their craft.
                            </p>
                            <p>
                                Today, Klypso serves as the technical headquarters for brands ready to break the status quo.
                                We are the silent engine behind successful launches and digital dominance.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="Klypso Studio"
                            className="w-full h-full object-cover opacity-60 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
                    </motion.div>
                </div>

                {/* Engineering Lifecycle / Process */}
                <div className="relative p-12 md:p-32 rounded-[4rem] bg-zinc-900 border border-white/5 overflow-hidden mb-32">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Engineering Lifecycle</h2>
                    <div className="grid md:grid-cols-4 gap-12">
                        <ProcessStep number="01" title="Discovery" desc="Deep synchronization with your brand goals and user ecosystem." />
                        <ProcessStep number="02" title="Blueprint" desc="Architecting intuitive interfaces and high-performance schemas." />
                        <ProcessStep number="03" title="Forge" desc="Crafting robust code with obsessive attention to detail." />
                        <ProcessStep number="04" title="Ignite" desc="Precision launch followed by continuous evolution." />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EthosCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500">
        <h3 className="text-xl font-black mb-4 text-indigo-400 uppercase tracking-widest text-[10px]">{title}</h3>
        <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
    </div>
);

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="text-center relative">
        <div className="text-8xl font-black text-white/[0.03] mb-4 absolute -top-12 left-1/2 -translate-x-1/2 select-none">
            {number}
        </div>
        <h3 className="text-xl font-black mb-3 relative z-10 text-white tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
    </div>
);

export default About;
