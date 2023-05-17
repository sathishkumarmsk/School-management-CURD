// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import StaffList from './components/StaffList';
import StudentList from './components/StudentList';
import CourseForm from './components/CourseForm';
import StaffForm from './components/StaffForm';
import StudentForm from './components/StudentForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/courses" element={<CourseList />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/courses/add" element={<CourseForm />} />
          <Route path="/staff/add" element={<StaffForm />} />
          <Route path="/students/add" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
