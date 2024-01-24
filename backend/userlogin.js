const mongoose = require( "mongoose");

const UserDetailsSchema= new mongoose.Schema(
{
    username: String,
    password: String,
   
   
},
{
    collection:"Userinfo",
});

mongoose.model("Userinfo",UserDetailsSchema);