// src/components/AdmissionForm.js
import React, { useState } from 'react';
import './AdmissionForm.css';
 
// const express  =  require('express');
// const app = express();

//  const cors   = require('cors');  
//  app.use(cors());

 
const AdmissionForm = () => {
  // Declare formData state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '', 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8000//enroll', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     // Log the response body
  //     const data = await response.json();
  //     console.log('Response Body:', data);
  
  //     // Continue with your logic
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Log the response body
      const data = await response.json();
      console.log('Response Body:', data);
  
      // Continue with your logic
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="form-container">
      <h2>Yoga Class Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <label>
          Batch:
          <select name="batch" value={formData.batch} onChange={handleInputChange}>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
