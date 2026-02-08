const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
    {
        title: 'Lumina Fashion',
        description: 'A bespoke e-commerce experience for a luxury fashion house, featuring 3D product visualization, AI-driven size recommendations, and a seamless checkout process that increased conversion by 40%.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop',
        category: 'E-Commerce',
        link: 'https://example.com/lumina'
    },
    {
        title: 'Nexus Health',
        description: 'A HIPAA-compliant telemedicine platform connecting patients with specialists. Features include encrypted video consultations, integrated prescription management, and real-time vital monitoring.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop',
        category: 'Healthcare',
        link: 'https://example.com/nexus'
    },
    {
        title: 'EstatePrime',
        description: 'A high-performance real estate portal processing over 100,000 listings daily. We implemented advanced map-based search, virtual tours, and automated valuation models for a premium user experience.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop',
        category: 'Real Estate',
        link: 'https://example.com/estate'
    },
    {
        title: 'FinVault',
        description: 'A secure, bank-grade financial dashboard for high-net-worth individuals. The platform aggregates data from multiple institutions, offering predictive investment analytics and tax optimization insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
        category: 'FinTech',
        link: 'https://example.com/finvault'
    },
    {
        title: 'EcoTrack',
        description: 'An IoT-enabled dashboard for monitoring industrial energy consumption. We helped the client reduce waste by 25% through real-time alerts and machine learning-powered predictive maintenance.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop',
        category: 'IoT / Enterprise',
        link: 'https://example.com/ecotrack'
    },
    {
        title: 'Culina',
        description: 'A vibrant, interactive app for a global restaurant chain. Features include table reservations, loyalty program integration, and an immersive menu with AR previews of signature dishes.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop',
        category: 'Hospitality',
        link: 'https://example.com/culina'
    },
];

const connectDB = async () => {
    try {
        // Force IPv4 or ensure string is correct
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

        await Project.deleteMany(); // Clear existing projects
        await Project.insertMany(projects);

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
