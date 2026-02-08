const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a project (Protected - for admin use later)
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res) => {
    const { title, description, image, category, link } = req.body;

    try {
        const project = new Project({
            title,
            description,
            image,
            category,
            link,
        });

        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getProjects,
    createProject,
};
