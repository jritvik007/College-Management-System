import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentList.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="student-list">
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <strong>{student.name}</strong> - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
