import { motion } from 'framer-motion';
import {
    Smartphone, TrendingUp, PenTool,
    Monitor, Cloud, CheckCircle, Camera
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
                        icon={<TrendingUp className="text-orange-400" size={40} />}
                        title="SEO & Content Strategy"
                        description="Dominate search results with data-driven SEO workflows and compelling content narratives."
                        features={['Technical SEO', 'Copywriting', 'Link Building']}
                    />
                    <ServiceDetailCard
                        icon={<Camera className="text-purple-400" size={40} />}
                        title="Professional Photography"
                        description="Capturing your brand's essence with high-end corporate, product, and event photography."
                        features={['Weddings & Events', 'Pre-wedding & Baby Shower', 'Product & Commercial']}
                    />

                </div>

                {/* Detailed Features / Why Choose Us */}
                <div className="mb-24 px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Klypso?</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <FeatureRow title="Tailored Solutions" desc="We don't do cookie-cutter. Every solution is custom-architected to your specific business needs." />
                            <FeatureRow title="Speed & Performance" desc="We obsess over milliseconds. Our sites load faster, rank higher, and convert better." />
                            <FeatureRow title="Scalable Architecture" desc="Built for growth. Our systems are designed to handle millions of users without breaking a sweat." />
                        </div>
                        <div className="space-y-6">
                            <FeatureRow title="Transparent Communication" desc="No jargon. No black boxes. We keep you in the loop at every stage of the development process." />
                            <FeatureRow title="Post-Launch Support" desc="We don't just launch and leave. We provide ongoing support and maintenance to ensure long-term success." />
                            <FeatureRow title="ROI Focused" desc="We focus on metrics that matter. Our strategies are designed to maximize your return on investment." />
                        </div>
                    </div>
                </div>

                {/* Engagement Models */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">Engagement Models</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ModelCard
                            title="Fixed Price"
                            desc="Perfect for well-defined projects with clear requirements. We define the scope, timeline, and budget upfront."
                            features={['Clear Deliverables', 'Fixed Budget', 'Defined Timeline']}
                        />
                        <ModelCard
                            title="Time & Material"
                            desc="Ideal for evolving projects. You pay for the time and resources used, offering maximum flexibility."
                            features={['Flexible Scope', 'Pay-as-you-go', 'Agile Adaptation']}
                        />
                        <ModelCard
                            title="Dedicated Team"
                            desc="We become your remote tech department. A dedicated team of developers and designers working solely for you."
                            features={['Full Control', 'Scalable Team', 'Long-term Partnership']}
                        />
                    </div>
                </div>

                {/* Photography Packages */}
                <div className="mb-24 bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-3xl font-bold text-center mb-4">Photography Packages</h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Professional visual storytelling tailored to your needs. All packages include professional editing and a secure online gallery.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <PackageCard
                            name="The Essentials"
                            price="Custom"
                            desc="Perfect for headshots, small product shoots, or quick social media content updates."
                            features={['2 Hour Session', '1 Location', '20 High-Res Edits', 'Online Gallery']}
                        />
                        <PackageCard
                            name="Brand Narrative"
                            price="Custom"
                            desc="Comprehensive coverage for brands needing a full visual identity refresh or campaign."
                            features={['Half-Day Shoot (4 Hrs)', '2 Locations', '50 High-Res Edits', 'Commercial License']}
                            featured={true}
                        />
                        <PackageCard
                            name="Event & Corporate"
                            price="Custom"
                            desc="Full-scale coverage for corporate events, conferences, or large weddings."
                            features={['Full-Day Shoot (8 Hrs)', 'Multiple Photographers', 'Unlimited Photos', 'Same-Day Highlights']}
                        />
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="How do you ensure project quality?"
                            answer="We follow a rigorous QA process including automated testing, peer code reviews, and user acceptance testing (UAT) before any deployment."
                        />
                        <FAQItem
                            question="Do you provide post-launch support?"
                            answer="Absolutely. We offer various maintenance packages to ensure your application stays secure, up-to-date, and performs optimally."
                        />
                        <FAQItem
                            question="What is your typical timeline?"
                            answer="Timelines vary by project scope. A standard brochure website might take 4-6 weeks, while a complex custom app could take 3-6 months. We provide detailed schedules during discovery."
                        />
                        <FAQItem
                            question="Do I own the code?"
                            answer="Yes. Once the invoices are paid, you own 100% of the Intellectual Property (IP), code, and assets we create for you."
                        />
                    </div>
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

const ModelCard = ({ title, desc, features }: { title: string, desc: string, features: string[] }) => (
    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 h-12">{desc}</p>
        <ul className="space-y-3">
            {features.map((f, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                    {f}
                </li>
            ))}
        </ul>
    </div>
);

const PackageCard = ({ name, price, desc, features, featured = false }: { name: string, price: string, desc: string, features: string[], featured?: boolean }) => (
    <div className={`p-8 rounded-2xl border transition-all ${featured ? 'bg-indigo-900/20 border-indigo-500/50 scale-105' : 'bg-white/5 border-white/10'}`}>
        {featured && <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Most Popular</div>}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-2xl font-bold mb-4">{price}</div>
        <p className="text-gray-400 text-sm mb-6">{desc}</p>
        <ul className="space-y-3 pt-6 border-t border-white/10">
            {features.map((f, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={14} className="text-green-500 mr-2" />
                    {f}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-2 text-white">{question}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </div>
);

const ServiceDetailCard = ({ icon, title, description, features }: { icon: React.ReactNode, title: string, description: string, features: string[] }) => (
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

const FeatureRow = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex gap-4">
        <div className="mt-1">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <CheckCircle size={16} />
            </div>
        </div>
        <div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </div>
);

export default Services;
