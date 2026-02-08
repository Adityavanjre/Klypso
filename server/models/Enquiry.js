const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    service: {
        type: String,
        required: true,
        enum: [
            'Web Development',
            'App Development',
            'SEO & Content Strategy',
            'Digital Marketing',
            'Professional Photography',
            'Photography',
            'UI/UX Design',
            'Social Media Management',
            'Content Creation',
            'Other',
        ],
    },
    projectType: {
        type: String,
        enum: ['New Project', 'Redesign', 'Maintenance', 'Consultation'],
        default: 'New Project'
    },
    budget: {
        type: String, // e.g., "< $1k", "$1k - $5k", "$5k - $10k", "> $10k"
        required: false
    },
    timeline: {
        type: String, // e.g., "ASAP", "1-2 months", "3-6 months"
        required: false
    },
    message: {
        type: String,
        required: true,
    },
    referenceLinks: {
        type: [String], // Array of URLs for inspiration
        default: []
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'Quoted', 'In Progress', 'Completed', 'Closed'],
        default: 'New'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
