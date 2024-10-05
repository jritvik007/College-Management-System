import React, { useState } from 'react';
import axios from 'axios';
import './AddFaculty.css';

function AddFaculty() {
  const [faculty, setFaculty] = useState({
    facultyID: '',
    name: '',
    email: '',
    department: '',
  });

  const handleChange = (e) => {
    setFaculty({
      ...faculty,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/faculty', faculty)
      .then(() => {
        alert('Faculty member added successfully!');
        setFaculty({ facultyID: '', name: '', email: '', department: '' });
      })
      .catch(error => console.error('Error adding faculty:', error));
  };

  return (
    <form className="add-faculty" onSubmit={handleSubmit}>
      <h3>Add New Faculty</h3>
      <input
        type="text"
        name="facultyID"
        value={faculty.facultyID}
        onChange={handleChange}
        placeholder="Faculty ID"
        required
      />
      <input
        type="text"
        name="name"
        value={faculty.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={faculty.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="department"
        value={faculty.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">Add Faculty</button>
    </form>
  );
}

export default AddFaculty;
