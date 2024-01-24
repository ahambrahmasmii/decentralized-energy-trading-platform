import React, { Component } from 'react';




class EnergyTradePage extends Component {
 
  calculatePrice = (energyUnits) => {
    // Get the current date and time
    const now = new Date();




    // Consider factors such as supply and demand, time of day, and seasonality
    // You can adjust the algorithm based on your specific requirements and data availability




    // Calculate the base price based on energy units
    let basePrice = energyUnits * 0.1; // Example: Assuming a base price of 0.1 per energy unit




    // Adjust the price based on supply and demand
    const supplyDemandRatio = 1.2; // Example: Assuming a ratio of 1.2 for high demand
    basePrice *= supplyDemandRatio;




    // Adjust the price based on time of day
    const hour = now.getHours();
    if (hour >= 8 && hour < 18) {
      // Business hours: Apply a higher price
      const businessHourMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during business hours
      basePrice *= businessHourMultiplier;
    } else {
      // Non-business hours: Apply a lower price
      const nonBusinessHourMultiplier = 0.8; // Example: Assuming a multiplier of 0.8 during non-business hours
      basePrice *= nonBusinessHourMultiplier;
    }




    // Adjust the price based on seasonality
    const month = now.getMonth();
    if (month >= 3 && month <= 5) {
      // Spring season: Apply a seasonal price adjustment
      const springSeasonMultiplier = 1.2; // Example: Assuming a multiplier of 1.2 during spring
      basePrice *= springSeasonMultiplier;
    } else if (month >= 6 && month <= 8) {
      // Summer season: Apply a seasonal price adjustment
      const summerSeasonMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during summer
      basePrice *= summerSeasonMultiplier;
    } else if (month >= 9 && month <= 11) {
      // Autumn season: Apply a seasonal price adjustment
      const autumnSeasonMultiplier = 1.1; // Example: Assuming a multiplier of 1.1 during autumn
      basePrice *= autumnSeasonMultiplier;
    } else {
      // Winter season: Apply a seasonal price adjustment
      const winterSeasonMultiplier = 0.9; // Example: Assuming a multiplier of 0.9 during winter
      basePrice *= winterSeasonMultiplier;
    }




    // Return the calculated price
    return basePrice;
  };
 
  handleEnergyUnitsChange = (event) => {
    const energyUnits = event.target.value;
    const calculatedPrice = this.calculatePrice(energyUnits);




    this.setState({
      energyUnits,
      price: calculatedPrice,
    });
  };
  handleBuyOrder = (index, price) => {
    const energyUnits = this.props.energypurchase[index].energyUnits;
    const quantity = parseInt(this[`quantity${index}`].value);




    if (quantity > energyUnits) {
      // Display an error message for insufficient energy units
      console.log('Insufficient energy units');
      return;
    }




    // Deduct the energy units from the available stock
    const updatedEnergypurchase = [...this.props.energypurchase];
    updatedEnergypurchase[index].energyUnits -= quantity;




    // Perform the BuyOrder function with the appropriate parameters
    const { id } = updatedEnergypurchase[index];
    const totalPrice = price ;
    this.props.BuyOrder(id, totalPrice);




    // Update the component state with the updated energy units
    this.setState({ energypurchase: updatedEnergypurchase });
  };




