import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="course-list">
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <strong>{course.courseName}</strong> - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
