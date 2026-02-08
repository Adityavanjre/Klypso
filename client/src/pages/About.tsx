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

                {/* Team Section */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Meet the Visionaries
                    </motion.h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <TeamMember
                            name="Aditya V."
                            role="Founder & Principal Architect"
                            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                        />
                        <TeamMember
                            name="Sarah Chen"
                            role="Head of Design"
                            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                        />
                        <TeamMember
                            name="James Wilson"
                            role="Lead Developer"
                            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                        />
                        <TeamMember
                            name="Priya Patel"
                            role="Marketing Director"
                            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                        />
                    </div>
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


                {/* Our Philosophy */}
                <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Built on Trust & Transparency</h2>
                        <p className="text-gray-400 leading-relaxed max-w-lg">
                            At Klypso, we believe that great software is born from clear communication and honest collaboration.
                            We don't hide behind jargon. We view ourselves as your long-term technical partners, not just vendors.
                            Our approach is simple: we build what you need, we build it right, and we support you as you grow.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                        <blockquote className="text-xl italic text-gray-300">
                            "Technology is best when it brings people together. We craft digital experiences that feel human, intuitive, and seamless."
                        </blockquote>
                        <div className="mt-4 text-sm font-bold text-indigo-400">- The Klypso Ethos</div>
                    </div>
                </div>

                {/* Our Process */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        How We Work
                    </motion.h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <ProcessStep number="01" title="Discover" desc="We start by understanding your brand, goals, and audience to create a tailored strategy." />
                        <ProcessStep number="02" title="Design" desc="Our creative team crafts visually stunning and intuitive interfaces that engage users." />
                        <ProcessStep number="03" title="Develop" desc="We build robust, scalable, and high-performance solutions using the latest technologies." />
                        <ProcessStep number="04" title="Deploy" desc="We launch your project with precision and provide ongoing support to ensure success." />
                    </div>
                </div>


            </div>
        </section >
    );
};

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
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

const TeamMember = ({ name, role, image }: { name: string, role: string, image: string }) => (
    <div className="group text-center">
        <div className="relative overflow-hidden rounded-2xl mb-4 aspecto-square">
            <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-indigo-400">{role}</p>
    </div>
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



export default About;