  render() {
    const energypurchase = this.props.energypurchase ?? [];
















    return (
      <div id="content">
        <h1>Sell Product</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const energyUnits = this.productenergyUnits.value;
            //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
            const calculatedPrice = this.calculatePrice(energyUnits);
            const price = window.web3.utils.toWei(calculatedPrice.toString(), 'Ether');
            this.props.SellOrder(energyUnits, price);
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
              onChange={this.handleEnergyUnitsChange}
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              value={this.calculatePrice(this.productenergyUnits?.value)}
              readOnly
              className="form-control"
              placeholder="Energy Price"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sell
          </button>
        </form>
        <p>&nbsp;</p>
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
                    <div>
                      <input
                        type="number"
                        ref={(input) => {
                          this[`quantity${key}`] = input;
                        }}
                        min="1"
                        max={product.energyUnits}
                        placeholder="Quantity"
                      />
                      <button
                        name={product.id}
                        value={product.price}
                        onClick={() => {
                          this.handleBuyOrder(key, product.price);
                        }}
                      >
                        Buy
                      </button>
                    </div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
















  }
}
















export default EnergyTradePage;
// import React, { Component } from 'react';




// class EnergyTradePage extends Component {
 
//   calculatePrice = (energyUnits) => {
//     // Get the current date and time
//     const now = new Date();




//     // Consider factors such as supply and demand, time of day, and seasonality
//     // You can adjust the algorithm based on your specific requirements and data availability




//     // Calculate the base price based on energy units
//     let basePrice = energyUnits * 0.1; // Example: Assuming a base price of 0.1 per energy unit




//     // Adjust the price based on supply and demand
//     const supplyDemandRatio = 1.2; // Example: Assuming a ratio of 1.2 for high demand
//     basePrice *= supplyDemandRatio;




//     // Adjust the price based on time of day
//     const hour = now.getHours();
//     if (hour >= 8 && hour < 18) {
//       // Business hours: Apply a higher price
//       const businessHourMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during business hours
//       basePrice *= businessHourMultiplier;
//     } else {
//       // Non-business hours: Apply a lower price
//       const nonBusinessHourMultiplier = 0.8; // Example: Assuming a multiplier of 0.8 during non-business hours
//       basePrice *= nonBusinessHourMultiplier;
//     }




//     // Adjust the price based on seasonality
//     const month = now.getMonth();
//     if (month >= 3 && month <= 5) {
//       // Spring season: Apply a seasonal price adjustment
//       const springSeasonMultiplier = 1.2; // Example: Assuming a multiplier of 1.2 during spring
//       basePrice *= springSeasonMultiplier;
//     } else if (month >= 6 && month <= 8) {
//       // Summer season: Apply a seasonal price adjustment
//       const summerSeasonMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during summer
//       basePrice *= summerSeasonMultiplier;
//     } else if (month >= 9 && month <= 11) {
//       // Autumn season: Apply a seasonal price adjustment
//       const autumnSeasonMultiplier = 1.1; // Example: Assuming a multiplier of 1.1 during autumn
//       basePrice *= autumnSeasonMultiplier;
//     } else {
//       // Winter season: Apply a seasonal price adjustment
//       const winterSeasonMultiplier = 0.9; // Example: Assuming a multiplier of 0.9 during winter
//       basePrice *= winterSeasonMultiplier;
//     }




//     // Return the calculated price
//     return basePrice;
//   };
 
//   handleEnergyUnitsChange = (event) => {
//     const energyUnits = event.target.value;
//     const calculatedPrice = this.calculatePrice(energyUnits);




//     this.setState({
//       energyUnits,
//       price: calculatedPrice,
//     });
//   };
//   handleBuyOrder = (index, price) => {
//     const product = this.props.energypurchase[index];
//     const quantity = parseInt(this[`quantity${index}`].value);
 
//     if (quantity > product.energyUnits) {
//       const errorMessage = 'Insufficient energy units';
//       this.setState({ error: errorMessage });
//       return;
//     }


//     // Reset the error state if there was no error
//     this.setState({ error: '' });
 
//     const pricePerUnit = price / product.energyUnits; // Calculate the price per unit
//     const totalPrice = pricePerUnit * quantity; // Calculate the total price based on quantity and price per unit
 
//     const updatedEnergypurchase = [...this.props.energypurchase];
//     updatedEnergypurchase[index].energyUnits -= quantity;
 
//     const { id } = updatedEnergypurchase[index];
//     this.props.BuyOrder(id, totalPrice); // Pass the total price to BuyOrder
 
//     this.setState({ energypurchase: updatedEnergypurchase });
//   };


//   render() {
//     const energypurchase = this.props.energypurchase ?? [];
















//     return (
//       <div id="content">
//         <h1>Sell Product</h1>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const energyUnits = this.productenergyUnits.value;
//             //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
//             const calculatedPrice = this.calculatePrice(energyUnits);
//             const price = window.web3.utils.toWei(calculatedPrice.toString(), 'Ether');
//             this.props.SellOrder(energyUnits, price);
//           }}
//         >
//           <div className="form-group mr-sm-2">
//             <input
//               id="productenergyUnits"
//               type="text"
//               ref={(input) => {
//                 this.productenergyUnits = input;
//               }}
//               className="form-control"
//               placeholder="Energy Units"
//               onChange={this.handleEnergyUnitsChange}
//               required
//             />
//           </div>
//           <div className="form-group mr-sm-2">
//             <input
//               id="productPrice"
//               type="text"
//               value={this.calculatePrice(this.productenergyUnits?.value)}
//               readOnly
//               className="form-control"
//               placeholder="Energy Price"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Sell
//           </button>
//         </form>
//         <p>&nbsp;</p>
//         <h2>Buy Energy</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">EnergyUnits</th>
//               <th scope="col">Price</th>
//               <th scope="col">Owner</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody id="productList">
//             {energypurchase.map((product, key) => (
//               <tr key={key}>
//                 <th scope="row">{product.id.toString()}</th>
//                 <td>{product.energyUnits}</td>
//                 <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
//                 <td>{product.owner}</td>
//                 <td>
//                 {!product.purchased ? (
//                     <div>
//                       <input
//                         type="number"
//                         ref={(input) => {
//                           this[`quantity${key}`] = input;
//                         }}
//                         min="1"
//                         max={product.energyUnits}
//                         placeholder="Quantity"
//                       />
//                       <button
//                         name={product.id}
//                         value={product.price}
//                         onClick={() => {
//                           this.handleBuyOrder(key, product.price);
//                         }}
//                       >
//                         Buy
//                       </button>
//                     </div>
//                   ) : null}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
















//   }
// }
















// export default EnergyTradePage;


// // import React, { Component } from 'react';

// // class EnergyTradePage extends Component {
 
// //   calculatePrice = (energyUnits) => {
// //     // Get the current date and time
// //     const now = new Date();


// //     // Consider factors such as supply and demand, time of day, and seasonality
// //     // You can adjust the algorithm based on your specific requirements and data availability
// //     // Calculate the base price based on energy units
// //     let basePrice = energyUnits * 0.1; // Example: Assuming a base price of 0.1 per energy unit




// //     // Adjust the price based on supply and demand
// //     const supplyDemandRatio = 1.2; // Example: Assuming a ratio of 1.2 for high demand
// //     basePrice *= supplyDemandRatio;




// //     // Adjust the price based on time of day
// //     const hour = now.getHours();
// //     if (hour >= 8 && hour < 18) {
// //       // Business hours: Apply a higher price
// //       const businessHourMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during business hours
// //       basePrice *= businessHourMultiplier;
// //     } else {
// //       // Non-business hours: Apply a lower price
// //       const nonBusinessHourMultiplier = 0.8; // Example: Assuming a multiplier of 0.8 during non-business hours
// //       basePrice *= nonBusinessHourMultiplier;
// //     }




// //     // Adjust the price based on seasonality
// //     const month = now.getMonth();
// //     if (month >= 3 && month <= 5) {
// //       // Spring season: Apply a seasonal price adjustment
// //       const springSeasonMultiplier = 1.2; // Example: Assuming a multiplier of 1.2 during spring
// //       basePrice *= springSeasonMultiplier;
// //     } else if (month >= 6 && month <= 8) {
// //       // Summer season: Apply a seasonal price adjustment
// //       const summerSeasonMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during summer
// //       basePrice *= summerSeasonMultiplier;
// //     } else if (month >= 9 && month <= 11) {
// //       // Autumn season: Apply a seasonal price adjustment
// //       const autumnSeasonMultiplier = 1.1; // Example: Assuming a multiplier of 1.1 during autumn
// //       basePrice *= autumnSeasonMultiplier;
// //     } else {
// //       // Winter season: Apply a seasonal price adjustment
// //       const winterSeasonMultiplier = 0.9; // Example: Assuming a multiplier of 0.9 during winter
// //       basePrice *= winterSeasonMultiplier;
// //     }

// //     // Return the calculated price
// //     return basePrice;
// //   };
 
// //   handleEnergyUnitsChange = (event) => {
// //     const energyUnits = event.target.value;
// //     const calculatedPrice = this.calculatePrice(energyUnits);

// //     this.setState({
// //       energyUnits,
// //       price: calculatedPrice,
// //     });
// //   };
// //   handleBuyOrder = (index, price) => {
// //     const energyUnits = this.props.energypurchase[index].energyUnits;
// //     const quantity = parseInt(this[`quantity${index}`].value);

// //     if (quantity > energyUnits) {
// //       // Display an error message for insufficient energy units
// //       console.log('Insufficient energy units');
// //       return;
// //     }

// //     // Deduct the energy units from the available stock
// //     const updatedEnergypurchase = [...this.props.energypurchase];
// //     updatedEnergypurchase[index].energyUnits -= quantity;

// //     // Perform the BuyOrder function with the appropriate parameters
// //     const { id } = updatedEnergypurchase[index];
// //     const totalPrice = price * quantity;
// //     this.props.BuyOrder(id, totalPrice);

// //     // Update the component state with the updated energy units
// //     this.setState({ energypurchase: updatedEnergypurchase });
// //   };


// //   render() {
// //     const energypurchase = this.props.energypurchase ?? [];
// //     return (
// //       <div id="content">
// //         <h1>Sell Product</h1>
// //         <form
// //           onSubmit={(event) => {
// //             event.preventDefault();
// //             const energyUnits = this.productenergyUnits.value;
// //             //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
// //             const calculatedPrice = this.calculatePrice(energyUnits);
// //             const price = window.web3.utils.toWei(calculatedPrice.toString(), 'Ether');
// //             this.props.SellOrder(energyUnits, price);
// //           }}
// //         >
// //           <div className="form-group mr-sm-2">
// //             <input
// //               id="productenergyUnits"
// //               type="text"
// //               ref={(input) => {
// //                 this.productenergyUnits = input;
// //               }}
// //               className="form-control"
// //               placeholder="Energy Units"
// //               onChange={this.handleEnergyUnitsChange}
// //               required
// //             />
// //           </div>
// //           <div className="form-group mr-sm-2">
// //             <input
// //               id="productPrice"
// //               type="text"
// //               value={this.calculatePrice(this.productenergyUnits?.value)}
// //               readOnly
// //               className="form-control"
// //               placeholder="Energy Price"
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary">
// //             Sell
// //           </button>
// //         </form>
// //         <p>&nbsp;</p>
// //         <h2>Buy Energy</h2>
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th scope="col">#</th>
// //               <th scope="col">EnergyUnits</th>
// //               <th scope="col">Price</th>
// //               <th scope="col">Owner</th>
// //               <th scope="col"></th>
// //             </tr>
// //           </thead>
// //           <tbody id="productList">
// //             {energypurchase.map((product, key) => (
// //               <tr key={key}>
// //                 <th scope="row">{product.id.toString()}</th>
// //                 <td>{product.energyUnits}</td>
// //                 <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
// //                 <td>{product.owner}</td>
// //                 <td>
// //                 {!product.purchased ? (
// //                     <div>
// //                       <input
// //                         type="number"
// //                         ref={(input) => {
// //                           this[`quantity${key}`] = input;
// //                         }}
// //                         min="1"
// //                         max={product.energyUnits}
// //                         placeholder="Quantity"
// //                       />
// //                       <button
// //                         name={product.id}
// //                         value={product.price}
// //                         onClick={() => {
// //                           this.handleBuyOrder(key, product.price);
// //                         }}
// //                       >
// //                         Buy
// //                       </button>
// //                     </div>
// //                   ) : null}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     );
// //   }
// // }
// // export default EnergyTradePage;
// // // import React, { Component } from 'react';

// // // class EnergyTradePage extends Component {
 
// // //   calculatePrice = (energyUnits) => {
// // //     // Get the current date and time
// // //     const now = new Date();


// // //     // Consider factors such as supply and demand, time of day, and seasonality
// // //     // You can adjust the algorithm based on your specific requirements and data availability
// // //     // Calculate the base price based on energy units
// // //     let basePrice = energyUnits * 0.1; // Example: Assuming a base price of 0.1 per energy unit




// // //     // Adjust the price based on supply and demand
// // //     const supplyDemandRatio = 1.2; // Example: Assuming a ratio of 1.2 for high demand
// // //     basePrice *= supplyDemandRatio;




// // //     // Adjust the price based on time of day
// // //     const hour = now.getHours();
// // //     if (hour >= 8 && hour < 18) {
// // //       // Business hours: Apply a higher price
// // //       const businessHourMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during business hours
// // //       basePrice *= businessHourMultiplier;
// // //     } else {
// // //       // Non-business hours: Apply a lower price
// // //       const nonBusinessHourMultiplier = 0.8; // Example: Assuming a multiplier of 0.8 during non-business hours
// // //       basePrice *= nonBusinessHourMultiplier;
// // //     }




// // //     // Adjust the price based on seasonality
// // //     const month = now.getMonth();
// // //     if (month >= 3 && month <= 5) {
// // //       // Spring season: Apply a seasonal price adjustment
// // //       const springSeasonMultiplier = 1.2; // Example: Assuming a multiplier of 1.2 during spring
// // //       basePrice *= springSeasonMultiplier;
// // //     } else if (month >= 6 && month <= 8) {
// // //       // Summer season: Apply a seasonal price adjustment
// // //       const summerSeasonMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during summer
// // //       basePrice *= summerSeasonMultiplier;
// // //     } else if (month >= 9 && month <= 11) {
// // //       // Autumn season: Apply a seasonal price adjustment
// // //       const autumnSeasonMultiplier = 1.1; // Example: Assuming a multiplier of 1.1 during autumn
// // //       basePrice *= autumnSeasonMultiplier;
// // //     } else {
// // //       // Winter season: Apply a seasonal price adjustment
// // //       const winterSeasonMultiplier = 0.9; // Example: Assuming a multiplier of 0.9 during winter
// // //       basePrice *= winterSeasonMultiplier;
// // //     }

// // //     // Return the calculated price
// // //     return basePrice;
// // //   };
 
// // //   handleEnergyUnitsChange = (event) => {
// // //     const energyUnits = event.target.value;
// // //     const calculatedPrice = this.calculatePrice(energyUnits);

// // //     this.setState({
// // //       energyUnits,
// // //       price: calculatedPrice,
// // //     });
// // //   };
// // //   handleBuyOrder = (index, price) => {
// // //     const energyUnits = this.props.energypurchase[index].energyUnits;
// // //     const quantity = parseInt(this[`quantity${index}`].value);

// // //     if (quantity > energyUnits) {
// // //       // Display an error message for insufficient energy units
// // //       console.log('Insufficient energy units');
// // //       return;
// // //     }

// // //     // Deduct the energy units from the available stock
// // //     const updatedEnergypurchase = [...this.props.energypurchase];
// // //     updatedEnergypurchase[index].energyUnits -= quantity;

// // //     // Perform the BuyOrder function with the appropriate parameters
// // //     const { id } = updatedEnergypurchase[index];
// // //     const totalPrice = price * quantity;
// // //     this.props.BuyOrder(id, totalPrice);

// // //     // Update the component state with the updated energy units
// // //     this.setState({ energypurchase: updatedEnergypurchase });
// // //   };


// // //   render() {
// // //     const energypurchase = this.props.energypurchase ?? [];
// // //     return (
// // //       <div id="content">
// // //         <h1>Sell Product</h1>
// // //         <form
// // //           onSubmit={(event) => {
// // //             event.preventDefault();
// // //             const energyUnits = this.productenergyUnits.value;
// // //             //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
// // //             const calculatedPrice = this.calculatePrice(energyUnits);
// // //             const price = window.web3.utils.toWei(calculatedPrice.toString(), 'Ether');
// // //             this.props.SellOrder(energyUnits, price);
// // //           }}
// // //         >
// // //           <div className="form-group mr-sm-2">
// // //             <input
// // //               id="productenergyUnits"
// // //               type="text"
// // //               ref={(input) => {
// // //                 this.productenergyUnits = input;
// // //               }}
// // //               className="form-control"
// // //               placeholder="Energy Units"
// // //               onChange={this.handleEnergyUnitsChange}
// // //               required
// // //             />
// // //           </div>
// // //           <div className="form-group mr-sm-2">
// // //             <input
// // //               id="productPrice"
// // //               type="text"
// // //               value={this.calculatePrice(this.productenergyUnits?.value)}
// // //               readOnly
// // //               className="form-control"
// // //               placeholder="Energy Price"
// // //               required
// // //             />
// // //           </div>
// // //           <button type="submit" className="btn btn-primary">
// // //             Sell
// // //           </button>
// // //         </form>
// // //         <p>&nbsp;</p>
// // //         <h2>Buy Energy</h2>
// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th scope="col">#</th>
// // //               <th scope="col">EnergyUnits</th>
// // //               <th scope="col">Price</th>
// // //               <th scope="col">Owner</th>
// // //               <th scope="col"></th>
// // //             </tr>
// // //           </thead>
// // //           <tbody id="productList">
// // //             {energypurchase.map((product, key) => (
// // //               <tr key={key}>
// // //                 <th scope="row">{product.id.toString()}</th>
// // //                 <td>{product.energyUnits}</td>
// // //                 <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
// // //                 <td>{product.owner}</td>
// // //                 <td>
// // //                 {!product.purchased ? (
// // //                     <div>
// // //                       <input
// // //                         type="number"
// // //                         ref={(input) => {
// // //                           this[`quantity${key}`] = input;
// // //                         }}
// // //                         min="1"
// // //                         max={product.energyUnits}
// // //                         placeholder="Quantity"
// // //                       />
// // //                       <button
// // //                         name={product.id}
// // //                         value={product.price}
// // //                         onClick={() => {
// // //                           this.handleBuyOrder(key, product.price);
// // //                         }}
// // //                       >
// // //                         Buy
// // //                       </button>
// // //                     </div>
// // //                   ) : null}
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     );
// // //   }
// // // }
// // // export default EnergyTradePage;
// // // // import React, { Component } from 'react';




