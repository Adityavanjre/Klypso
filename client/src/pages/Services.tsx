import { motion } from 'framer-motion';
import {
    Smartphone, TrendingUp, PenTool,
    Monitor, Cloud, Shield
} from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-12 px-4 overflow-hidden">
            <SEO
                title="Our Services | Klypso"
                description="Explore our comprehensive range of digital services including web development, app creation, and strategic marketing."
            />

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
                        Digital Mastery
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400">
                        We don't just build software; we engineer digital ecosystems tailored for growth and impact.
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <ServiceDetailCard
                        icon={<Monitor className="text-indigo-400" size={40} />}
                        title="Web Development"
                        description="Custom, high-performance websites built with React, Next.js, and modern frameworks. SEO-ready and fully responsive."
                        features={['SPA & PWA', 'E-commerce', 'CMS Integration']}
                    />
                    <ServiceDetailCard
                        icon={<Smartphone className="text-pink-400" size={40} />}
                        title="App Development"
                        description="Native and cross-platform mobile applications for iOS and Android that provide seamless user experiences."
                        features={['React Native', 'Flutter', 'UI/UX Design']}
                    />
                    <ServiceDetailCard
                        icon={<TrendingUp className="text-green-400" size={40} />}
                        title="Digital Marketing"
                        description="Data-driven strategies to boost your online presence, traffic, and conversions."
                        features={['SEO/SEM', 'Social Media', 'Content Strategy']}
                    />
                    <ServiceDetailCard
                        icon={<PenTool className="text-yellow-400" size={40} />}
                        title="Creative Design"
                        description="Brand identity, logo design, and UI/UX prototyping that tells your story visually."
                        features={['Branding', 'Prototyping', 'Visual Assets']}
                    />
                    <ServiceDetailCard
                        icon={<Cloud className="text-cyan-400" size={40} />}
                        title="Cloud Solutions"
                        description="Scalable cloud infrastructure setup and management on AWS, Google Cloud, or Azure."
                        features={['DevOps', 'Serverless', 'Microservices']}
                    />
                    <ServiceDetailCard
                        icon={<Shield className="text-red-400" size={40} />}
                        title="Cybersecurity"
                        description="Protecting your digital assets with robust security audits and implementation."
                        features={['Audits', 'Encryption', 'Compliance']}
                    />
                </div>

                {/* Process Section */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-10" />

                    <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        <ProcessStep number="01" title="Discovery" desc="We dive deep into your goals and market to define the roadmap." />
                        <ProcessStep number="02" title="Design" desc="Crafting intuitive and stunning interfaces that users love." />
                        <ProcessStep number="03" title="Develop" desc="Writing clean, efficient, and scalable code." />
                        <ProcessStep number="04" title="Launch" desc="Deploying your solution and monitoring its success." />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceDetailCard = ({ icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
    >
        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
            {description}
        </p>
        <ul className="space-y-2">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="text-center relative">
        <div className="text-6xl font-black text-white/5 mb-4 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
            {number}
        </div>
        <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
        <p className="text-gray-400 text-sm relative z-10">{desc}</p>
    </div>
);

export default Services;
