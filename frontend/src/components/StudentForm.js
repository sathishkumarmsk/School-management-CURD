import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStudent = {
        name,
        grade,
        age: parseInt(age),
        email,
        phoneNumber: parseInt(phoneNumber)
      };
      await axios.post(`${baseURL}/students`, newStudent);
      alert('Student created successfully!');
      // Reset the form
      setName('');
      setGrade('');
      setAge('');
      setEmail('');
      setPhonenumber('');
    } catch (error) {
      console.error(error);
      alert('Failed to create a new student.');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
