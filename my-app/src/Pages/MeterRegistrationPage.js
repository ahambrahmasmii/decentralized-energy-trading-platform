import React, { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0x2D98Ab566139Ba2198Be9b78A55FAeecDb17f9Df'; // Replace with the actual contract address
const contractABI = [
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "registeredMeters",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "register",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]
; // Replace with the actual contract ABI
const contract = new web3.eth.Contract(contractABI, contractAddress);

function MeterRegistrationPage() {
  const [meterAddress, setMeterAddress] = useState('');

  const handleRegister = async () => {
    try {
      // Check if the user's browser has an Ethereum provider
      if (window.ethereum) {
        await window.ethereum.enable();
      }
      const accounts = await web3.eth.getAccounts();
      const meterAddress = accounts[0]; // Assuming the user selects the first account as the meter address

      // Call the smart contract function
      await contract.methods.register().send({
        from: meterAddress,
        value: web3.utils.toWei('0.01', 'ether'), // Set the appropriate value in Wei
      });

      // Meter registration successful
      console.log('Meter registered successfully.');

      // Clear the meter address input field
      setMeterAddress('');
    } catch (error) {
      console.error('Failed to register meter:', error);
    }
  };

  return (
    <div>
      <h2>Meter Registration</h2>
      <input type="text" value={meterAddress} onChange={e => setMeterAddress(e.target.value)} placeholder="Meter Address" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default MeterRegistrationPage;
