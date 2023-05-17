import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const StaffForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStaff = {
        name,
        position,
        department,
      };
      await axios.post(`${baseURL}/staff`, newStaff);
      alert('Staff member created successfully!');
      // Reset the form
      setName('');
      setPosition('');
      setDepartment('');
    } catch (error) {
      console.error(error);
      alert('Failed to create a new staff member.');
    }
  };

  return (
    <div>
      <h2>Add New Staff Member</h2>
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
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Staff</button>
      </form>
    </div>
  );
};

export default StaffForm
