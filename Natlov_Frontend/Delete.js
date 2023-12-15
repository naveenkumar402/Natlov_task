import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Delete.css'; // Import the CSS file for styling

const Delete = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const deleteUser = () => {
    axios.delete(`http://localhost:8080/deleteuser/${email}`)
      .then((response) => {
        window.alert('Delete successful:', response.data);
      })
      .catch((error) => {
        window.error('Delete failed:', error);
        // You can handle errors or provide feedback to the user
      });
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="delete-container">
      <h2>Delete User</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email to Delete:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button type="button" onClick={deleteUser} className="delete-button">
          Delete User
        </button>

        <button type="button" onClick={() => handleNavigation('/Home')} className="back-button">
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default Delete;
