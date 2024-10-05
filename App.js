import React from 'react';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import FacultyList from './components/FacultyList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import AddFaculty from './components/AddFaculty';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <AddStudent />
        <AddCourse />
        <AddFaculty />
        <StudentList />
        <CourseList />
        <FacultyList />
      </div>
    </div>
  );
}

export default App;
