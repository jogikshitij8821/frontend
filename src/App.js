import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import MainPages from './MainPages ';
//import Navpage from './Navpage';
import Admin from './AdminDashboard'; // Import the Admin component
import Blog from './BlogList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggleSignup = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  const handleLogout=()=>{
    setIsAuthenticated(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={showLogin ?
            (isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Login onLogin={handleLogin} togglesignup={toggleSignup}/>
            ))
            :
        
           ( isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Signup onSignup={handleLogin} togglesignup={toggleSignup} />
            ))
            }
        />
        <Route
          path="/mainpage"
          element={isAuthenticated ? <MainPages onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
   