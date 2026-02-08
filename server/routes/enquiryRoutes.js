const express = require('express');
const router = express.Router();
const { createEnquiry } = require('../controllers/enquiryController');

router.route('/').post(createEnquiry); // Assuming all enquiries go here

module.exports = router;
