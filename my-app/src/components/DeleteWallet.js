// DeleteWallet.js

import React from 'react';

function DeleteWallet(props) {
  const { name } = props.wallet;

  return (
    <div className="delete-wallet">
      <h2 style={{ color: 'red' }}>Delete Wallet</h2>
      <p>Are you sure you want to delete {name}?</p>
      <button onClick={props.onDelete}>Yes</button>
      <button onClick={props.onCancel}>No</button>
    </div>
  );
}

export default DeleteWallet;
