const Course = require('../models/courseModel');

// Add a new course
const addCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('faculty studentsEnrolled');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a course by code
const getCourseByCode = async (req, res) => {
    try {
        const course = await Course.findOne({ courseCode: req.params.courseCode }).populate('faculty studentsEnrolled');
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate({ courseCode: req.params.courseCode }, req.body, { new: true });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ courseCode: req.params.courseCode });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addCourse,
    getCourses,
    getCourseByCode,
    updateCourse,
    deleteCourse
};
