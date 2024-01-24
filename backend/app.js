const express =  require( "express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt=require("bcryptjs");
app.use(cors());
app.use(express.json())

const mongourl="mongodb+srv://hebbarananya1:OcFrishoXNlngg3I@cluster0.qjrewg4.mongodb.net/"

mongoose.connect(mongourl,{
  useNewUrlParser:true,
})
.then(()=>{console.log("Connected to DB");
})
.catch((e)=>console.log(e));

require("./userdata")
//require("./Energypool")
//require("./userlogin")

const user = mongoose.model("Userinfo");
// const  energyuser = mongoose.model("Energy");
//const user = mongoose.model("UserLogin");
app.post("/register",async(req,res)=>{
  const {username,password,confirmpass,mobilenumber}=req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await user.findOne({username });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await user.create({
      username,
      password:encryptedPassword,
      confirmpass,
      mobilenumber,
    
  });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });

  }
});

app.post("/loginregister", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userFind = await user.findOne({ username });

    if (!userFind) {
      return res.json({ error: "User Not found" });
    }

    const passwordMatch = await bcrypt.compare(password, userFind.password);

    if (passwordMatch) {
      const token = { username: userFind.username };

      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "Invalid Password" });
    }
  } catch (error) {
    res.json({ error: "Server Error" });
  }
});

app.listen(5002, () => {
  console.log("Server Started");
});