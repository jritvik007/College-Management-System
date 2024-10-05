const Faculty = require('../models/facultyModel');

// Add a new faculty member
const addFaculty = async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        await newFaculty.save();
        res.status(201).json({ message: 'Faculty added successfully', faculty: newFaculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all faculty members
const getFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find().populate('courses');
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a faculty member by ID
const getFacultyByID = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.facultyID).populate('courses');
        if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a faculty member
const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(req.params.facultyID, req.body, { new: true });
        if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
        res.status(200).json({ message: 'Faculty updated successfully', faculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a faculty member
const deleteFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.facultyID);
        if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
        res.status(200).json({ message: 'Faculty deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addFaculty,
    getFaculty,
    getFacultyByID,
    updateFaculty,
    deleteFaculty
};
