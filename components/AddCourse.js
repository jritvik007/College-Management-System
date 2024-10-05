import React, { useState } from 'react';
import axios from 'axios';
import './AddCourse.css';

function AddCourse() {
  const [course, setCourse] = useState({
    courseCode: '',
    courseName: '',
    description: '',
    credits: '',
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/courses', course)
      .then(() => {
        alert('Course added successfully!');
        setCourse({ courseCode: '', courseName: '', description: '', credits: '' });
      })
      .catch(error => console.error('Error adding course:', error));
  };

  return (
    <form className="add-course" onSubmit={handleSubmit}>
      <h3>Add New Course</h3>
      <input
        type="text"
        name="courseCode"
        value={course.courseCode}
        onChange={handleChange}
        placeholder="Course Code"
        required
      />
      <input
        type="text"
        name="courseName"
        value={course.courseName}
        onChange={handleChange}
        placeholder="Course Name"
        required
      />
      <textarea
        name="description"
        value={course.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="credits"
        value={course.credits}
        onChange={handleChange}
        placeholder="Credits"
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default AddCourse;
