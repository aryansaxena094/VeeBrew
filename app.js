//Requires 
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

//Port Number
const portNumber = "3999";

const app = express();

app.listen(portNumber, function(){
    console.log("Server is running on port: "+portNumber);
});