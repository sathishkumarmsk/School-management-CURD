import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../apiConfig';

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPosition, setUpdatedPosition] = useState('');
  const [updatedDepartment, setUpdatedDepartment] = useState('');

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get(`${baseURL}/staff`);
      setStaff(response.data);
    } catch (error) {
      console.error(error);
    }
  };

    const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/staff/${id}`);
      fetchStaff();
      console.log(`Staff with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (staff) => {
    setEditingStaff(staff);
    setUpdatedName(staff.name);
    setUpdatedPosition(staff.position);
    setUpdatedDepartment(staff.department);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${baseURL}/courses/${editingStaff._id}`, {
        name: updatedName,
        position: updatedPosition,
        department: updatedDepartment,
      });
      fetchStaff();
      console.log(`Course with ID ${editingStaff._id} updated successfully.`);
      setEditingStaff(null);
      setUpdatedName('');
      setUpdatedPosition('');
      setUpdatedDepartment('');
    } catch (error) {
      console.error(error);
    }
  };
    const handleCancel = () => {
    setEditingStaff(null);
    setUpdatedName('');
    setUpdatedPosition('');
    setUpdatedDepartment('');
  };

  return (
    <div>
      <h2>Staff List</h2>
      {staff.length === 0 ? (
        <p>No staff found.</p>
      ) : (
          <ul>
        {staff.map((staffMember) => (
          <li key={staffMember._id}>
            {editingStaff && editingStaff._id === staffMember._id ? (
                <div>
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={updatedPosition}
                    onChange={(e) => setUpdatedPosition(e.target.value)}
                  />
                  <input
                    type="text"
                    value={updatedDepartment}
                    onChange={(e) => setUpdatedDepartment(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <>
                  <span>{staffMember.name}</span> - <span>{staffMember.position}</span> - <span>{staffMember.department}</span>
                  <button onClick={() => handleDelete(staff._id)}>Delete</button>
                  <button onClick={() => handleEdit(staffMember)}>Update</button>
                </>
              )}

          </li>
        ))}
      </ul>
      )}
      
    </div>
  );
};

export default StaffList;