import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar ';
import Navpage from './Navpage';
//import Blog from './BlogList';
import './mainpage.css';


const MainPages = ({onLogout}) => {
  return (
    <div>
     <div className='nav'>
      {/* Navbar component */}
      <Navbar onLogout={onLogout} />
      </div>

      {/* Main content layout */}
      <div className='sidemainclass'>
        {/* Sidebar component */}
        <div className='side2'>
          <Sidebar />
         
        </div>
        

        {/* Outlet for child routes */}
        <div className='side3'>
        <Navpage />
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPages;