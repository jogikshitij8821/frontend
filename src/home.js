// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Function to handle changes in the username input field
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   // Function to handle changes in the password input field
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Function to handle the login button click
//   const handleLogin = async () => {
//     if (!username || !password) {
//       alert('Please enter both username and password');
//       return;
//     }

//     try {
//       // Send a POST request to the server for login
//       const response = await fetch('https://backend-x9r5.onrender.com/api/login',  {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         alert('Login successful!');
//         navigate('/mainpage');
       
//       } else if (response.status === 401) {
//         alert('Login failed. Invalid credentials.');
//       } else {
//         alert('Login failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       alert('An error occurred while logging in. Please try again later.');
//     }
//   };

//   return (
//     <section>
//       <div className='homestyle'>
//         <h2>Login</h2>
//         <form>
//           <div>
//             <label htmlFor='username'>Username:</label>
//             <input
//               type='text'
//               id='username'
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div>
//             <label htmlFor='password'>Password:</label>
//             <input
//               type='password'
//               id='password'
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button type='button' onClick={handleLogin}>
//             Login
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Home;