// EditWallet.js

import React from 'react';

function EditWallet(props) {
  const { name, description } = props.wallet;

  return (
    <div className="edit-wallet">
      <h2 style={{ color: 'green' }}>Edit Wallet</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} />
        <label>Description:</label>
        <textarea value={description} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditWallet;
