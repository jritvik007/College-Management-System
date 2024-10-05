import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

function AddStudent() {
  const [student, setStudent] = useState({
    studentID: '',
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/students', student)
      .then(() => {
        alert('Student added successfully!');
        setStudent({ studentID: '', name: '', email: '', phone: '', department: '' });
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <form className="add-student" onSubmit={handleSubmit}>
      <h3>Add New Student</h3>
      <input
        type="text"
        name="studentID"
        value={student.studentID}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={student.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="department"
        value={student.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
