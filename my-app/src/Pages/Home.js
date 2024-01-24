import React from 'react'
import Header from '../components/Header'
function Home() {
  return (
    <div>
    
     <Header /> 
    </div>
  )
}

export default Home;

/*
import React from 'react'
import '../styles/Homepage.css'
import backgroundImage from '../styles/energytrade.jpg';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Additional styles for the div
        // ...
      };
      const handleSignup = () => {
        navigate('/form');
      };
      const handlesignin=()=>{
        navigate('/signin');
      };
      
  return (
    <div className="App" style={divStyle}>
      <header className="App-header">
        
      <h1> ENERGY TRADING</h1>
        <a>
        <button class="button button1" onClick={handleSignup}>sign-up</button>
        <button class="button button2" onClick={handlesignin}>Login</button>
        </a>
      </header>
    </div>
  )
}

export default Home;
*/
