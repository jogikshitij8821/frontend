import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


const Signup = ( props ) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError,setLoginError]=useState('');
  
  const navigate = useNavigate();

  const handleValidation=()=>{
    if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    if(!username){
      setLoginError("Username is required");
      return false;
    }else if(/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(username)){
      setLoginError("special characters are not allowed");
      return false;
    }
    if(!password){
      setLoginError("password is required");
      return false;
    }else if(password.length<8){
      setLoginError("Password must have a minimum of 8 characters");
      return false;
    }if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    return true;
   }

  const handleSignup = (e) => {
    e.preventDefault();

    if(!handleValidation()){
        return;
      }
    const data = {
      username,
      email,
      password,
    };

    
  
      axios
        .post('https://backend-x9r5.onrender.com/users/register', data)
        .then((response) => {
          console.log('Response status:', response.status);
          if (response.status === 200) {
            props.onLogin();
            navigate('/mainpage');
          } else {
            console.log('failed to post');
          }
        });
    
  };



//   const handleGoogleSignup = () => {
//     // Redirect the user to the Google OAuth authorization URL
//     window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=http%3A%2F%2F301665309086-m4q5del241f1j6b22vh10mde9e8tt4m4.apps.googleusercontent.com&redirect_uri=Yhttps%3A%2F%2Ffrontend-wzjs.onrender.com';
//   };

//   const handleGitHubSignup = () => {
//     // Redirect the user to the GitHub OAuth authorization URL
//     fetch('https://backend-x9r5.onrender.com/github-auth') // Update the URL as needed to match your server route
//       .then((response) => response.json())
//       .then((data) => {
//         // Redirect the user to the GitHub OAuth authorization URL
//         window.location.href = data.githubAuthUrl; // Assuming your server returns the URL as 'githubAuthUrl'
//       })
//       .catch((error) => {
//         console.error('Error fetching GitHub authorization URL:', error);
//       });

   // window.location.href = 'URL_TO_GITHUB_OAUTH_AUTHORIZATION';
//   };

  // Update the button disabled state based on validation
  
const handleGoogleLogin = ()=>{
  window.location.href = 'https://backend-x9r5.onrender.com/auth/google';
}
  return (
    <div className='signup-container'>
      <h2 className='signup-heading'>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
        className='signup-input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
        className='signup-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
        className='signup-input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="signup-button" type="submit" >
          Sign Up
        </button>
        <p className='signup-p'>
          Already have an account?{' '}
          <span className="signup-span" onClick={()=>{props.togglesignup()}} style={{ cursor: 'pointer' }}>
            Log In
          </span>
        </p>
      </form>
      <div className="signup-error-message">{loginError}</div>
      <button onClick={handleGoogleLogin}>Log in with Google</button>
    </div>
  );
};

export default Signup;
