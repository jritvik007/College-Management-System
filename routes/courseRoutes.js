const express = require('express');
const { addCourse, getCourses, getCourseByCode, updateCourse, deleteCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/courses', addCourse);
router.get('/courses', getCourses);
router.get('/courses/:courseCode', getCourseByCode);
router.put('/courses/:courseCode', updateCourse);
router.delete('/courses/:courseCode', deleteCourse);

module.exports = router;
