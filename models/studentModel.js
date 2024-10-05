const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    email: String,
    phone: String,
    department: String,
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
