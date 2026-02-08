const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Blog = require('./models/Blog');
const Job = require('./models/Job');

dotenv.config();

const projects = [
    {
        title: 'Lumina Fashion',
        description: 'A bespoke e-commerce experience for a luxury fashion house.',
        fullDescription: 'Lumina Fashion represents the pinnacle of digital luxury retail. We were approached to completely overhaul their outdated online presence and create a storefront that matched the elegance of their physical boutiques.',
        categories: ['Web', 'Design', 'E-Commerce'],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop',
        challenge: 'The client faced high cart abandonment rates due to a clunky checkout process and slow page loads.',
        solution: 'We built a headless commerce solution using Next.js and Shopify Plus, implementing AI-driven product recommendations and a streamlined one-page checkout.',
        technologies: ['React', 'Next.js', 'Shopify Plus', 'Tailwind CSS', 'Framer Motion'],
        impact: '40% increase in conversion rate, 25% increase in AOV, and a 60% reduction in bounce rate.',
        testimonial: {
            quote: "Klypso transformed our digital presence. The new site captures our brand essence perfectly while delivering incredible performance.",
            author: "Elena Rossi",
            role: "CMO, Lumina Fashion"
        },
        gallery: [
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab5a8cf0db69?q=80&w=1170&auto=format&fit=crop'
        ],
        link: 'https://example.com/lumina'
    },
    {
        title: 'Nexus Health',
        description: 'A HIPAA-compliant telemedicine platform connecting patients with specialists.',
        fullDescription: 'Nexus Health needed a secure, reliable platform to facilitate remote doctor-patient consultations during the pandemic and beyond.',
        categories: ['App', 'Web', 'Healthcare'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop',
        challenge: 'Ensuring end-to-end encryption for video calls while maintaining high video quality on low-bandwidth connections.',
        solution: 'We utilized WebRTC for secure, high-quality video streaming and built a custom encrypted messaging layer.',
        technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
        impact: 'Facilitated over 50,000 remote consultations in the first year and reduced patient wait times by 70%.',
        testimonial: {
            quote: "A secure, robust platform that stood up to the demands of a global crisis. Klypso delivered under immense pressure.",
            author: "Dr. James Chen",
            role: "CTO, Nexus Health"
        },
        gallery: [
            'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1170&auto=format&fit=crop'
        ],
        link: 'https://example.com/nexus'
    },
    {
        title: 'EstatePrime',
        description: 'A high-performance real estate portal processing over 100,000 listings daily.',
        fullDescription: 'EstatePrime aimed to disrupt the real estate market with a platform that offered virtual tours and instant valuation estimates.',
        categories: ['Web', 'Cloud', 'Real Estate'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop',
        challenge: 'Handling a massive database of property images and providing real-time search filtering without latency.',
        solution: 'We implemented Elasticsearch for sub-millisecond search queries and used an image CDN for optimized media delivery.',
        technologies: ['Vue.js', 'Elasticsearch', 'AWS S3', 'Python/Django'],
        impact: 'Processes 100k+ listings daily with sub-second search speeds. User engagement time increased by 300%.',
        gallery: [
            'https://images.unsplash.com/photo-1582407947304-fd86f028f808?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop'
        ],
        link: 'https://example.com/estate'
    },
];

const blogs = [
    {
        title: "The Future of Web Development: Why We Bet on Next.js",
        excerpt: "Discover why Klypso has adopted Next.js as our primary framework for building high-performance, SEO-friendly web applications in 2025.",
        author: "Aditya V.",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop",
        content: "Next.js provides the best developer experience with all the features we need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
    },
    {
        title: "SEO Strategies that Actually Work in the AI Era",
        excerpt: "With AI-generated content flooding the web, how do you stand out? We break down the new rules of SEO and content strategy.",
        author: "Team Klypso",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1170&auto=format&fit=crop",
        content: "Search engines are increasingly prioritizing experience, expertise, authoritativeness, and trustworthiness (E-E-A-T). AI content is a tool, but human insight remains the king of SEO."
    },
];

const jobs = [
    {
        role: "Senior React Developer",
        type: "Full-time / Contract",
        location: "Remote",
        description: "Join our core team to build stunning, award-winning digital experiences for global clients.",
        requirements: ["5+ years experience with React", "Expertise in Tailwind CSS", "Strong UX/UI sensibilities"]
    },
    {
        role: "UI/UX Designer",
        type: "Contract",
        location: "Remote",
        description: "We are looking for a visionary designer who can translate complex requirements into beautiful, intuitive interfaces.",
        requirements: ["Proficiency in Figma", "Experience with Framer Motion", "Portfolio of web/app designs"]
    }
];

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI.replace('localhost', '127.0.0.1'));
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        await connectDB();

        await Project.deleteMany();
        await Blog.deleteMany();
        await Job.deleteMany();

        await Project.insertMany(projects);
        await Blog.insertMany(blogs);
        await Job.insertMany(jobs);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await connectDB();

        await Project.deleteMany();
        await Blog.deleteMany();
        await Job.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
