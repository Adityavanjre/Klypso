const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod = null;

const connectDB = async () => {
    // 1. Try to connect to persistent MongoDB if URI is provided
    if (process.env.MONGO_URI) {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 2000 // 2 second timeout before fallback
            });
            console.log(`MongoDB Connected (Persistent): ${conn.connection.host}`);
            return;
        } catch (err) {
            console.error(`Failed to connect to persistent DB: ${err.message}`);
            console.log('Falling back to In-Memory Database...');
        }
    }

    // 2. Fallback to In-Memory Database
    try {
        console.log('Attempting to start MongoDB Memory Server...');
        mongod = await MongoMemoryServer.create({
            instance: {
                port: 27017, // Try to bind to default port
            }
        });
        const uri = mongod.getUri();

        console.log(`MongoDB Memory Server started at: ${uri}`);

        const conn = await mongoose.connect(uri);

        console.log(`MongoDB Connected (Memory): ${conn.connection.host}`);

        // Seed admin user on start since data is volatile
        await createAdminSafely();
    } catch (error) {
        console.error(`MongoDB Memory Server Error: ${error.message}`);
        // If port 27017 is taken, try dynamic port
        if (error.code === 'EADDRINUSE' || error.message.includes('port')) {
            console.log('Port 27017 busy, trying dynamic port...');
            try {
                mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();
                console.log(`MongoDB Memory Server started at: ${uri}`);
                const conn = await mongoose.connect(uri);
                console.log(`MongoDB Connected (Memory): ${conn.connection.host}`);
                await createAdminSafely();
            } catch (retryError) {
                console.error(`Retry failed: ${retryError.message}`);
                process.exit(1);
            }
        } else {
            console.error(error);
            // Don't exit process, maybe the persistent DB worked?
            // Actually if we are here, everything failed.
            if (!mongoose.connection.readyState) process.exit(1);
        }
    }
};

const createAdminSafely = async () => {
    try {
        const User = require('../models/User');
        const Project = require('../models/Project');
        const Blog = require('../models/Blog');
        const Job = require('../models/Job');

        const userExists = await User.findOne({ email: 'admin@klypso.agency' });

        if (!userExists) {
            await User.create({
                name: 'System Admin',
                email: 'admin@klypso.agency',
                password: 'password123',
                isAdmin: true,
            });
            console.log('Admin user seeded in memory database.');
        }

        // Check if projects exist, if not seed them
        const projectCount = await Project.countDocuments();
        if (projectCount === 0) {
            const { projects, blogs, jobs } = require('../seeder.js');
            console.log('Seeding initial project, blog, and job data...');
            await Project.insertMany(projects);
            await Blog.insertMany(blogs);
            await Job.insertMany(jobs);
            console.log('Data successfully seeded to memory database.');
        }
    } catch (err) {
        console.error('Error seeding admin:', err.message);
    }
};

module.exports = connectDB;
