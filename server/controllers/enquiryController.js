const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');

// @desc    Create new enquiry
// @route   POST /api/enquiries
// @access  Public
const createEnquiry = async (req, res) => {
    const {
        name,
        email,
        phone,
        service,
        projectType,
        budget,
        timeline,
        message,
        referenceLinks
    } = req.body;

    try {
        const enquiry = new Enquiry({
            name,
            email,
            phone,
            service,
            projectType,
            budget,
            timeline,
            message,
            referenceLinks,
        });

        const createdEnquiry = await enquiry.save();

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Admin receives notification
            subject: `New Project Enquiry: ${projectType} from ${name}`,
            text: `
                New Enquiry Received!
                
                Client Details:
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                
                Project Details:
                Service: ${service}
                Type: ${projectType}
                Budget: ${budget}
                Timeline: ${timeline}
                
                Message:
                ${message}
                
                Reference Links:
                ${referenceLinks && referenceLinks.length > 0 ? referenceLinks.join(', ') : 'None'}
            `,
            html: `
                <h3>New Project Enquiry Received!</h3>
                <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <hr />
                <h4>Project Details</h4>
                <ul>
                    <li><strong>Service:</strong> ${service}</li>
                    <li><strong>Type:</strong> ${projectType}</li>
                    <li><strong>Budget:</strong> ${budget}</li>
                    <li><strong>Timeline:</strong> ${timeline}</li>
                </ul>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">${message}</blockquote>
                <p><strong>Reference Links:</strong> ${referenceLinks && referenceLinks.length > 0 ? referenceLinks.join(', ') : 'None'}</p>
            `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Error sending email:', error);
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
