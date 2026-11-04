"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
const TestForm = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });
       
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
       
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch('https://mailserviceportal.onrender.com/api/form/tpl_6aeb072bd50bb4676b8d4d87', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.ok) {
              console.log('Form submitted successfully');
            } else {
              console.error('Form submission failed');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
       
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <textarea name="message" value={formData.message} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );   
}

export default TestForm;