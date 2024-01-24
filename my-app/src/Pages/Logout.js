/*
import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to header.js
    // history.push('/header');
    navigate('/')
  };

  const handleGoBack = () => {
    // Redirect to energytrade.js
    // history.push('/energytrade');
    navigate('/EnergyTradePage')
  };

  const logoutContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f1f1f1',
  };

  const messageStyle = {
    marginBottom: '16px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '8px',
  };

  return (
    <div style={logoutContainerStyle}>
      <div style={messageStyle}>Do you really want to logout?</div>
      <div style={buttonContainerStyle}>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="contained" onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Logout;
*/