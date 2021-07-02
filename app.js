const {api} = require("./helpers/keys");
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan");
const {connection} = require("./db")


//Routers
const home = require("./Route/home");
const users = require("./Route/user");
const admin = require("./Route/admin");



//connecting to database
connection();


app.use(express.json());
app.use(cors())
app.use(`${api}/`,home);
app.use(`${api}/`,users);
app.use(`${api}/`,admin);

//error handler
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
  });
  

PORT= 5000 || process.env.PORT;
app.listen(PORT,console.log(`App Running on ${PORT}`));

module.exports = app;

