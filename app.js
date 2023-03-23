//Requires
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

//Port Number
const portNumber = "3999";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(portNumber, function(){
    console.log("Server is running on port: "+portNumber);
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/signup.html");
});

app.post("/", function(req, res){
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribe",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    };
    var jsondata = JSON.stringify(data);
});

//APIKEY
// 1f76428a37956f3c0b906f94fa9b507e-us21
//LISTID
// 1692f84714