import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { AiOutlineHome } from 'react-icons/ai';

function Wallet() {
  const [wallets, setWallets] = useState([]);
  const [walletName, setWalletName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [walletDescription, setWalletDescription] = useState('');
  const [editing, setEditing] = useState(false);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleCreateWallet = () => {
    const newWallet = {
      name: walletName,
      address: walletAddress,
      description: walletDescription,
      balance: 0,
    };
    setWallets([...wallets, newWallet]);
    setWalletName('');
    setWalletAddress('');
    setWalletDescription('');
  };

  const handleEditWallet = (index) => {
    const updatedWallets = [...wallets];
    updatedWallets[index].name = walletName;
    updatedWallets[index].address = walletAddress;
    updatedWallets[index].description = walletDescription;
    setWallets(updatedWallets);
    setWalletName('');
    setWalletAddress('');
    setWalletDescription('');
    setEditing(false);
    setSelectedWalletIndex(null);
  };

  const handleDeleteWallet = () => {
    const updatedWallets = [...wallets];
    updatedWallets.splice(selectedWalletIndex, 1);
    setWallets(updatedWallets);
    setDeleteConfirmation(false);
    setSelectedWalletIndex(null);
  };

  const handleEditClick = (index) => {
    setEditing(true);
    setSelectedWalletIndex(index);
    setWalletName(wallets[index].name);
    setWalletAddress(wallets[index].address);
    setWalletDescription(wallets[index].description);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setSelectedWalletIndex(null);
    setWalletName('');
    setWalletAddress('');
    setWalletDescription('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'blue' }}>My Wallets</h2>

      {/* Wallet Creation Form */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title="Create Wallet" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                value={walletDescription}
                onChange={(e) => setWalletDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateWallet}
              >
                Create Wallet
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Wallet List */}
      {wallets.map((wallet, index) => (
    <Card key={index} style={{ marginBottom: '20px' }}>
      <CardHeader
        title={wallet.name}
        action={
          <div>
            <IconButton onClick={() => handleEditClick(index)}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => {
                setSelectedWalletIndex(index);
                setDeleteConfirmation(true);
              }}
            >
              <Delete />
            </IconButton>
          </div>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          Address: {wallet.address}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Description: {wallet.description}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Balance: {wallet.balance}
        </Typography>
      </CardContent>
    </Card>
  ))}

  {/* Wallet Edit Form */}
  {editing && (
    <Card style={{ marginBottom: '20px' }}>
      <CardHeader title="Edit Wallet" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={walletDescription}
              onChange={(e) => setWalletDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditWallet(selectedWalletIndex)}
            >
              Save Changes
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )}

  {/* Delete Confirmation Dialog */}
  <Dialog
    open={deleteConfirmation}
    onClose={() => setDeleteConfirmation(false)}
  >
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to delete this wallet?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setDeleteConfirmation(false)}>Cancel</Button>
      <Button color="secondary" onClick={handleDeleteWallet}>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
</div>
  );
}
export default Wallet;
      
