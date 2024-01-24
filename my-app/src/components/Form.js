
import React, { useRef, Component, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImg from '../assets/images.jpeg';
import './form.css'; 
import { Navigate, useNavigate } from 'react-router-dom';
export default function Form() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!username || !password || !confirmpass || !mobilenumber) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmpass) {
      toast.error('Passwords do not match');
      return;
    }

    fetch('http://localhost:5002/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
        confirmpass,
        mobilenumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status === 'ok') {
          toast.success('Registration Successful');
        } else {
          toast.error('Something went wrong');
        }
      })
      .catch((error) => {
        toast.error('Something went wrong');
        console.error(error);
      });

      const handleSignup = () => {
        Navigate('/signin');
     };
     handleSignup();
  };

  return (
    <section className="main">
      <h1>Sign Up</h1>
      <div className="register">
        <div className="col-1">
          {/* <h2>Sign-Up</h2> */}
          {/* <span >register and enjoy the service</span> */}

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="confirm password" onChange={(e) => setconfirmpass(e.target.value)} />
            <input type="text" placeholder="mobile number" onChange={(e) => setmobilenumber(e.target.value)} />
            <button className="btn" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div className="col-2">
         {/* <img src={bgImg} alt="" /> */}
        </div>
      </div>
      <ToastContainer /> {/* Add this component at the end to display toast notifications */}
    </section>
  );
}





