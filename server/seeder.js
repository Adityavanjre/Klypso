const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Blog = require('./models/Blog');
const Job = require('./models/Job');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const projects = [
    {
        title: 'Lumina Premium Retail',
        description: 'A multi-sensory e-commerce ecosystem for luxury apparel.',
        fullDescription: 'Lumina required a digital flagship store that mirrored the tactile elegance of their physical boutiques. We engineered a headless architecture that prioritizes visual fidelity without sacrificing load performance, integrating high-definition video backgrounds and seamless transition logic.',
        categories: ['Web Architecture', 'Visual Assets & Photo'],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
        challenge: 'Maintaining high-resolution visual quality while achieving sub-200ms page transitions across global regions.',
        solution: 'Developed a custom Next.js storefront with granular image optimization and an edge-cached content layer.',
        technologies: ['React', 'Next.js', 'Shopify Hydrogen', 'Tailwind CSS', 'Framer Motion'],
        impact: 'Boosted conversion rates by 42% and reduced average time-to-first-byte by 65%.',
        testimonial: {
            quote: "The team at Klypso delivered a digital experience that actually feels like our brand. It's rare to find engineers with this much design intuition.",
            author: "Elena Rossi",
            role: "Global Creative Director"
        },
        gallery: [
            'https://images.unsplash.com/photo-1441984969233-389a846fbb2a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab5cf0db69?q=80&w=1200&auto=format&fit=crop'
        ],
        services: ['Headless E-commerce', 'UX/UI Engineering', 'Performance Optimization'],
        link: ''
    },
    {
        title: 'Horizon Urban Estates',
        description: 'Immersive visual narrative for prime architectural developments.',
        fullDescription: 'For Horizon, we moved beyond standard real estate listings into digital storytelling. Combining low-altitude drone cinematography with a minimal web interface, we created a platform where the architecture is the interface.',
        categories: ['Professional Photography', 'Web Architecture'],
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        challenge: 'Representing massive scale and intricate detail of urban developments within a standard mobile browser experience.',
        solution: 'Built a specialized gallery engine supporting 8K textures and interactive 360-degree environmental spans.',
        technologies: ['React', 'WebGL', 'Three.js', 'Cloudinary API', 'GSM (Global Site Mesh)'],
        impact: 'Generated 400% more high-intent enquiries for pre-construction phases compared to previous campaigns.',
        testimonial: {
            quote: "Klypso's photography and web implementation made our properties sell before we even broke ground.",
            author: "Marcus Thorne",
            role: "Principal Architect"
        },
        gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6199f7f009?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
        ],
        services: ['Architectural Photography', 'Immersive Web Experience', 'Visual Narrative'],
        link: ''
    },
    {
        title: 'Vanguard Security Systems',
        description: 'High-stake engineering for global cyber-defense infrastructure.',
        fullDescription: 'A completely overhauled dashboard and monitoring system for real-time threat detection. Vanguard required a UI that could display high-density information without cognitive fatigue, utilizing a carefully designed dark-mode color schema.',
        categories: ['Intelligence Systems', 'Web Architecture'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
        challenge: 'Synchronizing massive data streams from global firewalls into a unified, actionable heat-map.',
        solution: 'Architected a serverless backend with WebSockets for real-time reactivity and a Canvas-based rendering engine.',
        technologies: ['Node.js', 'Socket.io', 'AWS Lambda', 'D3.js', 'React'],
        impact: 'Reduced mean-time-to-resolution (MTTR) by 45% for critical security breaches.',
        testimonial: {
            quote: "The most intuitive security dashboard we've ever operated. It turns noise into intelligence.",
            author: "Sarah Jenkins",
            role: "Head of Operations"
        },
        gallery: [
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bbda4833ff72?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
        ],
        services: ['Dashboard Engineering', 'Real-time Data Visualization', 'Cyber-defense UI'],
        link: ''
    },
    {
        title: 'Bolt Logistics Hub',
        description: 'Full-spectrum operational suite for modern freight systems.',
        fullDescription: 'Bolt needed an end-to-end platform for fleet tracking, warehouse automation, and predictive maintenance. We integrated IoT sensors with a sleek MERN-based dashboard to give management total visibility.',
        categories: ['Intelligence Systems', 'Web Architecture'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
        challenge: 'Legacy system integration involving 20+ different APIs and hardware sensors.',
        solution: 'Built a middleware orchestration layer that normalizes data flows into a unified React interface.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'IoT-Gateway'],
        impact: 'Eliminated manual tracking errors by 92% and optimized fuel efficiency by 18%.',
        testimonial: {
            quote: "The Bolt Hub is the nervous system of our operations. We couldn't scale without it.",
            author: "David Varkey",
            role: "CEO, Bolt"
        },
        gallery: [
            'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop'
        ],
        services: ['IoT Integration', 'Logistics Management Suite', 'Real-time Tracking'],
        link: ''
    }
];

const blogs = [
    {
        title: "The Architecture of Extreme Performance",
        excerpt: "How we achieve sub-200ms load times for image-heavy creative sites using edge protocols.",
        author: "Aditya V.",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
        date: "Feb 08, 2026",
        content: "Modern users expect instant results. In this breakdown, we explore the specific stack and caching strategies Klypso uses to deliver high-fidelity visuals at atomic speeds."
    },
    {
        title: "Visual Narratives in High-Stakes Real Estate",
        excerpt: "Why standard photography isn't enough anymore. Exploring the intersection of cinematic capture and web tech.",
        author: "Sarah Chen",
        category: "Design",
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200&auto=format&fit=crop",
        date: "Jan 15, 2026",
        content: "Real estate branding is shifting. We look at how high-end photography combined with immersive web design creates a visceral reaction that drives faster sales."
    }
];

const jobs = [
    {
        role: "Full-Stack System Architect",
        type: "Full-time",
        location: "Remote",
        description: "Scale high-performance applications for global clients using modern MERN & Next.js stacks.",
        requirements: ["5+ Years React/Node experience", "Strong system design skills", "Zero-latency mindset"]
    },
    {
        role: "Creative Content Director",
        type: "Contract",
        location: "Remote / On-site Hubs",
        description: "Oversee visual identity and photography for prime global brands and architectural projects.",
        requirements: ["Portfolio of high-end photography", "Eye for luxury aesthetics", "Experience with motion design"]
    }
];

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
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
        console.log('Elite Data Injected Sucessfully!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (require.main === module) {
    importData();
}

module.exports = { projects, blogs, jobs };
