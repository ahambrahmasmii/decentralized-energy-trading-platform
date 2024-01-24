import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCogs } from '@fortawesome/free-solid-svg-icons';
import {
    
    faCheckCircle,
    faChartLine,
    faMoneyBill,
    faShieldAlt,
    faUsers,
    faExchangeAlt,
    faLightbulb,
    faGlobe,
    faBalanceScale,
  } from '@fortawesome/free-solid-svg-icons';
  

function Dashboard() {
  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
     backgroundColor: 'pink', // Blue background color
    // background: #0f0c29; 
    color: 'white', // Text color
    minHeight: '70vh', // Set minimum height to cover the whole page
    boxSizing: 'border-box', // Include padding in total height
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '300px', // Increase the image size as desired
    height: 'auto',
    marginRight: '10px',
    transition: 'transform 0.3s', // Smooth transition for hover effect
  };

  const rulesWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Take remaining vertical space
  };

  const rulesContainerStyle = {
    width: '800px', // Increase the width as desired
    minHeight: '300px', // Increase the height as desired
    textAlign: 'left',
    backgroundColor: 'black', // Semi-transparent white background
    padding: '40px',
    borderRadius: '8px',
    transition: 'transform 0.3s', // Smooth transition for hover effect
  };

  const rulesTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    
  };

  const ruleItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

  const ruleIconStyle = {
    fontSize: '18px',
    marginRight: '10px',
    transition: 'color 0.3s', // Smooth transition for color change
  };

  const hoverRuleIconStyle = {
    color: 'red', // Change the color or add any other effect you desire
  };

  const handleMouseEnter = (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.color = 'red'; // Change the color or add any other effect you desire
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.style.color = ''; // Reset the color to its original value
  };

  return (
    <div style={dashboardContainerStyle}>
      

      <div style={rulesWrapperStyle}>
        <div
          style={rulesContainerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <h2 style={rulesTitleStyle}>How our website works:</h2>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faWallet}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> Buyers can purchase energy using their wallet address.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> Sellers can sell energy through the blockchain platform.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faChartLine}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> The price of energy is calculated based on a predefined algorithm.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faMoneyBill}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> Transactions are recorded on the blockchain for transparency and security.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faShieldAlt}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> Buyers and sellers can view their transaction history in their accounts.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faUsers}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> The platform ensures secure and fast transactions using blockchain technology.</p>
          </div>
          <div style={ruleItemStyle}>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              style={ruleIconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p> Buyers and sellers can monitor their energy consumption and production.</p>
          </div>
          {/* Add more rules here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;