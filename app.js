const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/users.js");
require("./database/index.js");
const CircularJSON = require('circular-json');
const app = express ();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.set('view engine', 'hbs');
const statictempPah=path.join(__dirname,"views");
app.use(express.static(statictempPah));
app.use("/",userRoutes);
app.all("*",(req,res) =>{
    res.send("Route not present");
} )
app.listen(port,()=>{
    console.log(`server listening on port :http//localhost:${port}`);
})