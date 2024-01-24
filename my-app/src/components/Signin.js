import React, { useRef, Component, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImg from '../assets/images.jpeg';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/signin.css';
export default function Signin() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
 // const [confirmpass, setconfirmpass] = useState('');
  //const [mobilenumber, setmobilenumber] = useState('');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!username || !password  ) {
      toast.error('Please fill in all fields');
      return;
    }

    

    fetch('http://localhost:5002/loginregister', {
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
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status === 'ok') {
          toast.success('Login Successful');
          const handleSignup = () => {
            Navigate('/sidebar');
         };
         handleSignup();
        } else {
          toast.error('Something went wrong');
        }
      })
      .catch((error) => {
        toast.error('Something went wrong');
        console.error(error);
      });
     
  };

  return (
    <section className='main'>
      <h1>SIgn In</h1>
      <div className="loginregister">
        <div className="col-1">
          {/* <h2>Sign in</h2> */}
          {/* <span>register and enjoy the service</span> */}

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
           
            <button className="btn" onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
        <div className="col-2">
          {/* <img src={bgImg} alt="" /> */}
        </div>
      </div>
      <ToastContainer /> {}
    </section>
  );
}