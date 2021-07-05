const express = require("express");
const Router = express.Router();
const home = require("../controllers/home")

Router.get('/',home.home)

module.exports = Router;