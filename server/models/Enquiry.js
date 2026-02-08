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
    service: {
        type: String,
        required: true,
        enum: [
            'Website Development & Integration',
            'App Development',
            'Social Media Management',
            'Digital Marketing',
            'Creative Content',
            'Content Creation',
            'Photography',
            'Other',
        ],
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
