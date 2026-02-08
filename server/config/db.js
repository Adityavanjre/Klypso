const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod = null;

const connectDB = async () => {
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

        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Seed admin user on start since data is volatile
        await createAdminSafely();
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        // If port 27017 is taken, try dynamic port
        if (error.code === 'EADDRINUSE' || error.message.includes('port')) {
            console.log('Port 27017 busy, trying dynamic port...');
            try {
                mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();
                console.log(`MongoDB Memory Server started at: ${uri}`);
                const conn = await mongoose.connect(uri);
                console.log(`MongoDB Connected: ${conn.connection.host}`);
                await createAdminSafely();
            } catch (retryError) {
                console.error(`Retry failed: ${retryError.message}`);
                process.exit(1);
            }
        } else {
            process.exit(1);
        }
    }
};

const createAdminSafely = async () => {
    try {
        const User = require('../models/User');
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
    } catch (err) {
        console.error('Error seeding admin:', err.message);
    }
};

module.exports = connectDB;
