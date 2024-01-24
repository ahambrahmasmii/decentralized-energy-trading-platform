import React from 'react';

const SellEnergyPage = ({ SellOrder }) => {
  return (
    <div id="content">
      <h1>Sell Product</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const energyUnits = this.productenergyUnits.value;
          const priceInRupees = this.productPrice.value;
          const priceInEther = priceInRupees * this.conversionRate;
          const price = window.web3.utils.toWei(priceInEther.toString(), 'Ether');
          SellOrder(energyUnits, price);
        }}
      >
        <div className="form-group mr-sm-2">
          <input
            id="productenergyUnits"
            type="text"
            ref={(input) => {
              this.productenergyUnits = input;
            }}
            className="form-control"
            placeholder="Energy Units"
            required
          />
        </div>
        <div className="form-group mr-sm-2">
          <input
            id="productPrice"
            type="text"
            ref={(input) => {
              this.productPrice = input;
            }}
            className="form-control"
            placeholder="Energy Price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sell
        </button>
      </form>
    </div>
  );
};

export default SellEnergyPage;