// // // // class EnergyTradePage extends Component {
 
// // // //   calculatePrice = (energyUnits) => {
// // // //     // Get the current date and time
// // // //     const now = new Date();




// // // //     // Consider factors such as supply and demand, time of day, and seasonality
// // // //     // You can adjust the algorithm based on your specific requirements and data availability




// // // //     // Calculate the base price based on energy units
// // // //     let basePrice = energyUnits * 0.1; // Example: Assuming a base price of 0.1 per energy unit




// // // //     // Adjust the price based on supply and demand
// // // //     const supplyDemandRatio = 1.2; // Example: Assuming a ratio of 1.2 for high demand
// // // //     basePrice *= supplyDemandRatio;




// // // //     // Adjust the price based on time of day
// // // //     const hour = now.getHours();
// // // //     if (hour >= 8 && hour < 18) {
// // // //       // Business hours: Apply a higher price
// // // //       const businessHourMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during business hours
// // // //       basePrice *= businessHourMultiplier;
// // // //     } else {
// // // //       // Non-business hours: Apply a lower price
// // // //       const nonBusinessHourMultiplier = 0.8; // Example: Assuming a multiplier of 0.8 during non-business hours
// // // //       basePrice *= nonBusinessHourMultiplier;
// // // //     }




// // // //     // Adjust the price based on seasonality
// // // //     const month = now.getMonth();
// // // //     if (month >= 3 && month <= 5) {
// // // //       // Spring season: Apply a seasonal price adjustment
// // // //       const springSeasonMultiplier = 1.2; // Example: Assuming a multiplier of 1.2 during spring
// // // //       basePrice *= springSeasonMultiplier;
// // // //     } else if (month >= 6 && month <= 8) {
// // // //       // Summer season: Apply a seasonal price adjustment
// // // //       const summerSeasonMultiplier = 1.5; // Example: Assuming a multiplier of 1.5 during summer
// // // //       basePrice *= summerSeasonMultiplier;
// // // //     } else if (month >= 9 && month <= 11) {
// // // //       // Autumn season: Apply a seasonal price adjustment
// // // //       const autumnSeasonMultiplier = 1.1; // Example: Assuming a multiplier of 1.1 during autumn
// // // //       basePrice *= autumnSeasonMultiplier;
// // // //     } else {
// // // //       // Winter season: Apply a seasonal price adjustment
// // // //       const winterSeasonMultiplier = 0.9; // Example: Assuming a multiplier of 0.9 during winter
// // // //       basePrice *= winterSeasonMultiplier;
// // // //     }




