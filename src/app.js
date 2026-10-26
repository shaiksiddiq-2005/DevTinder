//Middleware, using Middleware for the Authentication process...

const {userAuth} = require("../middleware/auth");
const express = require("express");
const app = express();


// Route Handler..   
app.get("/user/login", (req, res)=>{
    res.send ("user Logged in Successfully!");
});

// middleware using..
app.get ("/user/data", userAuth, (req, res, next) => {

    res.send("The user data is sent!"); 
});

app.get ("/user/delete",userAuth, (req, res, next) => {

    res.send("The user data is deleted!"); 
});



app.listen(3000);


