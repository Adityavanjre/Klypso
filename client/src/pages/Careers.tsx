import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobPost {
    _id: string;
    role: string;
    type: string;
    location: string;
    description: string;
}

const Careers = () => {
    const [jobs, setJobs] = useState<JobPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/jobs');
                setJobs(data);
            } catch (err) {
                console.error("Error fetching jobs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>Careers at Klypso | Join Our Team</title>
                <meta name="description" content="Join the Klypso team. We're always looking for talented developers, designers, and strategists." />
            </Helmet>

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Build the Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">With Us.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We are a remote-first collective of makers and thinkers. We value autonomy, mastery, and purpose over hours clocked.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <BenefitCard
                        title="Remote-First"
                        desc="Work from anywhere. We care about your output, not your location."
                    />
                    <BenefitCard
                        title="Competitive Pay"
                        desc="We pay top market rates because we only hire top talent."
                    />
                    <BenefitCard
                        title="Learning Budget"
                        desc="Annual stipend for courses, books, and conferences to keep you sharp."
                    />
                    <BenefitCard
                        title="Latest Tech"
                        desc="We don't maintain legacy code. We build with the bleeding edge."
                    />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Briefcase className="text-indigo-400" /> Open Positions
                    </h2>

                    <div className="space-y-4">
                        {loading ? (
                            Array(3).fill(0).map((_, i) => (
                                <div key={i} className="h-24 bg-white/5 animate-pulse rounded-xl" />
                            ))
                        ) : jobs.length > 0 ? (
                            jobs.map(job => (
                                <JobCard
                                    key={job._id}
                                    role={job.role}
                                    type={job.type}
                                    location={job.location}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-8 italic">No current openings, but we're always scouting.</p>
                        )}
                    </div>
                </div>

                <div className="text-center bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-12 rounded-3xl border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        We are always open to meeting extraordinary talent. Send us your portfolio and tell us how you can make an impact.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center">
                        Apply Speculatively <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const BenefitCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
        <h3 className="font-bold text-lg mb-2 text-white flex items-center gap-2">
            <CheckCircle size={18} className="text-green-400" /> {title}
        </h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </div>
);

const JobCard = ({ role, type, location }: { role: string, type: string, location: string }) => (
    <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-black/40 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all cursor-pointer">
        <div>
            <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">{role}</h3>
            <div className="flex gap-4 text-xs text-gray-500 mt-2">
                <span className="flex items-center gap-1"><Clock size={12} /> {type}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
            </div>
        </div>
        <div className="mt-4 md:mt-0">
            <Link to="/contact" className="btn-secondary text-xs py-2 px-4">Apply Now</Link>
        </div>
    </div>
);

export default Careers;
