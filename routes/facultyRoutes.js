const express = require('express');
const { addFaculty, getFaculty, getFacultyByID, updateFaculty, deleteFaculty } = require('../controllers/facultyController');

const router = express.Router();

router.post('/faculty', addFaculty);
router.get('/faculty', getFaculty);
router.get('/faculty/:facultyID', getFacultyByID);
router.put('/faculty/:facultyID', updateFaculty);
router.delete('/faculty/:facultyID', deleteFaculty);

module.exports = router;
