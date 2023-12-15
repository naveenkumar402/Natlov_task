import React from 'react';
import './HomePage.css'; 
import {Routes,Route,useNavigate } from 'react-router-dom';
function Home(){
    const navigate=useNavigate();
    const createUser = () => {
        navigate('/Register')
      };
    
      const updateDetails = () => {
        navigate('/Update')
      };
    
      const deleteUser = () => {
        navigate('/Delete')
      };
    
      const getUserDetails = () => {
        navigate('/View')
      };
  return (
    <div>
        <nav>
        <h1>Natlov Project</h1>
        <a href="#">Home</a>
      </nav>
         
      <main>
        <button onClick={createUser}>Create User</button>
        <button onClick={updateDetails}>Update Details</button>
        <button onClick={deleteUser}>Delete User</button>
        <button onClick={getUserDetails}>Get User Details</button>
      </main>
    </div>
  );
}

export default Home;
