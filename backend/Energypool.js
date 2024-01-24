const mongoose = require( "mongoose");

const EnergyPoolSchema= new mongoose.Schema(
{
    energyUnits: String,
    price: String,
    walletAddress: String,

   
},
{
    collection:"Energy",
});

mongoose.model("Energy",EnergyPoolSchema);