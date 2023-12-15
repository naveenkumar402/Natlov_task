import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    age:''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    age:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error when the user starts entering text
    setErrors({
      ...errors,
      [name]: '',
    });
  };
  const handleNavigation = (route) => {
    navigate(route);
   };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:8080/adduser';
      const response = await axios.post(apiUrl, formData);
      console.log('API Response:', response.data);

      if (response.status === 200) {
        window.alert(response.data);
        if(response.data)
        navigate('/Home');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register Your Deatails</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <input
                    type="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit">Register</button>
          <button type="button" onClick={() => handleNavigation('/Home')} className="back-button">
          Back to Home
        </button>
        </form>
      </div>
    </div>
  );
};

export default Register;