const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    courseName: String,
    description: String,
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
