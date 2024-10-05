const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyID: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    email: String,
    department: String,
    courses: [
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

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
