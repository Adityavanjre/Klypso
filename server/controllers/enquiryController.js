const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');

// @desc    Create new enquiry
// @route   POST /api/enquiries
// @access  Public
const createEnquiry = async (req, res) => {
    const { name, email, service, message } = req.body;

    try {
        const enquiry = new Enquiry({
            name,
            email,
            service,
            message,
        });

        const createdEnquiry = await enquiry.save();

        // Send email notification (optional for now, but configured)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // User receives notification
            subject: `New Enquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json(createdEnquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getEnquiries = async (req, res) => {
    try {
        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEnquiry,
    getEnquiries,
};