// // // //     // Return the calculated price
// // // //     return basePrice;
// // // //   };
 
// // // //   handleEnergyUnitsChange = (event) => {
// // // //     const energyUnits = event.target.value;
// // // //     const calculatedPrice = this.calculatePrice(energyUnits);




// // // //     this.setState({
// // // //       energyUnits,
// // // //       price: calculatedPrice,
// // // //     });
// // // //   };
// // // //   handleBuyOrder = (index, price) => {
// // // //     const product = this.props.energypurchase[index];
// // // //     const quantity = parseInt(this[`quantity${index}`].value);
 
// // // //     if (quantity > product.energyUnits) {
// // // //       const errorMessage = 'Insufficient energy units';
// // // //       this.setState({ error: errorMessage });
// // // //       return;
// // // //     }


// // // //     // Reset the error state if there was no error
// // // //     this.setState({ error: '' });
 
// // // //     const pricePerUnit = price / product.energyUnits; // Calculate the price per unit
// // // //     const totalPrice = pricePerUnit * quantity; // Calculate the total price based on quantity and price per unit
 
// // // //     const updatedEnergypurchase = [...this.props.energypurchase];
// // // //     updatedEnergypurchase[index].energyUnits -= quantity;
 
// // // //     const { id } = updatedEnergypurchase[index];
// // // //     this.props.BuyOrder(id, totalPrice); // Pass the total price to BuyOrder
 
