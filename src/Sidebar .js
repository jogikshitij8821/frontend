// Sidebar.js - Updated Sidebar component
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './sidebar.css';

const Sidebar = () => {
    
  return (
    <>
      <section className='container'>
        <div className='sidebar'>
          <br />
          <Link to="/admin" className="button-css">Admin</Link> {/* Use Link */}
          <br />
          <br />
          <Link to="/blog" className="button-css">Blog</Link> {/* Use Link */}
        </div>
      </section>
    </>
  );
}

export default Sidebar;
