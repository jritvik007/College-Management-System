import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacultyList.css';

function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/faculty')
      .then(response => setFaculty(response.data))
      .catch(error => console.error('Error fetching faculty:', error));
  }, []);

  return (
    <div className="faculty-list">
      <h2>Faculty</h2>
      <ul>
        {faculty.map(facultyMember => (
          <li key={facultyMember._id}>
            <strong>{facultyMember.name}</strong> - {facultyMember.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyList;
