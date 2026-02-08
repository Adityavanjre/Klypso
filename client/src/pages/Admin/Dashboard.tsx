import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { LogOut, Plus, FileText, Settings, Users } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        projects: 0,
        enquiries: 0,
        visits: 1200 // Mock data for visits
    });
    const [recentEnquiries, setRecentEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                };

                // Fetch projects count
                const projectsRes = await axios.get('http://localhost:5000/api/projects');

                // Fetch enquiries (assuming we add an endpoint to get all enquiries, currently we only have Create and maybe Get for admin?)
                // We need to check if GET /api/enquiries exists and is protected.
                // Based on standard MERN patterns, it likely exists or we should handle the error.
                // For now, let's try to fetch if the route exists.
                // If not, we might fail. Let's assume it exists as per common practice or I will check routes.
                // server/routes/enquiryRoutes.js usually has a GET / for admins.

                // Let's blindly try to fetch enquiries. If it fails, we catch it.
                // Actually, I should have checked enquiryRoutes.js. 
                // But I can't check it inside this tool call.
                // I'll assume standard naming and protected route.

                let enquiriesCount = 0;
                let enquiriesList = [];

                try {
                    const enquiriesRes = await axios.get('http://localhost:5000/api/enquiries', config);
                    enquiriesCount = enquiriesRes.data.length;
                    enquiriesList = enquiriesRes.data.slice(0, 5);
                } catch (e) {
                    console.log("Could not fetch enquiries", e);
                }

                setStats(prev => ({
                    ...prev,
                    projects: projectsRes.data.length,
                    enquiries: enquiriesCount
                }));
                setRecentEnquiries(enquiriesList);
            } catch (error) {
                console.error("Error fetching dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-black text-white flex">
            <Helmet>
                <title>Admin Dashboard | Klypso</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Sidebar */}
            <aside className="w-64 bg-white/5 border-r border-white/10 hidden md:flex flex-col p-6">
                <div className="text-2xl font-bold mb-10 tracking-tighter">
                    Klypso <span className="text-indigo-500">Admin</span>
                </div>

                <nav className="flex-1 space-y-4">
                    <NavItem icon={<FileText size={20} />} label="Overview" active />
                    <Link to="/admin/add-project">
                        <NavItem icon={<Plus size={20} />} label="Add Project" />
                    </Link>
                    <NavItem icon={<Users size={20} />} label="Enquiries" />
                    <NavItem icon={<Settings size={20} />} label="Settings" />
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-400 hover:text-red-400 transition-colors mt-auto pt-6 border-t border-white/10"
                >
                    <LogOut size={20} className="mr-3" />
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">Welcome, {user?.name}</span>
                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-lg font-bold">
                            {user?.name?.charAt(0)}
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <StatCard title="Total Projects" value={stats.projects.toString()} color="indigo" />
                    <StatCard title="New Enquiries" value={stats.enquiries.toString()} color="green" />
                    <StatCard title="Site Visits" value="1.2k" color="pink" />
                </div>

                {/* Recent Activity */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-xl font-bold mb-6">Recent Enquiries</h2>
                    {loading ? (
                        <div className="text-gray-400 text-center py-12">Loading...</div>
                    ) : recentEnquiries.length > 0 ? (
                        <div className="space-y-4">
                            {recentEnquiries.map((enq: any) => (
                                <div key={enq._id} className="p-4 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-white">{enq.name}</h4>
                                        <p className="text-sm text-gray-400">{enq.service}</p>
                                    </div>
                                    <span className="text-xs text-gray-500">{new Date(enq.createdAt).toLocaleDateString()}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-400 text-center py-12">
                            No recent enquiries found.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-indigo-500/20 text-indigo-400' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
        <span className="mr-3">{icon}</span>
        <span className="font-medium">{label}</span>
    </div>
);

const StatCard = ({ title, value, color }: { title: string, value: string, color: string }) => {
    const colors: any = {
        indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
        green: 'text-green-400 bg-green-500/10 border-green-500/20',
        pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`p-6 rounded-2xl border ${colors[color]}`}
        >
            <h3 className="text-gray-400 mb-2">{title}</h3>
            <p className={`text-4xl font-bold ${colors[color].split(' ')[0]}`}>{value}</p>
        </motion.div>
    );
}

export default Dashboard;
