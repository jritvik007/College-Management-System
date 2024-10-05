const express = require('express');
const { addStudent, getStudents, getStudentByID, updateStudent, enrollInCourse, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/students', addStudent);
router.get('/students', getStudents);
router.get('/students/:studentID', getStudentByID);
router.put('/students/:studentID', updateStudent);
router.put('/students/enroll/:studentID', enrollInCourse);
router.delete('/students/:studentID', deleteStudent);

module.exports = router;
