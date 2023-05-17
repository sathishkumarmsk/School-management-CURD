import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedTeacher, setUpdatedTeacher] = useState('');
  const [updatedCredits, setUpdatedCredits] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${baseURL}/courses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/courses/${id}`);
      fetchCourses();
      console.log(`Course with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setUpdatedName(course.name);
    setUpdatedTeacher(course.teacher);
    setUpdatedCredits(course.credits);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${baseURL}/courses/${editingCourse._id}`, {
        name: updatedName,
        teacher: updatedTeacher,
        credits: updatedCredits,
      });
      fetchCourses();
      console.log(`Course with ID ${editingCourse._id} updated successfully.`);
      setEditingCourse(null);
      setUpdatedName('');
      setUpdatedTeacher('');
      setUpdatedCredits('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingCourse(null);
    setUpdatedName('');
    setUpdatedTeacher('');
    setUpdatedCredits('');
  };

  return (
    <div>
      <h2>Course List</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course._id}>
              {editingCourse && editingCourse._id === course._id ? (
                <div>
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={updatedTeacher}
                    onChange={(e) => setUpdatedTeacher(e.target.value)}
                  />
                  <input
                    type="number"
                    value={updatedCredits}
                    onChange={(e) => setUpdatedCredits(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <>
                  {course.name} - {course.teacher} - {course.credits} credits
                  <button onClick={() => handleDelete(course._id)}>Delete</button>
                  <button onClick={() => handleEdit(course)}>Update</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;

