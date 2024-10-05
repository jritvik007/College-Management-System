const Student = require('../models/studentModel');

// Add a new student
const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: 'Student added successfully', student: newStudent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('enrolledCourses');
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a student by ID
const getStudentByID = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentID).populate('enrolledCourses');
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.studentID, req.body, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Enroll a student in a course
const enrollInCourse = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentID);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        student.enrolledCourses.push(req.body.courseID);
        await student.save();
        res.status(200).json({ message: 'Enrolled in course', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.studentID);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addStudent,
    getStudents,
    getStudentByID,
    updateStudent,
    enrollInCourse,
    deleteStudent
};
