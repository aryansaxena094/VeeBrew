//Requires
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

//Port Number
const portNumber = process.env.PORT || 3999;

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
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    };
    const jsondata = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/1692f84714";

    const options = {
        method: "POST",
        auth: "aryansaxena:ce86b68e34f366a05cc9e4c68b4e1bf8-us21"
    };

    const request = https.request(url, options, function(response){

        if(response.statusCode == 200){
            res.sendFile(__dirname+"/public/success.html");
        } else {
            res.sendFile(__dirname+"/public/failure.html")
        }
        
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsondata)
    request.end();

});

app.post("/failure", function(req, res){
    res.redirect("/");
});

//APIKEY
// ce86b68e34f366a05cc9e4c68b4e1bf8-us21
//LISTID
// 1692f84714