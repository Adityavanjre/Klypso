const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getProjects)
    .post(protect, admin, createProject);

module.exports = router;
