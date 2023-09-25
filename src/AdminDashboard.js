import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 // const [activeSection, setActiveSection] = useState('admin'); // Initialize to 'admin'

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(sessionStorage.getItem('userDetails'));
    const data = {
      title,
      description,
      author: userId._id,
    };
    console.log(userId.username);

    axios
      .post('https://backend-x9r5.onrender.com/api/posts', data)
      .then((response) => {
        if (response.status === 201) {
          alert('Posted Successfully');
          setTitle('');
          setDescription('');
        } else {
          console.log('failed to post');
        }
      })
      .catch((error) => {
        console.log('Error posting data:', error);
      });
  }

  return (
    <div className="admin-container">
      <h2>Create a new post</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input
            className="input-border"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            className="input-border"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Admin;
