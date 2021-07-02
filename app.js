const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


app.get("/home",(req,res)=>{
    res.json("welcome home")
})

PORT = process.env.PORT || 4000;
app.listen(PORT,console.log("APP RUNNING"))