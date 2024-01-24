import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const EnergyCart = ({ cartItems, onBuyEnergy }) => {
  const handleBuyEnergy = () => {
    onBuyEnergy(cartItems);
  };

  return (
    <div>
      <Typography variant="h6">Cart</Typography>
      {cartItems.map((cartItem, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="body1">
              Energy Units: {cartItem.energyUnits}
            </Typography>
            <Typography variant="body1">Price: {cartItem.price}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" onClick={handleBuyEnergy}>
        Buy Energy
      </Button>
    </div>
  );
};

export default EnergyCart;
