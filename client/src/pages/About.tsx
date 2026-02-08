import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>About Us | Klypso</title>
                <meta name="description" content="Learn about Klypso, our mission, values, and the team driving digital innovation." />
            </Helmet>

            <div className="container mx-auto max-w-6xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
                        We Are Klypso
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
                        A collective of visionaries, creators, and engineers dedicated to redefining the digital landscape.
                        We don't just build websites; we craft immersive digital experiences that resonate.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-10 rounded-3xl"
                    >
                        <Target className="w-12 h-12 text-indigo-500 mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed">
                            To empower businesses with cutting-edge digital solutions that drive growth, enhance brand value,
                            and create meaningful connections with their audience. We strive to bridge the gap between
                            imagination and reality through technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-10 rounded-3xl"
                    >
                        <Zap className="w-12 h-12 text-yellow-500 mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-400 leading-relaxed">
                            To be the global catalyst for digital transformation, setting new standards for design aesthetics,
                            performance, and user experience. We envision a web that is faster, more beautiful, and
                            universally accessible.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Core Values
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Award className="text-pink-500" />}
                            title="Excellence"
                            desc="We never settle for 'good enough'. Every pixel, every line of code is polished to perfection."
                        />
                        <ValueCard
                            icon={<Users className="text-green-500" />}
                            title="Collaboration"
                            desc="We believe in the power of partnership. Your success is our success, and we work as an extension of your team."
                        />
                        <ValueCard
                            icon={<Target className="text-blue-500" />}
                            title="Innovation"
                            desc="We stay ahead of the curve, constantly exploring new technologies and trends to keep you competitive."
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

const ValueCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="text-center p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all"
    >
        <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export default About;
