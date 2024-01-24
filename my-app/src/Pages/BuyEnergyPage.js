import React from 'react';

const BuyEnergyPage = ({ energypurchase, BuyOrder }) => {
  return (
    <div id="content">
      <h2>Buy Energy</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">EnergyUnits</th>
            <th scope="col">Price</th>
            <th scope="col">Owner</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="productList">
          {energypurchase.map((product, key) => (
            <tr key={key}>
              <th scope="row">{product.id.toString()}</th>
              <td>{product.energyUnits}</td>
              <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
              <td>{product.owner}</td>
              <td>
                {!product.purchased ? (
                  <button
                    name={product.id}
                    value={product.price}
                    onClick={(event) => {
                      BuyOrder(product.id, product.price);
                    }}
                  >
                    Buy
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuyEnergyPage;
