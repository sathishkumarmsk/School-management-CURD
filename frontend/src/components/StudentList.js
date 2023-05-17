// StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editingStudents, setEditingStudents] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedGrade, setUpdatedGrade] = useState('');
  const [updatedAge, setUpdatedAge] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhoneNumber, setUpdatedPhoneNUmber] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${baseURL}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/students/${id}`);
      fetchStudents();
      console.log(`Student with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(error);
    }
  };

    const handleEdit = (student) => {
    setEditingStudents(student);
    setUpdatedName(student.name);
    setUpdatedGrade(student.grade);
    setUpdatedAge(student.age);
    setUpdatedEmail(student.email);
    setUpdatedPhoneNUmber(student.phoneNUmber);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${baseURL}/courses/${editingStudents._id}`, {
        name: updatedName,
        grade: updatedGrade,
        age: updatedAge,
        email: updatedEmail,
        phoneNUmber: updatedPhoneNumber,
      });
      fetchStudents();
      console.log(`Student with ID ${editingStudents._id} updated successfully.`);
      setEditingStudents(null);
      setUpdatedName('');
      setUpdatedGrade('');
      setUpdatedAge('');
    } catch (error) {
      console.error(error);
    }
  };

    const handleCancel = () => {
    setEditingStudents(null);
    setUpdatedName('');
    setUpdatedGrade('');
    setUpdatedAge('');
    setUpdatedEmail('');
    setUpdatedPhoneNUmber('');
  };


  return (
    <div>
      <h2>Students List</h2>
      {students.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {students.map((student) => (
          <li key={student._id}>
            {editingStudents && editingStudents._id === student._id ? (
                <div>
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={updatedGrade}
                    onChange={(e) => setUpdatedGrade(e.target.value)}
                  />
                  <input
                    type="number"
                    value={updatedAge}
                    onChange={(e) => setUpdatedAge(e.target.value)}
                  />
                  <input
                    type="number"
                    value={updatedPhoneNumber}
                    onChange={(e) => setUpdatedPhoneNUmber(e.target.value)}
                  />
                                    <input
                    type="text"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <>
                  <span>{student.name}</span> - <span>{student.grade}</span>
                  <button onClick={() => handleDelete(student._id)}>Delete</button>
                  <button onClick={() => handleEdit(student)}>Update</button>
                </>
              )}
            
          </li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
