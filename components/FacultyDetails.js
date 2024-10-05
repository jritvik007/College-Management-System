import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacultyDetails.css';

function FacultyDetails({ facultyID }) {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/faculty/${facultyID}`)
      .then(response => setFaculty(response.data))
      .catch(error => console.error('Error fetching faculty:', error));
  }, [facultyID]);

  if (!faculty) return <div>Loading...</div>;

  return (
    <div className="faculty-details">
      <h3>Faculty Details</h3>
      <h4>{faculty.name}</h4>
      <p>Email: {faculty.email}</p>
      <p>Department: {faculty.department}</p>
    </div>
  );
}

export default FacultyDetails;