// // // //     this.setState({ energypurchase: updatedEnergypurchase });
// // // //   };


// // // //   render() {
// // // //     const energypurchase = this.props.energypurchase ?? [];
















// // // //     return (
// // // //       <div id="content">
// // // //         <h1>Sell Product</h1>
// // // //         <form
// // // //           onSubmit={(event) => {
// // // //             event.preventDefault();
// // // //             const energyUnits = this.productenergyUnits.value;
// // // //             //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
// // // //             const calculatedPrice = this.calculatePrice(energyUnits);
// // // //             const price = window.web3.utils.toWei(calculatedPrice.toString(), 'Ether');
// // // //             this.props.SellOrder(energyUnits, price);
// // // //           }}
// // // //         >
// // // //           <div className="form-group mr-sm-2">
// // // //             <input
// // // //               id="productenergyUnits"
// // // //               type="text"
// // // //               ref={(input) => {
// // // //                 this.productenergyUnits = input;
// // // //               }}
// // // //               className="form-control"
// // // //               placeholder="Energy Units"
// // // //               onChange={this.handleEnergyUnitsChange}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div className="form-group mr-sm-2">
// // // //             <input
// // // //               id="productPrice"
// // // //               type="text"
// // // //               value={this.calculatePrice(this.productenergyUnits?.value)}
// // // //               readOnly
// // // //               className="form-control"
// // // //               placeholder="Energy Price"
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <button type="submit" className="btn btn-primary">
// // // //             Sell
// // // //           </button>
// // // //         </form>
// // // //         <p>&nbsp;</p>
// // // //         <h2>Buy Energy</h2>
// // // //         <table className="table">
// // // //           <thead>
// // // //             <tr>
// // // //               <th scope="col">#</th>
// // // //               <th scope="col">EnergyUnits</th>
// // // //               <th scope="col">Price</th>
// // // //               <th scope="col">Owner</th>
// // // //               <th scope="col"></th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody id="productList">
// // // //             {energypurchase.map((product, key) => (
// // // //               <tr key={key}>
// // // //                 <th scope="row">{product.id.toString()}</th>
// // // //                 <td>{product.energyUnits}</td>
// // // //                 <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
// // // //                 <td>{product.owner}</td>
// // // //                 <td>
// // // //                 {!product.purchased ? (
// // // //                     <div>
// // // //                       <input
// // // //                         type="number"
// // // //                         ref={(input) => {
// // // //                           this[`quantity${key}`] = input;
// // // //                         }}
// // // //                         min="1"
// // // //                         max={product.energyUnits}
// // // //                         placeholder="Quantity"
// // // //                       />
// // // //                       <button
// // // //                         name={product.id}
// // // //                         value={product.price}
// // // //                         onClick={() => {
// // // //                           this.handleBuyOrder(key, product.price);
// // // //                         }}
// // // //                       >
// // // //                         Buy
// // // //                       </button>
// // // //                     </div>
// // // //                   ) : null}
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     );
















// // // //   }
// // // // }
















// // // // export default EnergyTradePage;


