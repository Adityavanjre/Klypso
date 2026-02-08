import { motion } from 'framer-motion';
import { Code, Smartphone, Share2, TrendingUp, PenTool, Camera, Film, Layers } from 'lucide-react';

const services = [
    {
        title: 'Website Development',
        description: 'High-performance, SEO-optimized websites tailored to your brand.',
        icon: <Code size={40} className="text-indigo-400" />,
    },
    {
        title: 'App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        icon: <Smartphone size={40} className="text-pink-400" />,
    },
    {
        title: 'Social Media Management',
        description: 'Strategic content and engagement to grow your audience.',
        icon: <Share2 size={40} className="text-purple-400" />,
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven campaigns to boost conversions and ROI.',
        icon: <TrendingUp size={40} className="text-green-400" />,
    },
    {
        title: 'Creative Content',
        description: 'Compelling copywriting and visual storytelling.',
        icon: <PenTool size={40} className="text-yellow-400" />,
    },
    {
        title: 'Content Creation',
        description: 'Engaging video and multimedia content for all platforms.',
        icon: <Film size={40} className="text-red-400" />,
    },
    {
        title: 'Photography',
        description: 'Professional photography to capture your brand\'s essence.',
        icon: <Camera size={40} className="text-blue-400" />,
    },
    {
        title: 'Brand Strategy',
        description: 'Comprehensive branding and identity design.',
        icon: <Layers size={40} className="text-orange-400" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

import { Helmet } from 'react-helmet-async';

const Services = () => (
    <section className="min-h-screen bg-black text-white py-24 px-4">
        <Helmet>
            <title>Services | Klypso</title>
            <meta name="description" content="Explore our range of digital services including web development, app development, social media management, and branding." />
        </Helmet>
        <div className="container mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
                    Our Expertise
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We combine creativity and technology to deliver world-class digital solutions.
                </p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
                    >
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Services;
