import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewDetails.css'; // Import the CSS file for styling

const ViewDetails = () => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 

  const viewUserDetails = () => {
    
    axios.get(`http://localhost:8080/viewuser/${email}`)
      .then((response) => {
        window.alert('User details retrieved:', response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  return (
    <div className="view-details-container">
      <h2>View User Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button type="button" onClick={viewUserDetails} className="view-details-button">
          View User Details
        </button>

        {userData && (
          <div className="user-details">
            <h3>User Details</h3>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Mobile:</strong> {userData.mobile}</p>
            <p><strong>Age:</strong> {userData.age}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ViewDetails;
