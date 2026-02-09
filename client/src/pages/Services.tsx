import { motion } from 'framer-motion';
import {
    Smartphone, TrendingUp, PenTool,
    Code, Shield, CheckCircle, Monitor,
    Camera, Cpu, Globe, Zap, Search,
    Layers, Users, BarChart
} from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-12 px-4 relative overflow-hidden">
            {/* Mesh Background */}
            <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-[20%] right-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <SEO
                title="Our Expertise | Klypso Collective"
                description="Explore our comprehensive range of digital services including web development, app creation, and strategic marketing."
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-32"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8">
                        <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-indigo-300 uppercase">
                            The Expertise
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.8] italic font-serif">
                        Digital <br />
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent not-italic font-sans inline-block mt-4">
                            Mastery.
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        We don't just build software; we engineer high-performance digital ecosystems
                        that serve as the backbone for premium brands.
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    <ServiceDetailCard
                        icon={<Code size={32} />}
                        title="Web Systems"
                        description="Custom, high-performance engines built with Next.js and TypeScript. We prioritize speed, security, and sub-second interactions."
                        features={['SPA & PWA Architecture', 'Headless Commerce', 'Platform Integration', 'Real-time Systems']}
                    />
                    <ServiceDetailCard
                        icon={<Smartphone size={32} />}
                        title="Mobile Platforms"
                        description="Native-grade experiences for iOS and Android. Smooth animations, offline-first reliability, and stunning UI."
                        features={['React Native Mastery', 'Custom Animation Engine', 'Cross-Platform Unity', 'Biometric Security']}
                    />
                    <ServiceDetailCard
                        icon={<TrendingUp size={32} />}
                        title="Growth Intelligence"
                        description="Data-driven tactical plans. We integrate E-E-A-T SEO and advanced analytics to ensure measurable ROI."
                        features={['Technical SEO Audits', 'Conversion Psychology', 'Strategic Content', 'Data Visualization']}
                    />
                    <ServiceDetailCard
                        icon={<PenTool size={32} />}
                        title="Visual Identity"
                        description="Crafting high-end digital aesthetics that resonate. From immersive UI to bold brand narratives."
                        features={['System Design', 'Intuitive Interfaces', 'Motion Direction', '3D Asset Creation']}
                    />
                    <ServiceDetailCard
                        icon={<Shield size={32} />}
                        title="Architecture"
                        description="Scalable cloud infrastructure. High-availability systems designed to handle millions of transactions."
                        features={['AWS/Google Cloud', 'Microservices Architecture', 'Edge Computing', 'Cybersecurity Ops']}
                    />
                    <ServiceDetailCard
                        icon={<Monitor size={32} />}
                        title="Omnichannel"
                        description="Connecting your brand across every digital touchpoint. A unified experience for your users."
                        features={['Social Integration', 'API Ecosystems', 'Multi-Region Support', 'CRM Syncing']}
                    />
                    <ServiceDetailCard
                        icon={<Camera size={32} />}
                        title="Bespoke Photography"
                        description="Professional-grade visual capture for products, architecture, and cinematic brand narratives."
                        features={['Studio Product Shots', 'Architectural Stills', 'Brand Storytelling', 'Aerial Cinematography']}
                    />
                    <ServiceDetailCard
                        icon={<Globe size={32} />}
                        title="Digital Marketing"
                        description="Data-driven marketing strategies that amplify reach and maximize engagement across all channels."
                        features={['PPC & Ad Ops', 'Social Engineering', 'Email Logic', 'Influencer Strategy']}
                    />
                    <ServiceDetailCard
                        icon={<Cpu size={32} />}
                        title="Intel Systems"
                        description="Advanced AI and machine learning integrations to automate workflows and drive intelligence."
                        features={['AI Integration', 'Data Science', 'Automated Ops', 'Neural Interfaces']}
                    />
                </div>

                {/* Detailed Workflow / Process */}
                <div className="mb-40">
                    <h2 className="text-4xl md:text-7xl font-black mb-24 text-center tracking-tighter italic font-serif">The <span className="not-italic font-sans text-indigo-500">Forge</span> Protocol.</h2>
                    <div className="space-y-4">
                        <ProcessRow
                            number="01"
                            title="Discovery & Intelligence"
                            desc="We begin with a deep dive into your business logic, market position, and user psychology. No line of code is written until we fully understand the mission."
                            icon={<Search className="text-indigo-400" />}
                        />
                        <ProcessRow
                            number="02"
                            title="Architecture & Blueprint"
                            desc="Our architects design a scalable, secure, and future-proof schema. We map out every interaction to ensure a seamless flow and optimal performance."
                            icon={<Layers className="text-purple-400" />}
                        />
                        <ProcessRow
                            number="03"
                            title="Rapid Development (Sprints)"
                            desc="Using agile methodologies, we forge your product in two-week sprints. You see progress every step of the way through our live staging environments."
                            icon={<Zap className="text-indigo-400" />}
                        />
                        <ProcessRow
                            number="04"
                            title="Quality Control & QA"
                            desc="Every component undergoes rigorous testing—automated units, security audits, and performance stress tests—to ensure it's boardroom-ready."
                            icon={<Shield className="text-pink-400" />}
                        />
                        <ProcessRow
                            number="05"
                            title="Deployment & Scaling"
                            desc="We launch with precision. But we don't stop there. We monitor performance and iterate based on real-world data to drive continuous growth."
                            icon={<Globe className="text-indigo-400" />}
                        />
                    </div>
                </div>

                {/* Tech Stack Deep Dive */}
                <div className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter italic font-serif">The <br /><span className="not-italic font-sans text-indigo-500">Infrastructure.</span></h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                            We don't settle for "good enough". Our tech choices are based on rigorous performance benchmarks and security audits.
                            We build systems that scale horizontally without compromising on user experience.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <TechFeature title="React / Next.js" desc="SSR & ISR optimization for sub-second LCP." />
                            <TechFeature title="Node / Go" desc="High-concurrency backends for real-time logic." />
                            <TechFeature title="Redis / K8s" desc="Architected for sub-millisecond edge delivery." />
                            <TechFeature title="PostgreSQL" desc="Transactional integrity for high-stakes data." />
                        </div>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600/10 blur-[120px] rounded-full" />
                        <div className="relative grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square bg-zinc-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-end group hover:border-indigo-500/30 transition-all shadow-2xl"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-indigo-500/20 transition-all" />
                                    <div className="h-2 w-12 bg-white/10 rounded-full mb-2" />
                                    <div className="h-2 w-20 bg-white/5 rounded-full" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engagement Models - Section Wrapper */}
                <div className="relative p-12 md:p-32 rounded-[4rem] bg-zinc-900 border border-white/5 overflow-hidden mb-40 text-left">
                    <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

                    <h2 className="text-4xl md:text-6xl font-black mb-24 text-center tracking-tighter">Partnership Models</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <ModelCard
                            icon={<Users className="w-8 h-8 mb-6 text-indigo-400" />}
                            title="Fixed Objective"
                            desc="Optimized for well-defined projects. Budget and timeline locked in for precision delivery. Ideal for MVPs and targeted launches."
                        />
                        <ModelCard
                            icon={<BarChart className="w-8 h-8 mb-6 text-purple-400" />}
                            title="Strategic Flow"
                            desc="Ideal for scaling products. Dynamic resource allocation that evolves with your product needs. Pay for performance and agility."
                        />
                        <ModelCard
                            icon={<Shield className="w-8 h-8 mb-6 text-indigo-400" />}
                            title="Embedded Core"
                            desc="A dedicated elite division that functions as your internal tech headquarters. Deep integration with your executive team."
                        />
                    </div>
                </div>

                {/* FAQ - Styled as a focused support center */}
                <div className="max-w-4xl mx-auto mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4">Intelligence & FAQ</h2>
                        <p className="text-gray-400">Everything you need to know about starting your journey with us.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <FAQItem
                            question="How do you ensure project quality?"
                            answer="We follow a rigorous protocol including automated CI/CD, peer code reviews, and end-to-end performance testing. Every line of code is audited."
                        />
                        <FAQItem
                            question="Do you provide lifecycle support?"
                            answer="Our partnership doesn't end at launch. We provide tactical maintenance and iterative enhancements to ensure your continued dominance."
                        />
                        <FAQItem
                            question="What is the standard timeline?"
                            answer="Bespoke systems typically span 4-12 weeks based on complexity. We provide a granular roadmap during our discovery phase."
                        />
                        <FAQItem
                            question="Who owns the source code?"
                            answer="You do. 100%. Upon completion, all intellectual property, assets, and source protocols are transferred to your control forever."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceDetailCard = ({ icon, title, description, features }: { icon: React.ReactNode, title: string, description: string, features: string[] }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="group bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 relative flex flex-col h-full"
    >
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-indigo-600/30 transition-all duration-500 shadow-2xl">
            <div className="text-indigo-400">{icon}</div>
        </div>
        <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">{title}</h3>
        <p className="text-gray-400 mb-10 leading-relaxed font-light flex-grow">
            {description}
        </p>
        <ul className="space-y-4">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm font-bold tracking-wide text-gray-300/80">
                    <CheckCircle size={16} className="text-indigo-500 mr-3 shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);

const ProcessRow = ({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col md:flex-row items-start gap-8 p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all duration-500"
    >
        <div className="text-6xl font-black text-white/5 group-hover:text-indigo-500/20 transition-colors select-none">
            {number}
        </div>
        <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-xl text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                    {icon}
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">{title}</h3>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-4xl">{desc}</p>
        </div>
    </motion.div>
);

const ModelCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
    <div className="relative group p-10 bg-white/5 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-500">
        <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="text-2xl font-black mb-6 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-widest text-sm">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:bg-white/[0.06] transition-colors">
        <h3 className="text-xl font-bold mb-4 text-white">{question}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">{answer}</p>
    </div>
);

const TechFeature = ({ title, desc }: { title: string, desc: string }) => (
    <div className="space-y-2">
        <h4 className="text-white font-bold text-sm tracking-tight">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
);

export default Services;
