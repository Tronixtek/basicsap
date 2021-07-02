const express = require("express");
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.json("welcome Home")
})

module.exports = Router;