import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const CourseForm = () => {
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [credits, setCredits] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  console.log(name);
  console.log(teacher);
  console.log(credits);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCourse = {
        name,
        teacher,
        credits: parseInt(credits),
      };

      await axios.post(`${baseURL}/courses`, newCourse);
      alert('Course created successfully!');
      // Reset the form
      setName('');
      setTeacher('');
      setCredits('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(`Failed to create a new course. Error: ${error.message}`);
      console.error(error);
    }
  };
  console.log(handleSubmit)

  return (
    <div>
      <h2>Add New Course</h2>
      {errorMessage && <p>{errorMessage}</p>}
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
          <label>Teacher:</label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Credits:</label>
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
