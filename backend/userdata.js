const mongoose = require( "mongoose");

const UserDetailsSchema= new mongoose.Schema(
{
    username: String,
    password: String,
    confirmpass: String,
    mobilenumber:String,
   
},
{
    collection:"Userinfo",
});

mongoose.model("Userinfo",UserDetailsSchema);